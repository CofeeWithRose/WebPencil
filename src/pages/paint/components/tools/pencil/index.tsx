import { PainterTooolProps } from "../../pannel/interface";
import React from 'react'
import { ToolTypes } from "../../pannel/consts";
import pencil from './pencil'
import style from '../index.less'

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