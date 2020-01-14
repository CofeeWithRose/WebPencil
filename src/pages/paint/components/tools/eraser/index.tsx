import React from 'react'
import style from '../index.less'
import { ToolTypes } from '../../pannel/painter/interface'
import { PainterTooolProps } from '../../toolbar'
import eraser from '../../pannel/pens/pen.eraser'

const Eraser = ({onSelectTool, onActiveTool, curState}: PainterTooolProps) => {

	const handleClick = () => {
		onActiveTool(ToolTypes.ERASER)
		onSelectTool(ToolTypes.ERASER, eraser)
	}
    
	return <span 
		className={`${style.tooBarItem} ${ curState===ToolTypes.ERASER? style.tooBarActiveItem : ''}` }
		onClick={handleClick} 
	>
        eraser
	</span>
}

export default Eraser