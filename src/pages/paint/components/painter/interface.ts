import { ToolValues, ToolState } from "./consts"

export interface PaintInfo {
  x: number, y: number, pressure: number
}
export type Vector2 = { x: number, y: number }

export interface PaintContex {
  lastPoint: Vector2| null,
  lineWidthState: number
}
export type PainterDrawer  = (context: CanvasRenderingContext2D ,{x, y, pressure}: PaintInfo, {lastPoint, lineWidthState}: PaintContex)  => void
export interface OffsetPosition extends Vector2 {
  offsetX: number
  offsetY: number
}

export type OnSelectTool = <T extends keyof ToolValues>(type: T, value: ToolValues[T]) => void

export type OnActiveTool = (type: ToolValues ) => void

export interface ToolStatesSetting {
  [index: string]: {
    desc:string,
    onSelectTool: (curState: ToolState,fun: OnSelectTool)=> void 
  }
}