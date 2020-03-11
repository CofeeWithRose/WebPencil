import { PainterDrawer, Vector2 } from '../../pannel/painter/interface'
import AbstractPainterPen from './pen.abstract'
export type End = { point1: Vector2, point2: Vector2 }
export  default class Pencil extends AbstractPainterPen{


	onStart({x,y,pressure}:{pressure: number}&Vector2){
		this.lastEnd = null
	}

	lastEnd:End | null

	draw:PainterDrawer= ( context ,{x, y, pressure}, {lastPoint, minWidth, maxWidth, color} ) => {

		if(lastPoint){
			const prePoint = new Vector2(lastPoint.x, lastPoint.y)
			context.fillStyle = color
			context.strokeStyle = color
			const nextHalfWidth =  (minWidth +  (maxWidth - minWidth) * pressure) * 0.5
			const toPoint = new Vector2(x,y)
			const toPointVec: Vector2 = Vector2.reduce(toPoint, prePoint ) 
			if(Vector2.equal(toPoint, prePoint)){
				return
			}
			const verticalVec = Vector2.scale ( Vector2.vertical(toPointVec), nextHalfWidth)
			let nexEnd: End
			if(!this.lastEnd){
				this.lastEnd = {
					point1: Vector2.add(prePoint,verticalVec),
					point2: Vector2.reduce(prePoint, verticalVec)
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
			context.stroke()
			context.beginPath()
			context.arc(toPoint.x, toPoint.y, nextHalfWidth,0,Math.PI * 2)
			context.closePath()
			context.fill()
			this.lastEnd = nexEnd

		}
	}
}