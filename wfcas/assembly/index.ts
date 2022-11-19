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

////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////    JOINT 0    ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

  if (currBlock.joint[0]){ 
    //joint haut gauche
    if (!currBlock.joint[2] && !currBlock.joint[1]){
      if (exist(grid, x-1, y)){
        //check la gauche avec un mur north
        let windowFace:i8 = 0
        let pylone: bool = randomRange(0,3) == 0;
        let west: bool = coinFlip();
        if (pylone){
          west = false
        }
        let haswindow: bool = coinFlip()
        if (haswindow && west){
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
      if (exist(grid, x, y+1)){
        //check le haut avec un mur west
        let windowFace:i8 = 3;
        let pylone: bool = randomRange(0,3) == 0;
        let north: bool = coinFlip();
        if (pylone){
          north = false;
        }
        let haswindow: bool = coinFlip();
        if (haswindow && north){
          if (coinFlip()){
            windowFace = 0;
          }
        }
        let newBlock:Block = makeBlock(north, false, false, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north, pylone, x, y+1);
        if (pylone){
          jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////
    //connection 0-2 not 1
    if (currBlock.joint[2] && !currBlock.joint[1]){
      if (exist(grid, x-1, y)){
        //check le bas avec un mur west
        let windowFace:i8 = 3;
        let pylone: bool = randomRange(0,3) == 0;
        let south: bool = coinFlip();
        if (pylone){
          south = false;
        }
        let haswindow: bool = coinFlip();
        if (haswindow && south){
          if (coinFlip()){
            windowFace = 2;
          }
        }
        let newBlock:Block = makeBlock(false, false, south, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, south, pylone, x, y-1);
        if (pylone){
          jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
      if (exist(grid, x, y+1)){
        //check le haut avec un mur west
        let windowFace:i8 = 3;
        let pylone: bool = randomRange(0,3) == 0;
        let north: bool = coinFlip();
        if (pylone){
          north = false;
        }
        let haswindow: bool = coinFlip();
        if (haswindow && north){
          if (coinFlip()){
            windowFace = 0;
          }
        }
        let newBlock:Block = makeBlock(north, false, false, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north, pylone, x, y+1);
        if (pylone){
          jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }
    }

////////////////////////////////////////////////////////////////////////////
    if (currBlock.joint[1] && !currBlock.joint[2]){
      if (exist(grid, x-1, y)){
        //check la gauche avec un mur north
        let windowFace:i8 = 0
        let pylone: bool = randomRange(0,3) == 0;
        let west: bool = coinFlip();
        if (pylone){
          west = false
        }
        let haswindow: bool = coinFlip()
        if (haswindow && west){
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

      if (exist(grid, x+1, y)){
        //check la droite avec un mur north
        let windowFace:i8 = 0
        let pylone: bool = randomRange(0,3) == 0;
        let east: bool = coinFlip();
        if (pylone){
          east = false
        }
        let haswindow: bool = coinFlip()
        if (haswindow && east){
          if (coinFlip()){
            windowFace = 1;
          }
        }
        let newBlock:Block = makeBlock(!pylone,east,false, false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, east,pylone, x+1, y);
        if (pylone){
          jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
    }
    if (currBlock.joint[1] && currBlock.joint[2]){
      if (exist(grid, x+1, y)){
        //check la droite avec un mur north
        let windowFace:i8 = 0
        let pylone: bool = randomRange(0,3) == 0;
        let east: bool = coinFlip();
        if (pylone){
          east = false
        }
        let haswindow: bool = coinFlip()
        if (haswindow && east){
          if (coinFlip()){
            windowFace = 1;
          }
        }
        let newBlock:Block = makeBlock(!pylone,east,false, false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, east,pylone, x+1, y);
        if (pylone){
          jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
      if (exist(grid, x-1, y)){
        //check le bas avec un mur west
        let windowFace:i8 = 3;
        let pylone: bool = randomRange(0,3) == 0;
        let south: bool = coinFlip();
        if (pylone){
          south = false;
        }
        let haswindow: bool = coinFlip();
        if (haswindow && south){
          if (coinFlip()){
            windowFace = 2;
          }
        }
        let newBlock:Block = makeBlock(false, false, south, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, south, pylone, x, y-1);
        if (pylone){
          jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
    }
  }

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     JOINT 1     ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

if (currBlock.joint[1]){ // done
  //joint haut droit
  if (!currBlock.joint[0] && !currBlock.joint[3]){
    if (exist(grid, x+1, y)){
      //check la droite avec un mur north
      let windowFace:i8 = 0
      let pylone: bool = randomRange(0,3) == 0;
      let east: bool = coinFlip();
      if (pylone){
        east = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && east){
        if (coinFlip()){
          windowFace = 1;
        }
      }
      let newBlock:Block = makeBlock(!pylone,east,false, false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, east,pylone, x+1, y);
      if (pylone){
        jointOverride(newBlock, 0);
      }
      viableOption.push(newBlock);
    }
    if (exist(grid, x, y+1)){
      //check le haut avec un mur east
      let windowFace:i8 = 1;
      let pylone: bool = randomRange(0,3) == 0;
      let north: bool = coinFlip();
      if (pylone){
        north = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && north){
        if (coinFlip()){
          windowFace = 0;
        }
      }
      let newBlock:Block = makeBlock(north, !pylone, false,false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north, pylone, x, y+1);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////
  //connection 1-3 not 0
  if (currBlock.joint[3] && !currBlock.joint[0]){ // done
    if (exist(grid, x, y+1)){
      //check le haut avec un mur east
      let windowFace:i8 = 1;
      let pylone: bool = randomRange(0,3) == 0;
      let north: bool = coinFlip();
      if (pylone){
        north = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && north){
        if (coinFlip()){
          windowFace = 0;
        }
      }
      let newBlock:Block = makeBlock(north, !pylone, false, false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north, pylone, x, y+1);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }
    if (exist(grid, x, y-1)){
      //check le bas avec un mur east
      let windowFace:i8 = 1;
      let pylone: bool = randomRange(0,3) == 0;
      let south: bool = coinFlip();
      if (pylone){
        south = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && south){
        if (coinFlip()){
          windowFace = 2;
        }
      }
      let newBlock:Block = makeBlock(false, !pylone, false, south, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, south, pylone, x, y-1);
      if (pylone){
        jointOverride(newBlock, 1);
      }
      viableOption.push(newBlock);
    }
  }

////////////////////////////////////////////////////////////////////////////
  if (currBlock.joint[0] && !currBlock.joint[3]){ //TODO
    if (exist(grid, x-1, y)){
      //check la gauche avec un mur north
      let windowFace:i8 = 0
      let pylone: bool = randomRange(0,3) == 0;
      let west: bool = coinFlip();
      if (pylone){
        west = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && west){
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

    if (exist(grid, x+1, y)){
      //check la droite avec un mur north
      let windowFace:i8 = 0
      let pylone: bool = randomRange(0,3) == 0;
      let east: bool = coinFlip();
      if (pylone){
        east = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && east){
        if (coinFlip()){
          windowFace = 1;
        }
      }
      let newBlock:Block = makeBlock(!pylone,east,false, false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, east,pylone, x+1, y);
      if (pylone){
        jointOverride(newBlock, 0);
      }
      viableOption.push(newBlock);
    }
  }

//////////////////////////////////////////////////////////////////////////////////////

  if (currBlock.joint[0] && currBlock.joint[3]){
    if (exist(grid, x-1, y)){
      //check la gauche avec un mur north
      let windowFace:i8 = 0
      let pylone: bool = randomRange(0,3) == 0;
      let west: bool = coinFlip();
      if (pylone){
        west = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && west){
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
    if (exist(grid, x, y-1)){
      //check le bas avec un mur east
      let windowFace:i8 = 1;
      let pylone: bool = randomRange(0,3) == 0;
      let south: bool = coinFlip();
      if (pylone){
        south = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && south){
        if (coinFlip()){
          windowFace = 2;
        }
      }
      let newBlock:Block = makeBlock(false, !pylone, false, south, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, south, pylone, x, y-1);
      if (pylone){
        jointOverride(newBlock, 1);
      }
      viableOption.push(newBlock);
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////   JOINT 2    //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

if (currBlock.joint[2]){ // done
  //joint haut droit
  if (!currBlock.joint[0] && !currBlock.joint[3]){
    if (exist(grid, x-1, y)){
      //check le bas avec un mur west
      let windowFace:i8 = 3;
      let pylone: bool = randomRange(0,3) == 0;
      let south: bool = coinFlip();
      if (pylone){
        south = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && south){
        if (coinFlip()){
          windowFace = 2;
        }
      }
      let newBlock:Block = makeBlock(false, false, south, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, south, pylone, x, y-1);
      if (pylone){
        jointOverride(newBlock, 0);
      }
      viableOption.push(newBlock);
    }

    if (exist(grid, x-1, y)){
      //check la gauche avec un mur south
      let windowFace:i8 = 2
      let pylone: bool = randomRange(0,3) == 0;
      let west: bool = coinFlip();
      if (pylone){
        west = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && west){
        if (coinFlip()){
          windowFace = 3;
        }
      }
      let newBlock:Block = makeBlock(false,false,!pylone, west, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, west,pylone, x-1, y);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }
    
  }

//////////////////////////////////////////////////////////////////////////////////////////////////
  //connection 1-3 not 0
  if (currBlock.joint[0] && !currBlock.joint[3]){ // done
    if (exist(grid, x, y+1)){
      //check le haut avec un mur west
      let windowFace:i8 = 3;
      let pylone: bool = randomRange(0,3) == 0;
      let north: bool = coinFlip();
      if (pylone){
        north = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && north){
        if (coinFlip()){
          windowFace = 0;
        }
      }
      let newBlock:Block = makeBlock(north, false, false, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north, pylone, x, y+1);
      if (pylone){
        jointOverride(newBlock, 2);
      }
      viableOption.push(newBlock);
    }
    if (exist(grid, x-1, y)){
      //check le bas avec un mur west
      let windowFace:i8 = 3;
      let pylone: bool = randomRange(0,3) == 0;
      let south: bool = coinFlip();
      if (pylone){
        south = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && south){
        if (coinFlip()){
          windowFace = 2;
        }
      }
      let newBlock:Block = makeBlock(false, false, south, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, south, pylone, x, y-1);
      if (pylone){
        jointOverride(newBlock, 0);
      }
      viableOption.push(newBlock);
    }
  }

////////////////////////////////////////////////////////////////////////////
  if (currBlock.joint[3] && !currBlock.joint[0]){ //TODO
    if (exist(grid, x+1, y)){
      //check la droite avec un mur south
      let windowFace:i8 = 2
      let pylone: bool = randomRange(0,3) == 0;
      let east: bool = coinFlip();
      if (pylone){
        east = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && east){
        if (coinFlip()){
          windowFace = 1;
        }
      }
      let newBlock:Block = makeBlock(false,east,!pylone, false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, east,pylone, x+1, y);
      if (pylone){
        jointOverride(newBlock, 2);
      }
      viableOption.push(newBlock);
    }

    if (exist(grid, x-1, y)){
      //check la gauche avec un mur south
      let windowFace:i8 = 2
      let pylone: bool = randomRange(0,3) == 0;
      let west: bool = coinFlip();
      if (pylone){
        west = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && west){
        if (coinFlip()){
          windowFace = 3;
        }
      }
      let newBlock:Block = makeBlock(false,false,!pylone, west, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, west,pylone, x-1, y);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }
  }

//////////////////////////////////////////////////////////////////////////////////////

  if (currBlock.joint[1] && currBlock.joint[2]){
    if (exist(grid, x+1, y)){
      //check la droite avec un mur south
      let windowFace:i8 = 2
      let pylone: bool = randomRange(0,3) == 0;
      let east: bool = coinFlip();
      if (pylone){
        east = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && east){
        if (coinFlip()){
          windowFace = 1;
        }
      }
      let newBlock:Block = makeBlock(false,east,!pylone, false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, east,pylone, x+1, y);
      if (pylone){
        jointOverride(newBlock, 2);
      }
      viableOption.push(newBlock);
    }
    if (exist(grid, x, y+1)){
      //check le haut avec un mur west
      let windowFace:i8 = 3;
      let pylone: bool = randomRange(0,3) == 0;
      let north: bool = coinFlip();
      if (pylone){
        north = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && north){
        if (coinFlip()){
          windowFace = 0;
        }
      }
      let newBlock:Block = makeBlock(north, false, false, !pylone, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north, pylone, x, y+1);
      if (pylone){
        jointOverride(newBlock, 2);
      }
      viableOption.push(newBlock);
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////     JOINT 3     /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

if (currBlock.joint[0]){ 
  //joint haut gauche
  if (!currBlock.joint[2] && !currBlock.joint[1]){
    if (exist(grid, x-1, y)){
      //check la gauche avec un mur south
      let windowFace:i8 = 2
      let pylone: bool = randomRange(0,3) == 0;
      let west: bool = coinFlip();
      if (pylone){
        west = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && west){
        if (coinFlip()){
          windowFace = 3;
        }
      }
      let newBlock:Block = makeBlock(false,false,!pylone, west, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, west,pylone, x-1, y);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }

    if (exist(grid, x, y-1)){
      //check le bas avec un mur east
      let windowFace:i8 = 1;
      let pylone: bool = randomRange(0,3) == 0;
      let south: bool = coinFlip();
      if (pylone){
        south = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && south){
        if (coinFlip()){
          windowFace = 2;
        }
      }
      let newBlock:Block = makeBlock(false, !pylone, false, south, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, south, pylone, x, y-1);
      if (pylone){
        jointOverride(newBlock, 1);
      }
      viableOption.push(newBlock);
    }

  }

//////////////////////////////////////////////////////////////////////////////////////////////////
  //connection 0-2 not 1
  if (currBlock.joint[2] && !currBlock.joint[1]){
    if (exist(grid, x-1, y)){
      //check la gauche avec un mur south
      let windowFace:i8 = 2
      let pylone: bool = randomRange(0,3) == 0;
      let west: bool = coinFlip();
      if (pylone){
        west = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && west){
        if (coinFlip()){
          windowFace = 3;
        }
      }
      let newBlock:Block = makeBlock(false,false,!pylone, west, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, west,pylone, x-1, y);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }
    if (exist(grid, x+1, y)){
      //check la droite avec un mur south
      let windowFace:i8 = 2
      let pylone: bool = randomRange(0,3) == 0;
      let east: bool = coinFlip();
      if (pylone){
        east = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && east){
        if (coinFlip()){
          windowFace = 1;
        }
      }
      let newBlock:Block = makeBlock(false,east,!pylone, false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, east,pylone, x+1, y);
      if (pylone){
        jointOverride(newBlock, 2);
      }
      viableOption.push(newBlock);
    }

  }

////////////////////////////////////////////////////////////////////////////
  if (currBlock.joint[1] && !currBlock.joint[2]){
    if (exist(grid, x, y+1)){
      //check le haut avec un mur east
      let windowFace:i8 = 1;
      let pylone: bool = randomRange(0,3) == 0;
      let north: bool = coinFlip();
      if (pylone){
        north = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && north){
        if (coinFlip()){
          windowFace = 0;
        }
      }
      let newBlock:Block = makeBlock(north, !pylone, false,false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north, pylone, x, y+1);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }

    if (exist(grid, x, y-1)){
      //check le bas avec un mur east
      let windowFace:i8 = 1;
      let pylone: bool = randomRange(0,3) == 0;
      let south: bool = coinFlip();
      if (pylone){
        south = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && south){
        if (coinFlip()){
          windowFace = 2;
        }
      }
      let newBlock:Block = makeBlock(false, !pylone, false, south, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, south, pylone, x, y-1);
      if (pylone){
        jointOverride(newBlock, 1);
      }
      viableOption.push(newBlock);
    }
  }
  if (currBlock.joint[1] && currBlock.joint[2]){
    if (exist(grid, x-1, y)){
      //check la gauche avec un mur south
      let windowFace:i8 = 2
      let pylone: bool = randomRange(0,3) == 0;
      let west: bool = coinFlip();
      if (pylone){
        west = false
      }
      let haswindow: bool = coinFlip()
      if (haswindow && west){
        if (coinFlip()){
          windowFace = 3;
        }
      }
      let newBlock:Block = makeBlock(false,false,!pylone, west, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, west,pylone, x-1, y);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }

    if (exist(grid, x, y+1)){
      //check le haut avec un mur east
      let windowFace:i8 = 1;
      let pylone: bool = randomRange(0,3) == 0;
      let north: bool = coinFlip();
      if (pylone){
        north = false;
      }
      let haswindow: bool = coinFlip();
      if (haswindow && north){
        if (coinFlip()){
          windowFace = 0;
        }
      }
      let newBlock:Block = makeBlock(north, !pylone, false,false, haswindow, windowFace, false, 0, currBlock.ground, currBlock.roof, north, pylone, x, y+1);
      if (pylone){
        jointOverride(newBlock, 3);
      }
      viableOption.push(newBlock);
    }
    
  }
}

}