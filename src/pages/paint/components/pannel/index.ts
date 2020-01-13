
import styles from './index.less'
import { useCallback, useRef, useEffect, useState } from 'react'
import { Vector2, PainterDrawer, OffsetPosition, OnSelectTool } from './interface'
import pencil from '../tools/pencil/pencil'
import { ToolTypes, ToolValues } from './consts'

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

  protected color: string = '#000000'



  

  protected constructor(

    protected canvas: HTMLCanvasElement
  ) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      this.context = ctx
      canvas.addEventListener('pointermove', this.onPointermove,{passive: true})
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

  protected onTouchmove = (e: TouchEvent) => {
    e.preventDefault()
  }

  protected onPointermove = (e: PointerEvent) => {
    e.preventDefault();
    if (!this.isPaintting) {
      return
    }
    const  { pressure, x: x1, y:y1 } = e
    const {x,y} = this.getCanvasePosition({x:x1, y:y1})
    this.painter(this.context, {x, y, pressure}, { lastPoint: this.lastPoint, lineWidthState: this.lineWidthState, color:this.color})
    this.lastPoint = {x,y}
  }

  protected onPointerdown = (e: PointerEvent) => {
    e.preventDefault();
    const { x, y } = e
    this.lastPoint =this.getCanvasePosition({x, y})
    this.isPaintting = true
  }

  protected onPointerup = (e: PointerEvent) => {
    e.preventDefault();
    this.lastPoint = null
    this.isPaintting = false
  }


  setPaintDrawer: OnSelectTool = async ( type, value ) => {
    if(type === ToolTypes.ERASER || 
      type === ToolTypes.PENCIL){
      this.painter = <ToolValues[ToolTypes.ERASER | ToolTypes.PENCIL]>value
      return
    }
    if(type === ToolTypes.COLOR){
      this.color = <ToolValues[ToolTypes.COLOR]>value
      return
    }
    if(type === ToolTypes.WIDTH){
      this.lineWidthState = <ToolValues[ToolTypes.WIDTH]>value
      return
    }
    this.onError(`not inmpement ${type}`)
  }

  onError = (message: string) => {
    console.error(message)
  }

  protected getCanvasePosition = ({x,y}:Vector2) => {
    return {
      x: x * this.offsetPosition.x - this.offsetPosition.offsetX,
      y: y * this.offsetPosition.y - this.offsetPosition.offsetY,
    }
  }
}


export const usePainter = () => {
  const container = useRef<HTMLDivElement>(null)
  const [painter, setPainter] = useState<Painter>()

  useEffect(() => {
    if(container.current){
      setPainter(Painter.createPainter(container.current, { width: screen.width, height: screen.height }))
    }
  }, [])

  const  onSelectTool: OnSelectTool = ( type, value ) => {
    painter && painter.setPaintDrawer(type, value)
  }
  return { 
    container,  
    onSelectTool,
  }
}