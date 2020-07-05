import { PCanvasContext } from '../../pcanvas/pcanvas.context'
import { Vector2 } from '../../../../util/data/Vector2'
import { BrushType, BrushStatus, AbstractBrush } from './types'
import VConsole from 'vconsole'

class BrushPathPoint { 
	constructor(
    public readonly center: Vector2,
		public readonly right: Vector2,
    public readonly left: Vector2,

		// public readonly normalizedDirection: Vector2,
		// /**
		//  * 与上个方向的夹角是否为锐角.
		//  */
		// public readonly isSharp: boolean
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
    		let right = Vector2.add( curStatus,  rightDirection)
    		let left  = Vector2.subtract( curStatus, rightDirection )
        
    		if(!this.lastBrushPathPoint){
    			// 第一个点.
    			// const isSharp = false
    			this.lastBrushPathPoint = new BrushPathPoint( 
    				this.lastBrushStatus,
    				Vector2.add(this.lastBrushStatus, rightDirection),
    				Vector2.subtract( this.lastBrushStatus, rightDirection),
    			)
    			this.brushPointList.push(this.lastBrushPathPoint)
    			// 第二个点.
    			this.lastBrushPathPoint = new BrushPathPoint( curStatus,right,left)
    			this.lastBrushStatus = curStatus
    			this.brushPointList.push(this.lastBrushPathPoint)
    			break
    		}
    		// const multipy: number = Vector2.multipy(normalizedDirection, this.lastBrushPathPoint.normalizedDirection) as number 
    		// const isSharp = (1- multipy) < 1 * 10 ** -15   && multipy > 0
    		const isRightIn = this.isPointInPath(left)
    		const isLeftIn = this.isPointInPath(right)
    		if(isRightIn && isLeftIn){
    			break
    		}else if(isRightIn){
    			right = this.getCorssPoint(right, left)
    		}else if(isLeftIn) {
    			left = this.getCorssPoint(right, left)
    		}
    		this.lastBrushPathPoint =new BrushPathPoint( curStatus, right, left )
    		this.lastBrushStatus = curStatus
    		this.brushPointList.push(this.lastBrushPathPoint)
    	}
    	this.fillPath(ctx)
    }

    protected isPointInPath = (v: Vector2) => {
    	let count = 0
    	const {right: startRight, left: startLeft} = this.brushPointList[0]
    	if(this.isPointDownLineCrossLine(v, {p1:startRight, p2: startLeft })){
    		count++
    	}
    	const {right: endRight, left: endLeft} = this.brushPointList[this.brushPointList.length-1]
    	if(this.isPointDownLineCrossLine(v, {p1: endRight, p2: endLeft })){
    		count++
    	}
    	for(let i =0; i< this.brushPointList.length -1; i++){
    		const {right, left} = this.brushPointList[i]
    		const {right:nextRight, left: nextLeft} = this.brushPointList[i+1]
    		if(this.isPointDownLineCrossLine(v, {p1:right, p2: nextRight })){
    			count++
    		}
    		if(this.isPointDownLineCrossLine(v, {p1:left, p2: nextLeft })){
    			count++
    		}
    	}
    	// console.log(count)
    	return count %2 === 1
    }

    /**
     * 判断点向下发射的射线是否与线段相交.
     * @param p 
     * @param line 
     */
    protected isPointDownLineCrossLine = (p: Vector2, {p1,p2}:{p1:Vector2, p2: Vector2}) => {
    	if(p.x> p1.x && p.x > p2.x){
    		return false
    	}
    	if(p.x < p1.x && p.x < p2.x){
    		return false
    	}
    	if(p.y > p1.y && p.y > p2.y){
    		return false
    	}
    	const crosY = this.getY(p.x, {p1,p2})
    	if(crosY > p.y){
    		return true
    	}
    	return false
    }

    /**
     * @param x 
     * @param param1 
     */
    protected getY = (x: number, {p1,p2}:{p1:Vector2, p2: Vector2}) => {
    	const dy = p2.y - p1.y
    	const dx = p2.x - p1.x
    	const k = dy/dx
    	const b = p1.y -  k * p1.x 
    	return k * x+b
    }
    
    protected getCorssPoint = (left: Vector2, right: Vector2) => {
    	const {k,b} = this.getKb(left, right)
    	for( let i =0; i< this.brushPointList.length -1; i++){
    		const {k: k1, b: b1} = this.getKb(this.brushPointList[i].left, this.brushPointList[i+1].left )
    	}
    	this.brushPointList
    	//   y=kx+b
    	//   y=k2x+b2
    	//   0=(k2-k)x +b2-b
    	//  x0=b-b2/k2-k
    	//  x0=b-b2/()

    	return Vector2.ZERO
    }
    
    protected getKb = (v1: Vector2, v2:Vector2) => {
    	const k = (v1.y-v2.y)/v1.x-v2.x
    	const b = v1.y - k * v1.x
    	return { k, b }
    }

    protected fillPath(ctx: CanvasRenderingContext2D){
    	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
    	ctx.beginPath()
    	this.brushPointList.forEach(({  right, left }, ind) => {
    		if(ind ===0){
    			ctx.moveTo(left .x, left.y)
    		}else{
    			const p = right
    			// const p = isSharp? right:  left
    			ctx.lineTo(p.x, p.y)
    		}
    	})
    	for( let i = this.brushPointList.length -1; i >=0; i--){
    		const { left, right} = this.brushPointList[i]
    		// const p =  isSharp? left : right
    	  const	p = left
    		ctx.lineTo(p.x, p.y)
    	}
    	ctx.closePath()
    	ctx.stroke()
    }

    onEnd(brushStatus: BrushStatus, {onBrushEnd}: PCanvasContext) {
    	this.isPainting = false
    	this.lastBrushStatus = null
    	this.brushPointList = []
    	onBrushEnd()
    }

}
