import {ToolStatesSetting, PainterDrawer} from './interface'
import Eraser from '../tools/eraser'
import Pencil from '../tools/pencil'
import Color from '../tools/color'
export const enum  ToolTypes {
  ERASER= 'eraser',

  PENCIL = 'pencil',

  COLOR = 'color',
};

export const toolStatesSetting: ToolStatesSetting = {
  
  [ToolTypes.ERASER]: Eraser,
  [ToolTypes.PENCIL]: Pencil,
  [ToolTypes.COLOR]: Color,
}

export interface  ToolValues {

  [ToolTypes.ERASER] : PainterDrawer

  [ToolTypes.PENCIL] : PainterDrawer

  [ToolTypes.COLOR] : string

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

  constructor(
    public r: number,
    public g: number,
    public b: number,
    public a: number = 1,
  ){}

  toColorString(){
    return `rgba(${this.r},${this.g},${this.b},${this.a})`
  }

}