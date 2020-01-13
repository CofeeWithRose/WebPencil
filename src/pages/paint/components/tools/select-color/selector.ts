import { PainterDrawer } from "../../pannel/interface"


const selector: PainterDrawer = ( context ,{x, y} ) => {
  const imageData =  context.getImageData(x,y, 1,1)

  imageData.data[0]
  // if(lastPoint){
  //   context.strokeStyle = color
  //   context.beginPath()
  //   context.moveTo(lastPoint.x, lastPoint.y)
  //   context.lineWidth = pressure * lineWidthState
  //   context.lineTo(x, y)
  //   context.stroke()
  //   context.closePath()
  // }
}
export default selector