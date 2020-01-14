import React from 'react'
import style from '../index.less'
import { PainterTooolProps } from '../../toolbar'
import { ToolTypes } from '../../pannel/Painter/interface'
import pencil from '../../Pannel/Pens/pencil'

export default ({onSelectTool, onActiveTool, curState}: PainterTooolProps)=> {

    const handleClick = () => {
        onActiveTool(ToolTypes.PENCIL)
        onSelectTool(ToolTypes.PENCIL, pencil)
    }

    return <span 
        className={`${style.tooBarItem} ${ curState===ToolTypes.PENCIL? style.tooBarActiveItem : ''}` }
        onClick={handleClick} 
    >
        pencil
    </span>
}