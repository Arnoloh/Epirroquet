import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import './App.css'

let done = false;

export default function App() {
  const mount = useRef(null)
  const [bat7, setBat7] = useState([])

  useEffect(() => {
    if (done)
      return;
    done = true

    let map = [];
    let currentObjects = [];
    let lvl = [];
    //--------------------SCENE-------------------------------
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFBB39D);
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 2300;
    camera.position.y = 1600;
    camera.position.z = 2500;
    camera.setFocalLength(45);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    //--------------------LIGHTS-------------------------------
    const hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const light = new THREE.PointLight(0xc4c4c4, 10);
    light.position.set(0, 300, 500);
    scene.add(light);

    const light2 = new THREE.PointLight(0xc4c4c4, 10);
    light2.position.set(500, 100, 0);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xc4c4c4, 10);
    light3.position.set(0, 100, -500);
    scene.add(light3);

    const light4 = new THREE.PointLight(0xc4c4c4, 10);
    light4.position.set(-500, 300, 500);
    scene.add(light4);

    //this.AddBlock("door", [0, 0, 0]);
    // this.AddBlock("2", [0, 0, 0]);

    animate();

    window.onresize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    function animate() {
      currentObjects.forEach((e, idx) => {
        MoveBlock(e, lvl[idx]);
      })
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }


    function AddBlock(moduleId, position) {
      const loader = new FBXLoader()
      var path = './assets/modules/' + moduleId + '.fbx';
      loader.load(
        path,
        (object) => {
          object.position.set(position[0] * 200, (position[1] * 200) + 2000, position[2] * 200)
          scene.add(object);
          currentObjects.push(object.id);
          lvl.push(position[1] * 200);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
          console.log(error)
        }
      )
    }

    function MoveBlock(objectId, lvl) {
      var object = scene.getObjectById(objectId, true)
      let np = object.position.clone()
      np.y -= 10;
      if (np.y < lvl) {
        np.y = lvl;
        return;
      }
      object.position.lerp(np, 0.5);
    }


    function GetString() {
      return new Promise((res) => {
        fetch("https://test.massa.net/api/v2/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "jsonrpc": "2.0",
            "id": 1,
            "method": "get_datastore_entries",
            "params": [[
              {
                "address": "A1DLWPKN64VQDoh4zfvkpdWb6wVrN2psRKypCGNBxpQa9tx7FPY",
                "key": [100, 97, 116, 97],

              }]]
          })
        }).then(data => (data.json().then(txt => { res(txt.result[0].final_value) })))
      });
    }
    function deserializeData(obj) {
      const data = [];
      const items = obj.split(";");
      items.forEach((e) => {
        if (e.length > 4) {
          const split = e.split(",");
          if (isNaN(parseInt(split[0]))) {
            console.log(split);
          }
          data.push({
            id: parseInt(split[0]),
            x: parseInt(split[1]),
            y: parseInt(split[3]),
            z: parseInt(split[2])
          });
        }
      });
      return data;
    }

    async function RefreshAndSpawn() {
      var request = await GetString()
      var str = String.fromCharCode.apply(String, request);
      let newMap = deserializeData(str);
      if (newMap.length !== map.length) {
        for (let i = map.length; i < newMap.length; i++) {
          setTimeout(() => {
            AddBlock(`${newMap[i].id}`, [newMap[i].x, newMap[i].y, newMap[i].z]);
          }, (i - map.length) * 500);
        }

        map = newMap;
      }
      setTimeout(() => {
        RefreshAndSpawn();
      }, 5000);
    }

    RefreshAndSpawn();

  }, []);

  return (
    <div>
      <div className="logo">archi.tech</div>
      <div className="powered">powered by massa.labs</div>
      <div ref={mount} />
      <div className="resettxt">resetting in</div>
      <div className="resetbar" />
    </div>
  )
}