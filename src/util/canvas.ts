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




export const copyCanvas = (canvas: HTMLCanvasElement| HTMLImageElement) =>{
    const newC = document.createElement('canvas')
    newC.width = canvas.width
    newC.height = canvas.height
    const ctx = newC.getContext('2d')
    ctx?.clearRect(0,0, newC.width, newC.height)
    ctx?.drawImage(canvas, 0, 0, canvas.width, canvas.height)
    return newC;
}

export const createImageByFile = (canvasFile: File)  => {
    return new Promise<HTMLImageElement>(resolve => {
        const img = new Image()
        img.onload = () => {
            img.onload = null
            resolve(img)
        }
        img.src = URL.createObjectURL(canvasFile)
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