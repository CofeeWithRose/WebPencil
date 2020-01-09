
import { PainterDrawer } from "../painter/interface"


const draw:PainterDrawer = ( context ,{x, y, pressure}, {lastPoint, lineWidthState} ) => {
  if(lastPoint){
    console.log('eraser...')
    context.beginPath()
    context.moveTo(lastPoint.x, lastPoint.y)
    context.strokeStyle = 'rgb(255,255,255)'
    context.lineWidth = lineWidthState
    context.lineTo(x, y)
    context.stroke()
    context.closePath()
  }
}
export default draw