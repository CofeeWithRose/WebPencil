import { RGBA } from "../pages/paint/top-tool-bar/tool-item/color-selector/rgba"
import {uniqueId} from 'lodash'
import CanvasWorker from './canvas-worker.ts'
const canvasWorker = new CanvasWorker()




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

export const copyCanvas = (canvas: HTMLCanvasElement|OffscreenCanvas) =>{
    const newC = document.createElement('canvas')
    newC.width = canvas.width
    newC.height = canvas.height
    const ctx = newC.getContext('2d')
    const oldCtx = canvas.getContext('2d')
    if(ctx&&oldCtx){
      ctx.imageSmoothingEnabled = false
      ctx.putImageData(oldCtx.getImageData(0,0, canvas.width, canvas.height),0,0 )
      // ctx.clearRect(0,0, newC.width, newC.height)
      // ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height)
    }
  
    return newC;
}

const createCanvasByData = (data: Uint8ClampedArray,width: number,  height: number) => {
  let imgData: ImageData|null = new ImageData(data, width, height)
  const c = document.createElement('canvas')
  c.width = width
  c.height = height
  const ctx = c.getContext('2d')
  if(ctx){
    ctx.putImageData(imgData, 0, 0)
  }
  return c
}

const deCodeImageTask: {file: ArrayBuffer, cb: (img:HTMLCanvasElement) => void}[]  = []
let decodingNumber = 0


// const handleDecodeTask = async () => {
//   if(decodingNumber<1){
//     let task = deCodeImageTask.shift()
//     while(task){
//       decodingNumber++
//       const { file, cb } = task
//       const canvas = document.createElement('canvas')
//       const  postId = uniqueId('decode_png_')
//       const params: {canvasFile: ArrayBuffer,  postId: string} = { canvasFile: file, postId }
//       const listener = ({data: {postId:rsPostId, width, height, data} }) => {
//         width = width as number
//         height = height as number
//         if((rsPostId as string) === postId){
//           let d = data as Uint8Array
//           const arr = new Uint8ClampedArray(d)
//           cb(createCanvasByData(arr, width, height))
//         }
//         canvasWorker.removeEventListener('message', listener)
//       }
//       canvasWorker.addEventListener('message', listener )
//       canvasWorker.postMessage({method: 'file2Image', params}, [file])
//       decodingNumber--
//       task = deCodeImageTask.shift()
//     }
//   }
// }

const handleDecodeTask = async () => {
  if(decodingNumber<1){
    let task = deCodeImageTask.shift()
    while(task){
      decodingNumber++
      const { file, cb } = task
      const img = new Image()
      const url = URL.createObjectURL(new Blob([file]))
      img.src = url
      const canvas = document.createElement('canvas')
      try{
        await img.decode()
        canvas.width = img.width
        canvas.height = img.height
        setContent(canvas, img)
      }catch(e){
        console.error(e, 'img decode error', e.message)
      }
      URL.revokeObjectURL(url)
      cb(canvas)
      decodingNumber--
      task = deCodeImageTask.shift()
    }
    
  }
}

/**
 * 控制解码的并发.
 * @param buffer 
 */
export const createCanvasByFile = async (buffer: ArrayBuffer)  => {
  return new Promise<HTMLCanvasElement>(cb => {
    deCodeImageTask.push( {file:buffer, cb} )
    handleDecodeTask()
  })
    
}

const toArrayBufferHandle =  async (blob: Blob|null, cb: (buffer: ArrayBuffer | null) => void) => {
  if(blob){
    const url = URL.createObjectURL(blob)
    const buffer =  await (await fetch(url)).arrayBuffer()
    cb(buffer)
  }else{
    cb(null)
  }
}

export const toArrayBuffer = (canvas: HTMLCanvasElement) => {
    return new Promise<ArrayBuffer | null>(resolve => {
      canvas.toBlob( blob => toArrayBufferHandle(blob, resolve), 'image/png', 1)
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
