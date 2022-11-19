interface Block {
  n: bool;
  e: bool;
  s: bool;
  w: bool;
  haswindow: bool;
  windowSmall: bool;
  windowFace: i8;
  door: bool;
  doorFace: i8;
  ground: bool;
  roof: bool;
}

function main(){
  const seed:i32 = 123;
}

function surfaceGrid(long:i32, larg:i32) {
    let grid: Array<Block>;
    let noBlock = makeBlock(false,false,false,false,false,false,-1,false,-1,false,false);
    for (let i = 0; i < long; i++) {
        for (let j = 0; j < larg; j++) {
            grid[i].push(noBlock);
        }
    }
    return grid;
}

function makeBlock(n:bool,e:bool,s:bool,w:bool,haswindow:bool,windowSmall:bool,windowFace:i32,door:bool,doorFace:i32,ground:bool, roof:bool) {
    let block: Block = {
        n: n,
        e: e,
        s: s,
        w: w,
        haswindow: haswindow,
        windowSmall: windowSmall,
        windowFace: windowFace,
        door: door,
        doorFace: doorFace,
        ground: ground,
        roof: roof
    }
}
