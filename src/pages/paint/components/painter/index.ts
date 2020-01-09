
import styles from './index.less'
import { useCallback, useEffect } from 'react'
export type painterOptions = {
  width: number;
  height: number;
}

export type Vector2 = { x: number, y: number }
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

  protected lineWidthState = 10

  protected isPaintting = false

  protected lastPoint: Vector2 | null = null


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
    } else {
      throw 'failed create canvas'
    }
  }

  onTouchmove = (e: TouchEvent) => {
    e.preventDefault()
  }

  onPointermove = (e: PointerEvent) => {
    e.preventDefault();
    if (!this.isPaintting) {
      return
    }
    const { x, y, pressure } = e
    this.draw(x, y, pressure)
  }

  onPointerdown = (e: PointerEvent) => {
    e.preventDefault();
    const { x, y } = e
    this.lastPoint = { x, y}
    this.isPaintting = true
  }

  onPointerup = (e: PointerEvent) => {
    e.preventDefault();
    this.lastPoint = null
    this.isPaintting = false
  }

  draw = (x: number, y: number, pressure: number) => {
    if(this.lastPoint){
      this.context.beginPath()
      this.context.moveTo(this.lastPoint.x, this.lastPoint.y)
      this.context.lineWidth = pressure * this.lineWidthState
      this.context.lineTo(x, y)
      this.context.stroke()
      this.context.closePath()
      this.lastPoint = {x,y }
    }
  }

}

export const usePainter = () => {
  let painter
  const container = useCallback(container => {
    painter = Painter.createPainter(container, { width: screen.width, height: screen.height })
  }, [])

  // useEffect(()=> {
  //   const fun = (e: ) => {
  //     e.preventDefault();
  //   }
  //   document.body.addEventListener('po', fun ,{ passive: false });
  // })

  return { container }
}