import { PainterDrawer, PainterPen, Vector2, PaintPointInfo } from '../../pannel/painter/interface'

import AbstractPainterPen from './pen.abstract'

export default class Eraser extends AbstractPainterPen {

	init(ctx: CanvasRenderingContext2D) {
		ctx.lineCap = 'round'
	}

	onStart({x,y,pressure}:PaintPointInfo){

	}


	draw: PainterDrawer = (context, { x, y }, { lastPoint, lineWidthState }) => {
		if (lastPoint) {
			context.beginPath()
			context.moveTo(lastPoint.x, lastPoint.y)
			context.strokeStyle = 'rgb(255,255,255)'
			context.lineWidth = lineWidthState
			context.lineTo(x, y)
			context.stroke()
			context.closePath()
		}
	}
}
