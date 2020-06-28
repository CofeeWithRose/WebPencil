import { PCanvasContext } from '../../../pcanvas/pcanvas.context'
import { Vector2 } from '../../../../../util/data/Vector2'
import { BrushType, BrushStatus, AbstractBrush } from './types'

/**
 * 带压感的brush，bug待修复.
 * 根据移动，与context, 控制画出的形状并填充.
 */
export class Brush  implements AbstractBrush {


    readonly type: BrushType = BrushType.pen

    readonly name = 'default'

    protected isPainting = false

    protected pathList: Vector2[] = []

    protected animeHandle: number

    init(){}

    destory(){}

    onStart(status: BrushStatus, context: PCanvasContext) {
    	requestAnimationFrame(() => {
    		const {curCanvasContext2D: ctx, color, brushWidth} = context
    		this.isPainting = true
    		this.pathList.push(status)
    		ctx.strokeStyle = color
    		ctx.lineWidth = brushWidth
    		ctx.lineCap ='round'
    		ctx.lineJoin = 'round'
    	})
    }

  

    onDraw(brushStatus: BrushStatus[], contx: PCanvasContext): void {
    	if(this.isPainting){
    		const  { curCanvasContext2D: ctx } = contx
    		for (let i = 0; i< brushStatus.length; i++){
    			this.pathList.push( brushStatus[i])
    		}
    		cancelAnimationFrame(this.animeHandle)

    		this.animeHandle = requestAnimationFrame(() => {
    			this.paintPath(ctx)
    		})
    	}
    }

    protected paintPath = (ctx: CanvasRenderingContext2D) => {
    	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
    	ctx.beginPath()
    	const f = this.pathList[0]
    	ctx.moveTo(f.x, f.y )
    	for( let i =1; i< this.pathList.length; i++ ){
    		const {x, y} = this.pathList[i]
    		ctx.lineTo(x,y)
    	}
    	ctx.stroke()
    }

    onEnd(brushStatus: BrushStatus, {onBrushEnd}: PCanvasContext) {
    	requestAnimationFrame(() => {
    		this.isPainting = false
    		this.pathList = []
    		onBrushEnd()
    	})
    }

}
