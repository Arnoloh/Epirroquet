interface Block {
  n: bool;
  e: bool;
  s: bool;
  w: bool;
  haswindow: bool;
  windowFace: i8;
  door: bool;
  doorFace: i8;
  ground: bool;
  roof: bool;
  corner: bool;
  pylone: bool;
  joint: Array<bool>;
  x: i32;
  y: i32;
}

const len:i32 = 5;
const height:i32 = 7;
var viableOption: Array<Block> = [];
const startX:i32 = 0;
const startY:i32 = 0;

function main(){
  const seed:i32 = 123;
}

function surfaceGrid() {
    let grid: Array<Block> = new Array<Block>(len*height);
    let noBlock = makeBlock(false,false,false,false,false,-1,false,-1,false,false,false,false,-1,-1);
    for (let i = 0; i < len*height; i++) {
      grid.push(noBlock)
    }
    return grid;
}

function makeBlock(n:bool,e:bool,s:bool,w:bool,
                  haswindow:bool,windowFace:i32,door:bool,doorFace:i32,
                  ground:bool, roof:bool, corner:bool,pylone:bool, x:i32, y:i32) {
  let block: Block = {
      n: n,
      e: e,
      s: s,
      w: w,
      haswindow: haswindow,
      windowFace: windowFace,
      door: door,
      doorFace: doorFace,
      ground: ground,
      roof: roof,
      corner: corner,
      pylone: pylone,
      joint: [false,false,false,false,false,false],
      x: x,
      y: y
  }
  if (block.n){
    block.joint[0] = true;
    block.joint[1] = true;
  }
  if (block.e){
    block.joint[1] = true;
    block.joint[2] = true;
  }
  if (block.s){
    block.joint[2] = true;
    block.joint[3] = true;
  }
  if (block.w){
    block.joint[3] = true;
    block.joint[0] = true;
  }
  if (block.ground){
    block.joint[4] = true;
  }
  if (block.roof){
    block.joint[5] = true;
  }
  return block;
}

function jointOverride(block:Block, id:i32){
  block.joint[id] = true;
  return block;
}

function exist(grid: Array<Block>, x:i32, y:i32){
  if (x >= len || x < 0 || y >= height || y < 0){
    return false;
  }
  return true;
}

function coinFlip(){
  let value:i32 = Math.floor(Math.random() * (1 - 0 + 1)) + 0; // a remplacer avec la blockchain pour le random
  return value==0;
}

function randomRange(min:i32, max:i32){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCompatibility(grid: Array<Block>, currBlock:Block){
  let x:i32 = currBlock.x;
  let y:i32 = currBlock.y;
  if (currBlock.joint[0]){ //joint haut gauche
    if (!currBlock.joint[2]){ // not joint bas gauche
      if (exist(grid, x-1, y)){

        let windowFace:i8 = 0
        let pylone: bool = randomRange(0,3) == 0;
        let west: bool = coinFlip();
        if (pylone){
          let west:bool = false
        }
        let haswindow: bool = coinFlip()
        if (haswindow){
          if (coinFlip()){
            windowFace = 3;
          }
        }
        let newBlock:Block = makeBlock(!pylone,false,false, west, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, west,pylone, x-1, y);
        if (pylone){
          jointOverride(newBlock, 1);
        }
        viableOption.push(newBlock);
      }
    }

    if (!currBlock.joint[1]){ // not joint haut droite
      if (exist(grid, x, y+1)){

        let windowFace:i8 = 3
        let pylone: bool = randomRange(0,3) == 0;
        let north: bool = coinFlip();
        if (pylone){
          let north:bool = false
        }
        let haswindow: bool = coinFlip()
        if (haswindow){
          if (coinFlip()){
            windowFace = 0;
          }
        }
        let newBlock:Block = makeBlock(north,false,false, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north,pylone, x, y+1);
        if (pylone){
          jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }
    }
  }


  if (currBlock.joint[1]){ //joint haut droit
    if (!currBlock.joint[3]){ // not joint bas droit
      if (exist(grid, x+1, y)){

        let windowFace:i8 = 0
        let pylone: bool = randomRange(0,3) == 0;
        let east: bool = coinFlip();
        if (pylone){
          let east:bool = false
        }
        let haswindow: bool = coinFlip()
        if (haswindow){
          if (coinFlip()){
            windowFace = 1;
          }
        }
        let newBlock:Block = makeBlock(!pylone,false,false, east, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, east,pylone, x+1, y);
        if (pylone){
          jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
    }
  }


  
}