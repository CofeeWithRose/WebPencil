import Pencil from './pen.pencil'
import { PainterPen, PainterDrawer, PaintPointInfo } from '../painter/interface'
import {PannelInfo} from  '../painter/interface'

export default abstract class AbstractPainterPen implements PainterPen {
	init(ctx: CanvasRenderingContext2D, pannelInfo: PannelInfo){

	}

	onStart({x,y,pressure}:PaintPointInfo){}

    onEnd = ()=> true

    draw: PainterDrawer = () =>  {}
} 