import {ToolStatesSetting} from './interface'
export const enum  ToolState {
  ERASER= 'eraser',

  PENCIL = 'pencil',

  COLOR = 'color',
};

export const toolStatesSetting: ToolStatesSetting = {
  
  [ToolState.ERASER]:{
    desc: '橡皮擦',
    onSelectTool: (_, fun)=>{
      fun(ToolState.ERASER, null)
    }
  },
  [ToolState.PENCIL]: {
    desc: '铅笔',
    onSelectTool: (_,fun) => {
      fun(ToolState.PENCIL, null)
    }
  },
  [ToolState.COLOR]: {
    desc: '颜色',
    onSelectTool: (_,fun) => {
      
    }
  }
}

export interface  ToolValues {

  [ToolState.ERASER] : null

  [ToolState.PENCIL] : null

  [ToolState.COLOR] : string

}