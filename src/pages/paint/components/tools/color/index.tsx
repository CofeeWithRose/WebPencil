import { PainterTooolProps } from "../../pannel/interface";
import React, { useState, Fragment } from 'react'
import style from './index.less'
import { Modal, Drawer } from 'antd'
import ColorPannel from "./ColorPannel";

export default ({onSelectTool, onActiveTool, curState}: PainterTooolProps)=> {
    const [color, setColor] = useState('#000000')
    const [showColorPanel, setShowColorPannel] = useState(false)
    const handleShow = () => setShowColorPannel(show => !show)
    // const handleClick = () => {
    //     onActiveTool(ToolTypes.ERASER)
    //     onSelectTool(ToolTypes.ERASER, eraser)
    // }
    
    return <Fragment>
        <div 
            style={{backgroundColor: color}}
            className={style.colorBar}
            onClick={handleShow} 
        >
        
        </div>
         <Drawer
            visible={showColorPanel}
            onClose={handleShow}
        >
            <ColorPannel onSelectTool={onSelectTool}/>
        </Drawer>
    </Fragment>
    
}