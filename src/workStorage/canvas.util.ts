import { RGBA } from "../pages/paint/top-tool-bar/tool-item/color-selector/rgba"

export const createCanvas = (width = 0, height =0, background?: RGBA) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    
        const ctx = canvas.getContext('2d')
        if(ctx){
            ctx.scale(devicePixelRatio, devicePixelRatio)
            if(background){
                ctx.fillStyle = background.toRGBAString()
                ctx.fillRect(0,0,width,height)
            }
        }
    return canvas
}
