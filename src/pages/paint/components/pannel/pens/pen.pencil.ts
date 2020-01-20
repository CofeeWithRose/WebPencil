import { PainterDrawer, PainterPen, Vector2 } from '../../pannel/painter/interface'
export type End = { point1: Vector2, point2: Vector2 }
export  default class Pencil implements PainterPen{

	init(ctx: CanvasRenderingContext2D){
		// ctx.lineCap='round'
	}

	onStart({x,y,pressure}:{pressure: number}&Vector2){
		this.lastEnd = null
	}

	onEnd(){
	}

	lastEnd:End | null

	draw:PainterDrawer= ( context ,{x, y, pressure}, {lastPoint, lineWidthState, color} ) => {
		context.fillStyle = color

		if(lastPoint){
			// console.log('pressure: ', pressure, `${x}, ${y}`)
			// const nextHalfWidth =  lineWidthState *  0.5
			const nextHalfWidth =  lineWidthState * pressure * 0.5
			const toPoint = new Vector2(x,y)
			const toPointVec: Vector2 = Vector2.reduce(toPoint, lastPoint ) 
			if(Vector2.equal(toPoint, lastPoint)){
				return
			}
			const verticalVec = Vector2.scale ( Vector2.vertical(toPointVec), nextHalfWidth)
			let nexEnd: End
			if(!this.lastEnd){
				this.lastEnd = {
					point1: Vector2.add(lastPoint,verticalVec),
					point2: Vector2.reduce(lastPoint, verticalVec)
				}
				nexEnd = {
					point1: Vector2.add(toPoint,verticalVec),
					point2: Vector2.reduce(toPoint, verticalVec)
				}
			
			}else{
				 nexEnd = {
					point1: Vector2.add(toPoint,verticalVec),
					point2: Vector2.reduce(toPoint, verticalVec)
				}
				
			}
			context.beginPath()
			context.moveTo(this.lastEnd.point1.x, this.lastEnd.point1.y)
			context.lineTo(nexEnd.point1.x, nexEnd.point1.y)
			context.lineTo(nexEnd.point2.x, nexEnd.point2.y)
			context.lineTo(this.lastEnd.point2.x, this.lastEnd.point2.y)
			context.closePath()
			context.fill()
			context.arc(toPoint.x, toPoint.y, nextHalfWidth,0,Math.PI * 2)
			context.fill()
			this.lastEnd = nexEnd

		}
	}
}