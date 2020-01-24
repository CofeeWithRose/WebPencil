import { PainterDrawer, PainterPen, Vector2, PaintPointInfo, ToolTypes } from '../../pannel/painter/interface'

import AbstractPainterPen from './pen.abstract'
import { RGBA } from '../rgba'
import { Painter } from '../painter'

export default class SelectorAGB extends AbstractPainterPen {


    onEnd = ({x,y}: PaintPointInfo) => {
    	const rgba =this.painter.getPointColor({x,y})
    	this.painter.setPaintDrawer(ToolTypes.COLOR, rgba)
    	return false
    }
}
