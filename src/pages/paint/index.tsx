import React, { useEffect, Fragment } from 'react'
import { usePainter } from './components/pannel/index'
import style from './style.less'
import ToolBar from './components/toolbar/index'
export default function Paint(){
	const { container, onSelectTool } = usePainter()
	return <Fragment>
		<ToolBar onSelectTool={onSelectTool}/>
		<div ref={container}  className={style.container}></div>
	</Fragment>
  
}