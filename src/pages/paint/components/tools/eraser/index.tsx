import React, { useContext, Fragment, useState, useEffect } from 'react'
import style from '../index.less'
import { ToolTypes } from '../../pannel/painter/interface'
import { PainterTooolProps } from '../../toolbar'
import EraserPen from '../../pannel/pens/pen.eraser'
import { PaintContext } from '../../..'
import LineWidth from '../line-width'

const Eraser = ({ onActiveTool, curState}: PainterTooolProps) => {

	const { painter } = useContext(PaintContext)
	const [ widthVisible, setWidthVisilbe]  = useState(false)
	const [ lineWidth, setLineWidth ] = useState(10)

	const handleClick = () => {
		onActiveTool(ToolTypes.ERASER)
		if(painter){
			const eraser = new EraserPen()
			eraser.init(painter)
			painter.setPaintDrawer(ToolTypes.ERASER, eraser)
		}
		if(curState === ToolTypes.ERASER){
			setWidthVisilbe(widthVisible => !widthVisible)
		}
	}

	useEffect(() => {
		if(curState !== ToolTypes.ERASER){
			setWidthVisilbe(false)
		}else{
			if(painter){
				painter.setPaintDrawer(ToolTypes.WIDTH, lineWidth)
			}
		}
	}, [curState])
    
	return <Fragment>
		<span 
			className={`${style.tooBarItem} ${ curState===ToolTypes.ERASER? style.tooBarActiveItem : ''}` }
			onClick={handleClick} 
		>
        eraser
		</span>
		<LineWidth visibole={widthVisible} value={lineWidth} onChange={setLineWidth} />
	</Fragment>
}

export default Eraser