import style from './index.less'
import React, { useState } from 'react'
import { ToolTypes, toolStatesSetting, ToolValues } from '../pannel/consts'
import { OnSelectTool } from '../pannel/interface'

export interface ToolBarProps {
  onSelectTool: OnSelectTool,
}

export default function ToolBar({ onSelectTool }: ToolBarProps) {

  const [ curState, setCurState ] = useState(ToolTypes.PENCIL)

  return <div className={style.toolBar}>
    {
      Object.keys(toolStatesSetting).map(
        k => {
          const Tool = toolStatesSetting[k]
          return <Tool
            key={k}
            curState={curState}
            onActiveTool={setCurState}
            onSelectTool={onSelectTool}
          />
        }
      )
    }
    
  </div>
}