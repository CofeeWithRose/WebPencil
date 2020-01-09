import style from './index.less'
import React, { useState } from 'react'
import { ToolState, toolStatesSetting, ToolValues } from '../painter/consts'
import { OnSelectTool } from '../painter/interface'
// import {  } from 'antd'

export interface ToolBarProps {
  onSelectTool: OnSelectTool
}

export default function ToolBar({ onSelectTool }: ToolBarProps) {

  const [ curState, setCurState ] = useState(ToolState.PENCIL)

  const [ curModalContent, setModulContent ] = useState();

  const handleClick  = (k: ToolState ) => {
    toolStatesSetting[k].onSelectTool(curState,onSelectTool)
    setCurState(k)
  }

  return <div className={style.toolBar}>
    {
      Object.keys(toolStatesSetting).map(
        (k: ToolState) => <span
          key={k}
          className={`${style.tooBarItem} ${ curState===k? style.tooBarActiveItem : ''}` }
          onClick={() =>handleClick(k) }
        >
          {toolStatesSetting[k].desc}
        </span>
      )
    }
  </div>
}