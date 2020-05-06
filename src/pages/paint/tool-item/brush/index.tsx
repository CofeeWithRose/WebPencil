import { PCanvasContext } from "../../p-canvas/pcanvas.context";

export class BrushStatus {
    constructor(

        public readonly x: number,

        public readonly y: number,

        public readonly pressuer: number,

        public readonly tiltX: number,

        public readonly tiltY: number,
    ) { }

}

export enum BrushType {

    pen = 1,

    selector = 2,
}

/**
 * 根据移动，与context, 控制画出的形状并填充.
 */
export class Brush {

    type: BrushType = BrushType.pen

    name = 'default'

    onStart(brushStatus: BrushStatus, contx: PCanvasContext) {

    }

    onDraw(brushStatus: BrushStatus[], contx: PCanvasContext) {

    }

    onEnd(brushStatus: BrushStatus, contx: PCanvasContext) {

    }

}
