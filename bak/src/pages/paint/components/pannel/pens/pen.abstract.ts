import Pencil from './pen.pencil'
import { PainterPen, PainterDrawer, PaintPointInfo } from '../painter/interface'
import {PannelInfo} from  '../painter/interface'
import { Painter } from '../painter'

export default abstract class AbstractPainterPen implements PainterPen {
    protected painter: Painter

    init(painter:Painter){
    	this.painter = painter
    }

    onStart({x,y,pressure}:PaintPointInfo){}

    onEnd = (p: PaintPointInfo)=> true

    draw: PainterDrawer = () =>  {}
} 