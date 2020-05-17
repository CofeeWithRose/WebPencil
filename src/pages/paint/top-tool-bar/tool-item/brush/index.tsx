import { PCanvasContext } from "../../../pcanvas/pcanvas.context";
import { Vector2 } from "../../../../../util/data/Vector2";

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

    lastBrush: BrushStatus;

    // protected lastVerPath: [ Vector2, Vector2]|null;

    protected pathList: [ Vector2[], Vector2[] ] = [[], []]

    init(){

    }

    destory(){

    }

    onStart(status: BrushStatus, context: PCanvasContext) {
        const {curCanvasContext2D: ctx, color} = context
        this. lastBrush = status
        this.isPainting = true
        ctx.fillStyle = color
    }

    protected getVerticalPath = (point:Vector2, verticalVect:Vector2): [Vector2, Vector2] => {
        const p1 =  Vector2.add(point, verticalVect)
        const p2 = Vector2.subtract(point, verticalVect)
        return [p1,p2] 
    }

    onDraw(brushStatus: BrushStatus[], contx: PCanvasContext): void {
        if(this.isPainting){
            const  { curCanvasContext2D: ctx, brushWidth } = contx
            brushStatus.forEach( p => {
                const {x,y, pressure} = p
                let halfWidth: number;
                const direction =  new Vector2( x- this.lastBrush.x, y - this.lastBrush.y )
                const norDirection = Vector2.normalize(direction)
                const verticalDirection = Vector2.vertical(norDirection)
                // let p1:Vector2;
                // let p2: Vector2;
                // if(!this.lastVerPath){
                //     halfWidth = this.lastBrush.pressure * brushWidth * 0.5
                //     const verticalVector = Vector2.multipy(verticalDirection, halfWidth )
                //     const [point2, point1] = this.getVerticalPath(this.lastBrush, verticalVector)
                //     p1 = point2
                //     p2 = point1
                // }else{
                //     p1 = this.lastVerPath[0]
                //     p2 = this.lastVerPath[1]
                // }
                halfWidth = pressure * brushWidth * 0.5
                const verticalVector = Vector2.multipy(verticalDirection, halfWidth)
                const [p1,p2] = this.getVerticalPath(p, verticalVector)
                this.pathList[0].push(p1)
                this.pathList[1].push(p2)
                // ctx.moveTo(p1.x, p1.y)
                // ctx.lineTo(p2.x, p2.y)
                // ctx.lineTo(p3.x, p3.y)
                // ctx.lineTo(p4.x, p4.y)
                // ctx.lineTo(p1.x, p1.y)
                this.lastBrush = p
                // this.lastVerPath = [ p3, p4]
               
            })
            // ctx.closePath()
            // ctx.fill()
            // ctx.stroke()
            this.fillPathList(ctx);
        }
    }

    fillPathList(ctx: CanvasRenderingContext2D){
        const left = this.pathList[0]
        const right = this.pathList[1]
        const path = left.concat([...right].reverse())
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
        ctx.beginPath()
        const lastInd = path.length-1
        ctx.moveTo(path[lastInd] .x, path[lastInd].y)
        path.forEach(({x, y}) => {
            ctx.lineTo(x,y)
        })
        ctx.closePath()
        ctx.stroke()
        
        // this.pathList = [[left[left.length-1]], [right[right.length-1]]]
    }

    onEnd(brushStatus: BrushStatus, contx: PCanvasContext) {
        this.isPainting = false
        // this.lastVerPath = null
        // TODO 将内转到目标图层上.
        this.pathList = [[],[]]
    }

}
