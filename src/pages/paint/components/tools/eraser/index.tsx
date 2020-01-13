import { PainterTooolProps } from "../../pannel/interface";
import React from 'react'
import { ToolTypes } from "../../pannel/consts";
import eraser from './eraser'
import style from '../index.less'

export default ({onSelectTool, onActiveTool, curState}: PainterTooolProps)=> {

    const handleClick = () => {
        onActiveTool(ToolTypes.ERASER)
        onSelectTool(ToolTypes.ERASER, eraser)
    }
    
    return <span
        className={
            `${style.tooBarItem }
            ${curState === ToolTypes.ERASER ? style.tooBarActiveItem : ''}` 
        }
        onClick={handleClick} 
    >
        eraser
    </span>
}