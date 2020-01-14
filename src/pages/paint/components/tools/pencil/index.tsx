import React from 'react'
import style from '../index.less'
import { PainterTooolProps } from '../../toolbar'
import { ToolTypes } from '../../pannel/painter/interface'
import pencilPen from '../../pannel/pens/pen.pencil'

const Pencil  = ({onSelectTool, onActiveTool, curState}: PainterTooolProps)=> {

	const handleClick = () => {
		onActiveTool(ToolTypes.PENCIL)
		onSelectTool(ToolTypes.PENCIL, pencilPen)
	}

	return <span 
		className={`${style.tooBarItem} ${ curState===ToolTypes.PENCIL? style.tooBarActiveItem : ''}` }
		onClick={handleClick} 
	>
        pencil
	</span>
}
export default Pencil