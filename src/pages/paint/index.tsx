import React, { useEffect } from 'react'
import { usePainter } from './components/painter/index'
import style from './index.less'
export default function Paint(){
  const { container } = usePainter()
  return <div ref={container}  className={style.container}></div>
}