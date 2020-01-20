import { RecorderListenerMap } from '../recorder/inerface'

export type painterOptions = {
  width: number;
  height: number;
}

// export type Vector2 = { x: number, y: number }
export class Vector2 {

	constructor( public x: number, public y: number ){}
  
	static add(v1: Vector2, v2: Vector2){
		return new Vector2(v1.x + v2.x, v1.y + v2.y)
	}
  
	static reduce(v1: Vector2, v2: Vector2){
		return new Vector2(v1.x - v2.x, v1.y - v2.y)
	}
  
	static dist(v1: Vector2, v2: Vector2){
		return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2)
	}
  
	static vertical(v: Vector2){
		const dist = Math.sqrt(v.x ** 2 + v.y **2)
		if(dist === 0){
			console.log(`dist 0： ${v.x} ${v.y}`)
		}
		return new Vector2( v.y/dist, -v.x/dist )
	}
  
	static scale(v: Vector2, scale: number){
		return new Vector2(v.x * scale, v.y *scale)
	}
  
	static equal(v1: Vector2, v2: Vector2){
		return v1.x === v2.x && v1.y === v2.y
	}
}

export type PainterDrawer = (
  context: CanvasRenderingContext2D,
  { x, y, pressure }: PaintPointInfo,
  { lastPoint, lineWidthState }: PaintContex
) => void

export interface PannelInfo {
  w: number, h: number
}
export interface PainterPen {

  draw: PainterDrawer

  onStart( point: {pressure: number}&Vector2): void

  onEnd():void

  init: ( ctx: CanvasRenderingContext2D, pannelInfo: PannelInfo )=> void

}



export interface PaintPointInfo {
  x: number, y: number, pressure: number
}


export interface PaintContex {
  lastPoint:  PaintPointInfo| null,
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

  [ToolTypes.ERASER] : PainterPen

  [ToolTypes.PENCIL] : PainterPen

  [ToolTypes.COLOR] : string

  [ToolTypes.WIDTH] : number

}

export type OnSelectTool = <T extends keyof ToolValues>(type: T, value: ToolValues[T]) => void

export interface PainterEventMap extends RecorderListenerMap{
  
}

