import { PCanvasContext } from '../../pcanvas/pcanvas.context'
import { Vector2 } from '../../../../util/data/Vector2'
import { BrushType, BrushStatus, AbstractBrush } from './types'
import VConsole from 'vconsole'

type PathInfo = {right: Vector2[], left: Vector2[] } 
/**
 * 带压感的brush，bug待修复.
 * 根据移动，与context, 控制画出的形状并填充.
 */
export class Brush  implements AbstractBrush {

    type: BrushType = BrushType.pen

    name = 'new'

	isPainting = false

    protected lastBrushStatus: BrushStatus|null

	protected pathInfo: PathInfo = { right:[], left: [] }
	
	protected lastPressure: number = 0

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
			if(Vector2.magnitude(direction) <halfWidth ) continue
    		const normalizedDirection = Vector2.normalize(direction)
    		const rightDirection = Vector2.multipy(Vector2.vertical(normalizedDirection), halfWidth) as Vector2 
    		let rightPoint:Vector2 = Vector2.add( curStatus,  rightDirection)
    		let leftPoint:Vector2  = Vector2.subtract( curStatus, rightDirection )
    		const { left, right } = this.pathInfo
    		const rightPoint0 = Vector2.add(this.lastBrushStatus, rightDirection)
    		const leftPoint0 = Vector2.subtract( this.lastBrushStatus, rightDirection)
    		right.push(rightPoint0)
    		left.push(leftPoint0)
    		right.push(rightPoint)
    		left.push(leftPoint)
    		this.lastBrushStatus = curStatus
    	}
    	this.fillPath(ctx)
	}
	
	protected fillPath(ctx: CanvasRenderingContext2D){
    	const { right, left } = this.pathInfo
    	if(!right.length || !left.length) return
    	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
    	ctx.beginPath()
    	ctx.moveTo( left[0].x, left[0].y )
    	for(let i = 1; i< left.length; i++){
    		ctx.lineTo(left[i].x, left[i].y)
    	}
    	for(let i = right.length -1; i>= 0; i--){
    		ctx.lineTo(right[i].x, right[i].y)
    	}
    	ctx.closePath()
    	ctx.stroke()
	}
   

	onEnd(brushStatus: BrushStatus, {onBrushEnd}: PCanvasContext) {
    	this.isPainting = false
    	this.lastBrushStatus = null
    	this.pathInfo = { left:[], right:[] }
    	onBrushEnd()
	}

}
  