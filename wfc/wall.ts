export interface Wall{
    n: boolean;
    e: boolean;
    s: boolean;
    w: boolean;
    haswindow: boolean;
    windowSmall: boolean;
    door: boolean;
    ground:boolean;
}

export function createWall(n, e, s, w, haswindow, windowSmall, door, ground) {
    var wall: Wall = {
        n: n,
        e: e,
        s: s,
        w: w,
        haswindow: haswindow,
        windowSmall: windowSmall,
        door: door,
        ground: ground
    }
    return wall;
}
