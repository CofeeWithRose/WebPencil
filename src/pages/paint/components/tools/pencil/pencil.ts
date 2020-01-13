import { PainterDrawer } from "../../pannel/interface"


const draw:PainterDrawer = ( context ,{x, y, pressure}, {lastPoint, lineWidthState, color} ) => {
  if(lastPoint){
    context.strokeStyle = color
    context.lineCap = 'round'
    context.lineJoin = 'round'

    context.beginPath()
    context.moveTo(lastPoint.x, lastPoint.y)
    context.lineWidth = pressure * lineWidthState
    context.lineTo(x, y)
    console.log({x,y})
    context.stroke()
    context.closePath()
  }
}
export default draw