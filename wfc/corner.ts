export interface Corner {
    ne: boolean;
    nw: boolean;
    se: boolean;
    sw: boolean;
    door: boolean;
    doorFace: number;
    haswindow: boolean;
    windowFace: number;
    windowSmall: boolean;
    ground: number;
}

export function makeCorner(ne, nw, se, sw, door, doorFace, haswindow, windowFace, windowSmall, ground){
    var corner: Corner = {
        ne: ne,
        nw: nw,
        se: se,
        sw: sw,
        door: door,
        doorFace: doorFace,
        haswindow: haswindow,
        windowFace: windowFace,
        windowSmall: windowSmall,
        ground: ground
    };
    return corner;
}
