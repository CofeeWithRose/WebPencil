import { PainterDrawer, PainterPen, Vector2 } from '../../pannel/painter/interface'



export  default class Eraser implements PainterPen{

	init(ctx: CanvasRenderingContext2D){
		ctx.lineCap='round'
	}

	onStart({x,y,pressure}:{pressure: number}&Vector2){

	}

	onEnd(){

	}

 	draw:PainterDrawer = ( context ,{x, y}, {lastPoint, lineWidthState} ) => {
 		if(lastPoint){
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
