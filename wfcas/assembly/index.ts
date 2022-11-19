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
  joint: Array<Number>;
  x: i32;
  y: i32;
}

const len:i32 = 5;
const height:i32 = 7;

function main(){
  const seed:i32 = 123;
}

function surfaceGrid() {
    let grid: Array<Block> = new Array<Block>(len*height);
    let noBlock = makeBlock(false,false,false,false,false,-1,false,-1,false,false,false,-1,-1);
    for (let i = 0; i < len*height; i++) {
      grid.push(noBlock)
    }
    return grid;
}

function makeBlock(n:bool,e:bool,s:bool,w:bool,
                  haswindow:bool,windowFace:i32,door:bool,doorFace:i32,
                  ground:bool, roof:bool, corner:bool, x:i32, y:i32) {
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
      joint: [0,0,0,0,0,0],
      x: x,
      y: y
  }
  if (block.n){
    block.joint[0] = 1;
    block.joint[1] = 1;
  }
  if (block.e){
    block.joint[1] = 1;
    block.joint[2] = 1;
  }
  if (block.s){
    block.joint[2] = 1;
    block.joint[3] = 1;
  }
  if (block.w){
    block.joint[3] = 1;
    block.joint[0] = 1;
  }
  if (block.ground){
    block.joint[4] = 1;
  }
  if (block.roof){
    block.joint[5] = 1;
  }
  return block;
}

function exist(grid: Array<Block>, x:i32, y:i32){
  if (x >= len || x < 0 || y >= height || y < 0){
    return false;
  }
  return true;
}

function checkCompatibility(grid: Array<Block>, currBlock:Block, newBlock: Block){
  let x:i32 = currBlock.x;
  let y:i32 = currBlock.y;
  let availableSide: Array<i8> = [0,0,0,0];
  if (currBlock.n){
    
  }
}