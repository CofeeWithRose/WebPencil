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
			// const pressure = this.lastPressure + (curStatus.pressure- this.lastPressure) * 0.05
    		const halfWidth = brushWidth * 0.5 * curStatus.pressure
    		const direction = new Vector2( 
    			curStatus.x - this.lastBrushStatus.x,
    			curStatus.y - this.lastBrushStatus.y
    		)
			if(Vector2.magnitude(direction) <halfWidth ) continue
			// this.lastPressure = pressure
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
    	ctx.fill()
	}
   

	onEnd(brushStatus: BrushStatus, {onBrushEnd}: PCanvasContext) {
    	this.isPainting = false
    	this.lastBrushStatus = null
    	this.pathInfo = { left:[], right:[] }
    	onBrushEnd()
	}

}

//  /**
// 	 * 判断点是否在当前路径下.
// 	 * @param v 
// 	 */
//     protected isPointInPath = (v: Vector2) => {
//     	const { angles } = this.pathInfo
//     	for(let i = 0; i< angles.length; i++){
//     		const angle = angles[i]
//     		let count = 0
//     		if(this.isPointDownLineCrossLine(v, {p1: angle[0], p2: angle[1] })) count++
//     		if(this.isPointDownLineCrossLine(v, {p1: angle[0], p2: angle[2] })) count++
//     		if(this.isPointDownLineCrossLine(v, {p1: angle[1], p2: angle[2] })) count++
//     		if(count %2 ===1 ){
//     			return true
//     		}
//     	}
//     	return false
//     }

//     /**
//      * 判断点向下发射的射线是否与线段相交.
//      * @param p 
//      * @param line 
//      */
//     protected isPointDownLineCrossLine = (p: Vector2, {p1,p2}:{p1:Vector2, p2: Vector2}) => {
//     	if(p.x> p1.x && p.x > p2.x){
//     		return false
//     	}
//     	if(p.x < p1.x && p.x < p2.x){
//     		return false
//     	}
//     	if(p.y > p1.y && p.y > p2.y){
//     		return false
//     	}
//     	const crosY = this.getY(p.x, {p1,p2})
//     	if(crosY >= p.y){
//     		return true
//     	}
//     	return false
//     }

//     /**
//      * @param x 
//      * @param param1 
//      */
//     protected getY = (x: number, {p1,p2}:{p1:Vector2, p2: Vector2}) => {
//     	const dy = p2.y - p1.y
//     	const dx = p2.x - p1.x
//     	const k = dy/dx
//     	const b = p1.y -  k * p1.x 
//     	return k * x+b
//     }
    
//     protected getCorssPoint = (p1: Vector2, p2: Vector2) => {
//     	const {k,b} = this.getKb(p1, p2)
//     	let maxX: number = p1.x > p2.x?  p1.x: p2.x
//     	let minX: number = p1.x <= p2.x?   p1.x: p2.x
//     	const line = { maxX, minX, k, b, p1, p2 }
//     	const { angles } = this.pathInfo
//     	for(let i = 0; i< angles.length; i++){
//     		const angle = angles[i]
//     		let c: Vector2|null
//     		c =  this.getCross(line, { p1: angle[0], p2: angle[1]})
//     		if(c) return c
//     		c =  this.getCross(line, { p1: angle[0], p2: angle[2]})
//     		if(c) return c
//     		c =  this.getCross(line, { p1: angle[2], p2: angle[1]})
//     		if(c) return c
//     	}
//     	return p1
//     }
// 
// protected getCross = (line1: {maxX: number, minX: number, k: number, b: number, p1:Vector2, p2:Vector2}, line2:{p1:Vector2, p2:Vector2}) => {
// 	const {k: k1, b: b1} = this.getKb(line2.p1, line2.p2 )
// 	const isLine1Vertical = line1.k === Infinity || line1.k === -Infinity
// 	const isLine2Vertical = k1 === Infinity || k1 === -Infinity
// 	const max2 = line2.p1.x > line2.p2.x? line2.p1.x: line2.p2.x
// 	const min2 = line2.p1.x <= line2.p2.x? line2.p1.x: line2.p2.x
// 	const max = Math.min(max2, line1.maxX)
// 	const min = Math.max(min2, line1.minX )

// 	if(isLine1Vertical){
// 		if(isLine2Vertical){
// 			// if(line1.p1.x === line2.p1.x){
// 			// 	// 竖线重合认为没有交点. 
// 			// }
// 			return null
// 		}
// 		const x = line1.p1.x
// 		if(x >= min && x <= max){
// 			const y = x * k1 + b1
			
// 			return new Vector2( x, y)
// 		}else{
// 			return null
// 		}
			
// 	}
// 	if(isLine2Vertical){
// 		if(isLine1Vertical){
// 			// if(line1.p1.x === line2.p1.x){
// 			// 	// 竖线重合认为没有交点. 
// 			// }
// 			return null
// 		}
// 		const x = line2.p1.x
// 		if(x >= min && x <= max){
// 			const y = x * line1.k + line1.b
// 			return new Vector2( x, y)
// 		}else{
// 			return null
// 		}
			
// 	}
// 	if(k1 === line1.k){
// 		return null
// 	}
// 	const x = (line1.b-b1)/(k1-line1.k)
		
// 	if(x >= min && x <= max ){
// 		const c = new Vector2( x, k1*x + b1 )
// 		if(k1*x + b1 <0) {
// 			console.log(x, k1*x + b1,  line1, line2)
// 			debugger
// 		}
// 		return c
// 	}
// 	return null
// }
 
// protected getKb = (v1: Vector2, v2:Vector2) => {
// 	const k = (v1.y-v2.y)/(v1.x-v2.x)
// 	const b = v1.y - k * v1.x
// 	return { k, b }
// }

   