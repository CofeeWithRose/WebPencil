import { PainterDrawer, Vector2 } from '../../pannel/painter/interface'
import AbstractPainterPen from './pen.abstract'
import { Painter } from '../painter'
export type End = { point1: Vector2, point2: Vector2 }
export  default class Pencil extends AbstractPainterPen{
	init(painter:Painter){
		// painter.context.lineJoin = 'round'
		// console.log(painter.context)
		setTimeout(() => painter.context.lineJoin = 'round')
	}

	draw:PainterDrawer= ( context ,{x, y, pressure}, {lastPoint, lineWidthState, color} ) => {
		

		if(lastPoint){
			context.fillStyle = color
			context.lineWidth = lineWidthState * pressure
			context.beginPath()
			context.moveTo(lastPoint.x, lastPoint.y)
			context.lineTo(x,y)
			context.stroke()
		}
	}
}