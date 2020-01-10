import { PainterTooolProps } from "../../pannel/interface";
import React, { useState } from 'react'
import style from './index.less'
import { Modal, Drawer } from 'antd'

export default ({onSelectTool, onActiveTool, curState}: PainterTooolProps)=> {
    const [color, setColor] = useState('#000000')
    const [showColorPanel, setShowColorPannel] = useState(false)
    // const handleClick = () => {
    //     onActiveTool(ToolTypes.ERASER)
    //     onSelectTool(ToolTypes.ERASER, eraser)
    // }
    
    return <div 
        style={{backgroundColor: color}}
        className={style.colorBar}
        onClick={() => setShowColorPannel(show => !show)} 
    >
        <Drawer
            visible={showColorPanel}
        >

        </Drawer>
    </div>
}