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

function indexion():Array<Block>{
  let array: Array<Block> = new Array<Block>(73);
  array.push({ //south wall 0
    n: false,
    e: false,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,true,true,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //west wall 1
    n: false,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,false,true,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //north wall 2
    n: true,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,true,false,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //east wall 3
    n: false,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,true,false,true,false,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south wall window 4
    n: false,
    e: false,
    s: true,
    w: false,
    haswindow: true,
    windowFace: 2,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,true,true,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //west wall window 5
    n: false,
    e: false,
    s: false,
    w: true,
    haswindow: true,
    windowFace: 3,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,false,true,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //north wall window 6
    n: true,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: 0,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,true,false,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //east wall window 7
    n: false,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: 1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,true,false,true,false,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south wall ground 8
    n: false,
    e: false,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,true,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //west wall ground 9
    n: false,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,false,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north wall ground 10
    n: true,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,true,false,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //east wall ground 11
    n: false,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,true,false,true,true,false],
    x: -1,
    y: -1,
  });
  ///////////////////////////////////////////////////////
  array.push({ //south wall window ground 12
    n: false,
    e: false,
    s: true,
    w: false,
    haswindow: true,
    windowFace: 2,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,true,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //west wall window ground 13
    n: false,
    e: false,
    s: false,
    w: true,
    haswindow: true,
    windowFace: 3,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,false,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north wall window ground 14
    n: true,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: 0,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,true,false,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //east wall window ground 15
    n: false,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: 1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,true,false,true,true,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south wall ground door 16
    n: false,
    e: false,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 2,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,true,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //west wall ground door 17
    n: false,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 3,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,false,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north wall ground door 18
    n: true,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 0,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,true,false,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //east wall ground door 19
    n: false,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,true,false,true,true,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south west corner 20
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //north west corner 21
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //north east corner 22
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //south east corner 23
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,false,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south west-window corner 24
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: true,
    windowFace: 3,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //north-window west corner 25
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: true,
    windowFace: 0,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //north east-window corner 26
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: true,
    windowFace: 1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //south-window east corner 27
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: true,
    windowFace: 2,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,false,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south-window west corner 28
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: true,
    windowFace: 2,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //north west-window corner 29
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: true,
    windowFace: 3,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //north-window east corner 30
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: true,
    windowFace: 0,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //south east-window corner 31
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: true,
    windowFace: 1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,false,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south west corner ground 32
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north west corner ground 33
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north east corner ground 34
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //south east corner ground 35
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,true,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south west-window corner ground 36
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: true,
    windowFace: 3,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north-window west corner ground 37
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: true,
    windowFace: 0,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north east-window corner ground 38
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: true,
    windowFace: 1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //south-window east corner ground 39
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: true,
    windowFace: 2,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,true,false],
    x: -1,
    y: -1,
  });
  ////////////////////////////////////////////////////////
  array.push({ //south-window west corner ground 40
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: true,
    windowFace: 2,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north west-window corner ground 41
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: true,
    windowFace: 3,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north-window east corner ground 42
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: true,
    windowFace: 0,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //south east-window corner ground 43
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: true,
    windowFace: 1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,true,false],
    x: -1,
    y: -1,
  });
  ///////////////////////////////////////////////////////
  array.push({ //south-door west corner ground 44
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 2,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north west-door corner ground 45
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 3,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north-door east corner ground 46
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 0,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //south east-door corner ground 47
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,true,false],
    x: -1,
    y: -1,
  });
  ///////////////////////////////////////////////////////
  array.push({ //south west-door corner ground 48
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 3,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north-door west corner ground 49
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 0,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //north east-door corner ground 50
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 1,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //south-door east corner ground 51
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: true,
    doorFace: 2,
    ground: true,
    roof: false,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,true,false],
    x: -1,
    y: -1,
  });
  /////////////////////////////////////////////////////////
  array.push({ //bottom left pylone 52
    n: false,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,true,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //top left pylone 53
    n: false,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,false,false,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //top right pylone 54
    n: false,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,true,false,false,false,false],
    x: -1,
    y: -1,
  });
  array.push({ //bottom right pylone 55
    n: false,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,false,true,false,false],
    x: -1,
    y: -1,
  });
  ///////////////////////////////////////////////////////
  array.push({ //bottom left pylone ground 56
    n: false,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,true,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //top left pylone ground 57
    n: false,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [true,false,false,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //top right pylone ground 58
    n: false,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,true,false,false,true,false],
    x: -1,
    y: -1,
  });
  array.push({ //bottom right pylone ground 59
    n: false,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: true,
    roof: false,
    corner: false,
    pylone: false,
    joint: [false,false,false,true,true,false],
    x: -1,
    y: -1,
  });
  /////////////////////////////////////////////////////////
  array.push({ //south roof 60
    n: false,
    e: false,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: false,
    pylone: false,
    joint: [false,false,true,true,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //west roof 61
    n: false,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: false,
    pylone: false,
    joint: [true,false,true,false,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //north roof 62
    n: true,
    e: false,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: false,
    pylone: false,
    joint: [true,true,false,false,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //east roof 63
    n: false,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: false,
    pylone: false,
    joint: [false,true,false,true,false,true],
    x: -1,
    y: -1,
  });
  ///////////////////////////////////////////////////////
  array.push({ //south west corner roof 64
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: false,
    joint: [true,false,true,true,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //north west corner roof 65
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: false,
    joint: [true,true,true,false,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //north east corner roof 66
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: false,
    joint: [true,true,false,true,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //south east corner roof 67
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: false,
    joint: [false,true,true,true,false,true],
    x: -1,
    y: -1,
  });
  ///////////////////////////////////////////////////////
  array.push({ //south west corner roof pylone 68
    n: false,
    e: false,
    s: true,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: true,
    joint: [false,false,true,false,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //north west corner roof pylone 69
    n: true,
    e: false,
    s: false,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: true,
    joint: [true,false,false,false,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //north east corner roof pylone 70
    n: true,
    e: true,
    s: false,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: true,
    joint: [false,true,false,false,false,true],
    x: -1,
    y: -1,
  });
  array.push({ //south east corner roof pylone 71
    n: false,
    e: true,
    s: true,
    w: false,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: true,
    joint: [false,false,false,true,false,true],
    x: -1,
    y: -1,
  });
  ///////////////////////////////////////////////////////
  array.push({ //pyramid roof 72
    n: true,
    e: true,
    s: true,
    w: true,
    haswindow: false,
    windowFace: -1,
    door: false,
    doorFace: -1,
    ground: false,
    roof: true,
    corner: true,
    pylone: false,
    joint: [true,true,true,true,false,true],
    x: -1,
    y: -1,
  });
  return array;

}

const len:i32 = 5;
const height:i32 = 7;
var viableOption: Array<Block> = [];
const startX:i32 = 0;
const startY:i32 = 0;
var GRID:Array<Block> = surfaceGrid();

function main():void{
  const seed:i32 = 123;
}

function surfaceGrid(): Array<Block>{
    let grid: Array<Block> = new Array<Block>(len*height);
    let noBlock = makeBlock(false,false,false,false,false,-1,false,-1,false,false,false,false,-1,-1);
    for (let i = 0; i < len*height; i++) {
      grid.push(noBlock)
    }
    return grid;
}

function makeBlock(n:bool,e:bool,s:bool,w:bool,
                  haswindow:bool,windowFace:i32,door:bool,doorFace:i32,
                  ground:bool, roof:bool, corner:bool,pylone:bool, x:i32, y:i32):Block {
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

function jointOverride(block:Block, id:i32): Block{
  block.joint[id] = true;
  return block;
}

function exist(x:i32, y:i32): bool{
  if (x >= len || x < 0 || y >= height || y < 0){
    return false;
  }
  return true;
}

function coinFlip(): bool{
  let value:i32 = Math.floor(Math.random() * (1 - 0 + 1)) + 0; // a remplacer avec la blockchain pour le random
  return value==0;
}

function randomRange(min:i32, max:i32): i32{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function checkCompatibility(currBlock:Block):void{
  let x:i32 = currBlock.x;
  let y:i32 = currBlock.y;

////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////    JOINT 0    ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

  if (currBlock.joint[0]){ 
    //joint haut gauche
    if (!currBlock.joint[2] && !currBlock.joint[1]){
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 1);
        }
        viableOption.push(newBlock);
      }
      if (exist(x, y+1)){
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
          newBlock = jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////
    //connection 0-2 not 1
    if (currBlock.joint[2] && !currBlock.joint[1]){
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
      if (exist(x, y+1)){
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
          newBlock = jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }
    }

////////////////////////////////////////////////////////////////////////////
    if (currBlock.joint[1] && !currBlock.joint[2]){
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 1);
        }
        viableOption.push(newBlock);
      }

      if (exist(x+1, y)){
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
          newBlock = jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
    }
    if (currBlock.joint[1] && currBlock.joint[2]){
      if (exist(x+1, y)){
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
          newBlock = jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 0);
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
      if (exist(x+1, y)){
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
          newBlock = jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
      if (exist(x, y+1)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }
    }

  //////////////////////////////////////////////////////////////////////////////////////////////////
    //connection 1-3 not 0
    if (currBlock.joint[3] && !currBlock.joint[0]){ // done
      if (exist(x, y+1)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }
      if (exist(x, y-1)){
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
          newBlock = jointOverride(newBlock, 1);
        }
        viableOption.push(newBlock);
      }
    }

  ////////////////////////////////////////////////////////////////////////////
    if (currBlock.joint[0] && !currBlock.joint[3]){ //TODO
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 1);
        }
        viableOption.push(newBlock);
      }

      if (exist(x+1, y)){
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
          newBlock = jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
    }

  //////////////////////////////////////////////////////////////////////////////////////

    if (currBlock.joint[0] && currBlock.joint[3]){
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 1);
        }
        viableOption.push(newBlock);
      }
      if (exist(x, y-1)){
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
          newBlock = jointOverride(newBlock, 1);
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
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }

      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }
      
    }

  //////////////////////////////////////////////////////////////////////////////////////////////////
    //connection 1-3 not 0
    if (currBlock.joint[0] && !currBlock.joint[3]){ // done
      if (exist(x, y+1)){
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
          newBlock = jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 0);
        }
        viableOption.push(newBlock);
      }
    }

  ////////////////////////////////////////////////////////////////////////////
    if (currBlock.joint[3] && !currBlock.joint[0]){ //TODO
      if (exist(x+1, y)){
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
          newBlock = jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }

      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }
    }

  //////////////////////////////////////////////////////////////////////////////////////

    if (currBlock.joint[1] && currBlock.joint[2]){
      if (exist(x+1, y)){
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
          newBlock = jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }
      if (exist(x, y+1)){
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
          newBlock = jointOverride(newBlock, 2);
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
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }

      if (exist(x, y-1)){
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
          newBlock = jointOverride(newBlock, 1);
        }
        viableOption.push(newBlock);
      }

    }

  //////////////////////////////////////////////////////////////////////////////////////////////////
    //connection 0-2 not 1
    if (currBlock.joint[2] && !currBlock.joint[1]){
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }
      if (exist(x+1, y)){
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
          newBlock = jointOverride(newBlock, 2);
        }
        viableOption.push(newBlock);
      }

    }

  ////////////////////////////////////////////////////////////////////////////
    if (currBlock.joint[1] && !currBlock.joint[2]){
      if (exist(x, y+1)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }

      if (exist(x, y-1)){
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
          newBlock = jointOverride(newBlock, 1);
        }
        viableOption.push(newBlock);
      }
    }
    if (currBlock.joint[1] && currBlock.joint[2]){
      if (exist(x-1, y)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }

      if (exist(x, y+1)){
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
          newBlock = jointOverride(newBlock, 3);
        }
        viableOption.push(newBlock);
      }
    }
  }
  let optSize:i32 = viableOption.length;
  let id:i32 = randomRange(0, optSize);

}