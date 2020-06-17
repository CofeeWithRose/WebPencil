import { RGBA } from "../pages/paint/top-tool-bar/tool-item/color-selector/rgba"
import {uniqueId} from 'lodash'


export const createCanvas = (width = 0, height =0, background?: RGBA) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.setAttribute('uuid', uniqueId('canvasId-'))
        const ctx = canvas.getContext('2d')
        if(ctx){
            if(background){
                ctx.fillStyle = background.toRGBAString()
                ctx.fillRect(0,0,width,height)
            }
        }
    return canvas
}

export const setContent = (des: HTMLCanvasElement, source: HTMLCanvasElement| HTMLImageElement) => {
    const ctx = des.getContext('2d')
    console.log(source.width, source.height)
    ctx?.drawImage(source, 0, 0)
}

export const copyCanvas = (canvas: HTMLCanvasElement| HTMLImageElement) =>{
    const newC = document.createElement('canvas')
    newC.width = canvas.width
    newC.height = canvas.height
    const ctx = newC.getContext('2d')
    if(ctx){
      ctx.imageSmoothingEnabled = false
      ctx.clearRect(0,0, newC.width, newC.height)
      ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height)
    }
  
    return newC;
}

const deCodeImageTask: {file:File, cb: (img:HTMLImageElement) => void}[]  = []
let decodingNumber = 0


const handleDecodeTask = async () => {
  if(decodingNumber<1){
    let task = deCodeImageTask.shift()
    while(task){
      decodingNumber++
      const { file, cb } = task
      const img = new Image()
      img.src = URL.createObjectURL(file)
      try{
        await img.decode()
      }catch(e){
        console.error(e, 'img decode error', e.message)
      }
      URL.revokeObjectURL(img.src)
      cb(img)
      decodingNumber--
      task = deCodeImageTask.shift()
      // console.log(decodingNumber,deCodeImageTask.length )
    }
    
  }
}
/**
 * 由于浏览器img解码内存限制，控制解码的并发.
 * @param canvasFile 
 */
export const createImageByFile = async (canvasFile: File)  => {
  return new Promise<HTMLImageElement>(cb => {
    deCodeImageTask.push( {file:canvasFile, cb} )
    handleDecodeTask()
  })
    
}


export const toBlob = (canvas: HTMLCanvasElement) => {
    return new Promise<Blob | null>(resolve => {
        canvas.toBlob(resolve, 'image/png', 1)
    })
}

let _emptyUrl = ():string => {
    const canvas = createCanvas(0,0)
    const str =  canvas.toDataURL()
    _emptyUrl = () => str
    return _emptyUrl()
}

export const emptyUrl = () => {
   return _emptyUrl()
}