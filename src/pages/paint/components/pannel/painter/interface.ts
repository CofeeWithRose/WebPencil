import { RecorderListenerMap } from '../recorder/inerface'

export type painterOptions = {
  width: number;
  height: number;
}

export type Vector2 = { x: number, y: number }

export type PainterDrawer = (
  context: CanvasRenderingContext2D,
  { x, y, pressure }: PaintInfo,
  { lastPoint, lineWidthState }: PaintContex
) => void



export interface PaintInfo {
  x: number, y: number, pressure: number
}



export interface PaintContex {
  lastPoint: Vector2 | null,
  lineWidthState: number
  color: string
}

export interface OffsetPosition extends Vector2 {
  offsetX: number
  offsetY: number
}

export const enum  ToolTypes {
  ERASER= 'eraser',

  PENCIL = 'pencil',

  COLOR = 'color',

  SELECTOR = 'selector',

  WIDTH = 'width',

  RECORDER = 'recorder',
  
}

export interface  ToolValues {

  [ToolTypes.ERASER] : PainterDrawer

  [ToolTypes.PENCIL] : PainterDrawer

  [ToolTypes.COLOR] : string

  [ToolTypes.WIDTH] : number

}

export type OnSelectTool = <T extends keyof ToolValues>(type: T, value: ToolValues[T]) => void

export interface PainterEventMap extends RecorderListenerMap{
  
}

