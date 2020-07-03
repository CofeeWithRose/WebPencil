import { PCanvasContext } from '../../pcanvas/pcanvas.context'
import { Vector2 } from '../../../../util/data/Vector2'
import { BrushType, BrushStatus, AbstractBrush } from './types'
import VConsole from 'vconsole'

class BrushPathPoint { 
	constructor(
    public readonly center: Vector2,
		public readonly right: Vector2,
    public readonly left: Vector2,

    public readonly normalizedDirection: Vector2,
    /**
     * 与上个方向的夹角是否为锐角.
     */
		public readonly isSharp: boolean
	){}
}
/**
 * 带压感的brush，bug待修复.
 * 根据移动，与context, 控制画出的形状并填充.
 */
export class Brush  implements AbstractBrush {

    type: BrushType = BrushType.pen

    name = 'new'

    isPainting = false

    protected lastBrushStatus: BrushStatus|null

    protected lastBrushPathPoint: BrushPathPoint

    protected brushPointList: BrushPathPoint[] = []

    init(){

    }

    destory(){

    }

    onStart(status: BrushStatus, context: PCanvasContext) {
    	const {curCanvasContext2D: ctx, color} = context
    	this. lastBrushStatus = status
    	this.isPainting = true
    	ctx.fillStyle = color
    }

    protected getVerticalPath = (point:Vector2, verticalVect:Vector2): [Vector2, Vector2] => {
    	const p1 =  Vector2.add(point, verticalVect)
    	const p2 = Vector2.subtract(point, verticalVect)
    	return [p1,p2] 
    }

    onDraw(brushStatus: BrushStatus[], context: PCanvasContext): void {
    	if(!this.isPainting) return
    	if(!this.lastBrushStatus) return
    	const  { curCanvasContext2D: ctx, brushWidth } = context
    	for( let i =0; i< brushStatus.length; i++ ){
    		const curStatus = brushStatus[i]
    		const halfWidth = brushWidth * 0.5 * curStatus.pressure
    		const direction = new Vector2( 
    			curStatus.x - this.lastBrushStatus.x,
    			curStatus.y - this.lastBrushStatus.y
    		)
    		const normalizedDirection = Vector2.normalize(direction)
    		const rightDirection = Vector2.multipy(Vector2.vertical(normalizedDirection), halfWidth) as Vector2 
    		const right = Vector2.add( curStatus,  rightDirection)
    		const left  = Vector2.subtract( curStatus, rightDirection )
        
    		if(!this.lastBrushPathPoint){
    			// 第一个点.
    			const isSharp = false
    			this.lastBrushPathPoint = new BrushPathPoint( 
    				this.lastBrushStatus,
    				Vector2.add(this.lastBrushStatus, rightDirection),
    				Vector2.subtract( this.lastBrushStatus, rightDirection),
    				normalizedDirection, 
    				isSharp
    			)
    			this.brushPointList.push(this.lastBrushPathPoint)
    			// 第二个点.
    			this.lastBrushPathPoint = new BrushPathPoint( curStatus,right,left,normalizedDirection, isSharp)
    			this.lastBrushStatus = curStatus
    			this.brushPointList.push(this.lastBrushPathPoint)
    			break
    		}
    		const multipy: number = Vector2.multipy(normalizedDirection, this.lastBrushPathPoint.normalizedDirection) as number 
    		const isSharp = (1- multipy) < 1 * 10 ** -15   && multipy > 0
    		this.lastBrushPathPoint =new BrushPathPoint( curStatus, right, left,  normalizedDirection, isSharp)
    		this.lastBrushStatus = curStatus
    		this.brushPointList.push(this.lastBrushPathPoint)
    	}
    	this.fillPath(ctx)
    }

    fillPath(ctx: CanvasRenderingContext2D){

    	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
    	ctx.beginPath()
    	this.brushPointList.forEach(({  right, left, isSharp }, ind) => {
    		if(ind ===0){
    			ctx.moveTo(left .x, left.y)
    		}else{
    			const p = isSharp? right:  left
    			ctx.lineTo(p.x, p.y)
    		}
    	})
    	for( let i = this.brushPointList.length -1; i >=0; i--){
    		const {isSharp, left, right} = this.brushPointList[i]
    		const p =  isSharp? left : right
    		ctx.lineTo(p.x, p.y)
    	}
      
    	// const left = this.pathList[0]
    	// const right = this.pathList[1]
    	// const path = left.concat([...right].reverse())
    	// const lastInd = path.length-1
    	// path.forEach(({x, y}) => {
    	// 	ctx.lineTo(x,y)
    	// })
    	ctx.closePath()
    	ctx.stroke()
    }

    onEnd(brushStatus: BrushStatus, contx: PCanvasContext) {
    	this.isPainting = false
    	this.lastBrushStatus = null
    	// console.log(JSON.stringify(this.pointList))
    	this.brushPointList = []
    }

}
