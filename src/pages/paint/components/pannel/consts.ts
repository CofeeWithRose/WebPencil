import {ToolStatesSetting, PainterDrawer} from './interface'
import Eraser from '../tools/eraser'
import Pencil from '../tools/pencil'
export const enum  ToolTypes {
  ERASER= 'eraser',

  PENCIL = 'pencil',

  COLOR = 'color',
};

export const toolStatesSetting: ToolStatesSetting = {
  
  [ToolTypes.ERASER]: Eraser,
  [ToolTypes.PENCIL]: Pencil,
  // [ToolState.COLOR]: 
}

export interface  ToolValues {

  [ToolTypes.ERASER] : PainterDrawer

  [ToolTypes.PENCIL] : PainterDrawer

  [ToolTypes.COLOR] : string

}