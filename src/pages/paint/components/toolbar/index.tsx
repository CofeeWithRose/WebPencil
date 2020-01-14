import style from './index.less'
import React, { useState } from 'react'
import { OnSelectTool, ToolTypes } from '../pannel/Painter/interface'
import Eraser from '../Tools/Eraser'
import Pencil from '../Tools/Pencil'
import SelectColor from '../Tools/SelectColor'
import Color from '../Tools/Color'

export interface ToolBarProps {
  onSelectTool: OnSelectTool,
}

export type OnActiveTool = (type: ToolTypes) => void

export type PainterTooolProps = {
  onSelectTool: OnSelectTool,
  onActiveTool: OnActiveTool,
  curState: ToolTypes,
}

export type PainterToool = React.FC<PainterTooolProps>

export interface ToolStatesSetting {
  [index: string]: PainterToool
}

export const toolStatesSetting: ToolStatesSetting = {
  
  [ToolTypes.ERASER]: Eraser,
  [ToolTypes.PENCIL]: Pencil,
  [ToolTypes.COLOR]: Color,
  [ToolTypes.SELECTOR]: SelectColor,
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