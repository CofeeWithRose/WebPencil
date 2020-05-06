import { PCanvasContext } from "../../pcanvas/pcanvas.context";

export class BrushStatus {
    constructor(

        public readonly x: number,

        public readonly y: number,

        public readonly pressure: number,

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

    isPainting = false

    lastPoint: BrushStatus

    onStart(status: BrushStatus, {curCanvasContext2D: ctx, color, brushWidth}: PCanvasContext) {
        this. lastPoint = status
        this.isPainting = true
        ctx.strokeStyle = color
       
    }

    onDraw(brushStatus: BrushStatus[], contx: PCanvasContext) {
        if(this.isPainting){
            const  { curCanvasContext2D: ctx, brushWidth } = contx
            brushStatus.forEach( p => {
                const {x,y, pressure} = p
                ctx.beginPath()
                ctx.moveTo(this.lastPoint.x, this.lastPoint.y)
                ctx.lineTo(x,y)
                ctx.lineWidth = brushWidth * pressure
                // console.log('pressure', pressure, 'lineWidth ',ctx.lineWidth )
                ctx.stroke()
                this.lastPoint = p
            })
            
        }
    }

    onEnd(brushStatus: BrushStatus, contx: PCanvasContext) {
        this.isPainting = false
        // TODO 将内转到目标图层上.
    }

}
