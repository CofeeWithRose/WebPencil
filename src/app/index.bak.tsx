import React, { useRef, useEffect } from 'react'
export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const { current} = canvasRef
    if(current){
      const ctx = current.getContext('2d')
      if(ctx){
        const uint8 = new Uint8Array(4 * 2048 * 2048)
        uint8.fill(255, 0)
        const arr = new Uint8ClampedArray(uint8.buffer)
        const imgData = new ImageData(arr, 2048, 2048)
        ctx.putImageData(imgData, 0, 0)
      }
    }
  },[canvasRef.current])
  return <div>
    <canvas ref={canvasRef} width={2048} height={2048} ></canvas>
  </div>
}