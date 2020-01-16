import { PainterDrawer, PainterPen } from '../../pannel/painter/interface'

export  default class Pencil implements PainterPen{

	init(ctx: CanvasRenderingContext2D){
		ctx.lineCap='round'
	}

	draw:PainterDrawer= ( context ,{x, y, pressure}, {lastPoint, lineWidthState, color} ) => {
		if(lastPoint){
			context.strokeStyle = color
			context.beginPath()
			context.moveTo(lastPoint.x, lastPoint.y)
			context.lineWidth = pressure * lineWidthState
			context.lineTo(x, y)
			context.stroke()
			context.closePath()
		}
	}
}