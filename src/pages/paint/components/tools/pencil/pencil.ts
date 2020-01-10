import { PainterDrawer } from "../../pannel/interface"


const draw:PainterDrawer = ( context ,{x, y, pressure}, {lastPoint, lineWidthState} ) => {
  if(lastPoint){
    context.strokeStyle = 'rgb(0,0,0)'
    context.beginPath()
    context.moveTo(lastPoint.x, lastPoint.y)
    context.lineWidth = pressure * lineWidthState
    context.lineTo(x, y)
    context.stroke()
    context.closePath()
  }
}
export default draw