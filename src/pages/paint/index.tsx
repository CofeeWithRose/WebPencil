import React, { useEffect, Fragment } from 'react'
import { usePainter } from './components/painter/index'
import style from './index.less'
import ToolBar from './components/toolbar/index'
export default function Paint(){
  const { container, onSelectTool } = usePainter()
  return <Fragment>
    <ToolBar onSelectTool={onSelectTool}/>
    <div ref={container}  className={style.container}></div>
  </Fragment>
  
}