import Eraser from '../tools/eraser'
import Pencil from '../tools/pencil'
import Color from '../tools/color'
import SelectColor from '../tools/select-color'
import { PainterDrawer } from './painter/interface'
import { ToolStatesSetting } from '../toolbar'
export const enum  ToolTypes {
  ERASER= 'eraser',

  PENCIL = 'pencil',

  COLOR = 'color',

  WIDTH = 'width',
  
  SELECTOR = 'selector',
};

export const toolStatesSetting: ToolStatesSetting = {
  
	[ToolTypes.ERASER]: Eraser,
	[ToolTypes.PENCIL]: Pencil,
	[ToolTypes.COLOR]: Color,
	[ToolTypes.SELECTOR]: SelectColor,
}

export interface  ToolValues {

  [ToolTypes.ERASER] : PainterDrawer

  [ToolTypes.PENCIL] : PainterDrawer

  [ToolTypes.COLOR] : string

  [ToolTypes.WIDTH] : number
}

export class RGBA {

	static Lerp(from: RGBA, to: RGBA, number: number){
		const result:RGBA[] = []
		const dtR = (to.r-from.r)/number
		const dtG = (to.g-from.g)/number
		const dtB = (to.b-from.b)/number
		const dtA = (to.a-from.a)/number
		for(let i =0; i< number; i++){
			result.push(new RGBA(
				from.r + dtR *i,
				from.g + dtG *i,
				from.b + dtB *i,
				from.a + dtA *i,
			))
		}
		return result
	}

	static mutipy({r,g,b}:RGBA, percent: number){
		return new RGBA(r*percent, g * percent, b *percent)
	}

	static add({r,g,b}: RGBA, B: RGBA){
		return new RGBA(r+B.r, g+B.g, b+B.b )
	}

	static getLerpColor(from: RGBA, to:RGBA, percent: number){
		const {r,g,b,a} = from
		return new RGBA(
			(to.r -r)*percent + r,
			(to.g -g)*percent +g,
			(to.b -b)*percent + b,
			(to.a -a)*percent + a,
		)
	}

  static readonly black = new RGBA(255,255,255)
  
  static readonly white = new RGBA(0,0,0)
  constructor(
    public readonly r: number,
    public readonly g: number,
    public readonly b: number,
    public readonly a: number = 1,
  ){}

  toColorString(){
  	return `rgba(${this.r},${this.g},${this.b},${this.a})`
  }

}