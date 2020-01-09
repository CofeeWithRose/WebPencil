import style from './index.less'
import React from 'react'
import { ToolState, ToolStatesDesc } from '../painter/consts'

export interface ToolBarProps {
  onSelectTool: (type: ToolState) => void
}

export default function ToolBar({ onSelectTool }: ToolBarProps) {

  return <div className={style.toolBar}>
    {
      Object.keys(ToolStatesDesc).map(
        (k: ToolState) => <span
          key={k}
          className={style.tooBarItem}
          onClick={() => onSelectTool(k)}
        >
          {ToolStatesDesc[k]}
        </span>
      )
    }

  </div>
}