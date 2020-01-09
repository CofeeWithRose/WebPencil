
import styles from './index.less'
import { useCallback, useEffect } from 'react'
import { ToolState } from './consts'
import { Vector2, PainterDrawer, OffsetPosition } from './interface'
import pencil from '../draws/pencil'
import { Omit } from 'react-router';
export type painterOptions = {
  width: number;
  height: number;
}

export class Painter {

  static createPainter(container: HTMLElement, option: painterOptions) {
    const canvas = document.createElement('canvas')
    const { width, height } = option
    canvas.width = width
    canvas.height = height
    canvas.classList.add(styles.paintCanvas)
    container.appendChild(canvas)
    return new Painter(canvas)
  }

  protected context: CanvasRenderingContext2D

  protected lineWidthState = 5

  protected isPaintting = false

  protected lastPoint: Vector2| null = null

  protected painter: PainterDrawer = pencil

  protected offsetPosition: OffsetPosition

  

  protected constructor(

    protected canvas: HTMLCanvasElement
  ) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      this.context = ctx
      canvas.addEventListener('pointermove', this.onPointermove)
      canvas.addEventListener('pointerdown', this.onPointerdown)
      canvas.addEventListener('pointerup', this.onPointerup)
      canvas.addEventListener('pointerout', this.onPointerup)
      canvas.addEventListener('touchmove', this.onTouchmove)
      this.offsetPosition = {
        x: this.canvas.width/canvas.clientWidth,
        y: this.canvas.height/canvas.clientHeight,
        offsetX: canvas.offsetLeft,
        offsetY: canvas.offsetTop
      }
    } else {
      throw 'failed create canvas'
    }
  };

  onTouchmove = (e: TouchEvent) => {
    e.preventDefault()
  }

  onPointermove = (e: PointerEvent) => {
    e.preventDefault();
    if (!this.isPaintting) {
      return
    }
    const  { pressure, x: x1, y:y1 } = e
    const {x,y} = this.getCanvasePosition({x:x1, y:y1})
    this.painter(this.context, {x, y, pressure}, { lastPoint: this.lastPoint, lineWidthState: this.lineWidthState})
    this.lastPoint = {x,y}
  }

  onPointerdown = (e: PointerEvent) => {
    e.preventDefault();
    const { x, y } = e
    this.lastPoint =this.getCanvasePosition({x, y})
    this.isPaintting = true
  }

  onPointerup = (e: PointerEvent) => {
    e.preventDefault();
    this.lastPoint = null
    this.isPaintting = false
  }


  setPaintDrawer = async ( type: ToolState ) => {
    const mod = await import(`../draws/${type}`)
    if(mod){
      const drawer = mod.default
      this.painter = drawer
    }
  }

  getCanvasePosition = ({x,y}:Vector2) => {
    return {
      x: x * this.offsetPosition.x - this.offsetPosition.offsetX,
      y: y * this.offsetPosition.y - this.offsetPosition.offsetY,
    }
  }
}



export const usePainter = () => {
  let painter:Painter
  const container = useCallback(container => {
    painter = Painter.createPainter(container, { width: screen.width, height: screen.height })
  }, [])

  const  onSelectTool = async ( type: ToolState ) => {
    painter.setPaintDrawer(type)
  }

  return { 
    container,  
    onSelectTool,
  }
}