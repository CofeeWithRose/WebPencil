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