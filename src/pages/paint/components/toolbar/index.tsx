import style from './index.less'
import React, { useState } from 'react'
import { ToolState, ToolStatesDesc } from '../painter/consts'

export interface ToolBarProps {
  onSelectTool: (type: ToolState) => void
}


export default function ToolBar({ onSelectTool }: ToolBarProps) {

  const [ curState, setCurState ] = useState(ToolState.PENCIL)

  const handleClick = (state: ToolState ) => {
    onSelectTool(state)
    setCurState(state)
  }

  return <div className={style.toolBar}>
    {
      Object.keys(ToolStatesDesc).map(
        (k: ToolState) => <span
          key={k}
          className={`${style.tooBarItem} ${ curState===k? style.tooBarActiveItem : ''}` }
          onClick={() => handleClick(k)}
        >
          {ToolStatesDesc[k]}
        </span>
      )
    }

  </div>
}