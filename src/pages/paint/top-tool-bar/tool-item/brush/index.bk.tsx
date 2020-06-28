import { PCanvasContext } from '../../../pcanvas/pcanvas.context'
import { Vector2 } from '../../../../../util/data/Vector2'
import { BrushType, BrushStatus, AbstractBrush } from './types'

/**
 * 带压感的brush，bug待修复.
 * 根据移动，与context, 控制画出的形状并填充.
 */
export class Brush  implements AbstractBrush {

    type: BrushType = BrushType.pen

    name = 'default'

    isPainting = false

    lastBrush: BrushStatus;

    lastNormalizedDirection: Vector2;
    // protected lastVerPath: [ Vector2, Vector2]|null;

    protected pathList: [ Vector2[], Vector2[] ] = [[], []]

    init(){

    }

    destory(){

    }

    onStart(status: BrushStatus, context: PCanvasContext) {
    	const {curCanvasContext2D: ctx, color} = context
    	this. lastBrush = status
    	this.isPainting = true
    	ctx.fillStyle = color
    }

    protected getVerticalPath = (point:Vector2, verticalVect:Vector2): [Vector2, Vector2] => {
    	const p1 =  Vector2.add(point, verticalVect)
    	const p2 = Vector2.subtract(point, verticalVect)
    	return [p1,p2] 
    }

    onDraw(brushStatus: BrushStatus[], contx: PCanvasContext): void {
    	if(this.isPainting){
    		const  { curCanvasContext2D: ctx, brushWidth } = contx
    		brushStatus.forEach( p => {
    			const {x,y, pressure} = p
    			let halfWidth: number
    			const direction =  new Vector2( x- this.lastBrush.x, y - this.lastBrush.y )
    			const norDirection = Vector2.normalize(direction)
    			const verticalDirection = Vector2.vertical(norDirection)
    			halfWidth = pressure * brushWidth * 0.5
    			const verticalVector = Vector2.multipy(verticalDirection, halfWidth)
    			const [p1,p2] = this.getVerticalPath(p, verticalVector)

    			if(this.lastNormalizedDirection && Vector2.degree(Vector2.ZERO, this.lastNormalizedDirection, norDirection) > 180){
    				this.pathList[1].push(p1)
    				this.pathList[0].push(p2) 
    			}else{
    				this.pathList[0].push(p1)
    				this.pathList[1].push(p2)
    			}
    			this.lastBrush = p
    			this.lastNormalizedDirection = norDirection
    			// this.lastVerPath = [ p3, p4]
               
    		})
    		this.fillPathList(ctx)
    	}
    }

    fillPathList(ctx: CanvasRenderingContext2D){
    	const left = this.pathList[0]
    	const right = this.pathList[1]
    	const path = left.concat([...right].reverse())
    	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
    	ctx.beginPath()
    	const lastInd = path.length-1
    	ctx.moveTo(path[lastInd] .x, path[lastInd].y)
    	path.forEach(({x, y}) => {
    		ctx.lineTo(x,y)
    	})
    	ctx.closePath()
    	ctx.fill()
    }

    onEnd(brushStatus: BrushStatus, contx: PCanvasContext) {
    	this.isPainting = false
    	this.pathList = [[],[]]
    }

}
