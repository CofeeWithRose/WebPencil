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

export const createCanvasByFile = (canvasFile: File)  => {
    return new Promise<HTMLCanvasElement>(resolve => {
        const img = new Image()
        img.onload = () => {
            img.onload = null
            resolve(copyCanvas(img))
        }
        img.src = URL.createObjectURL(canvasFile)
    })
}

export const toBlob = (canvas: HTMLCanvasElement) => {
    return new Promise<Blob | null>(resolve => {
        canvas.toBlob(resolve, 'image/png', 1)
    })
}

export const fromFile = async (canvasFile: File, {width=0, height=0})  => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if(ctx){
        const buffer = await canvasFile.arrayBuffer()
        const imgData = new ImageData(new Uint8ClampedArray(buffer, 0), width, height)
        ctx.putImageData(imgData, 0, 0)
    }
    return canvas
}

export const toFile = (canvas: HTMLCanvasElement, fileName: string) => {
    const ctx = canvas.getContext('2d')
    const data = ctx?.getImageData(0,0,canvas.width,canvas.height)
    const buffer = data?.data.buffer || new ArrayBuffer(0)
    return new File([buffer], fileName)
}