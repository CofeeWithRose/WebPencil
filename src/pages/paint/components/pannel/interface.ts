import { ToolValues, ToolTypes } from "./consts"
import { Painter } from "."

export interface PaintInfo {
  x: number, y: number, pressure: number
}
export type Vector2 = { x: number, y: number }



export interface PaintContex {
  lastPoint: Vector2 | null,
  lineWidthState: number
  color: string
}
export type PainterDrawer = (
  context: CanvasRenderingContext2D,
  { x, y, pressure }: PaintInfo,
  { lastPoint, lineWidthState }: PaintContex
) => void
export interface OffsetPosition extends Vector2 {
  offsetX: number
  offsetY: number
}

export type OnSelectTool = <T extends keyof ToolValues>(type: T, value: ToolValues[T]) => void

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