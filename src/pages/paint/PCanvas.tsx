import React, { useRef, useEffect } from 'react'
import Hammer from 'hammerjs'
import styles from './style.less'
import { WorkDetail } from '../../workStorage'
import useTransform from '../../hooks/useTransform'
import { List } from 'antd'

export interface PCanvasProps {

    workDetail?: WorkDetail
}

/**
 * 手绘编辑器的画板.
 */
export default ({ workDetail }: PCanvasProps) =>{

  const { wrapRef } = useTransform<HTMLElement>()
  
    return <main 
        ref={wrapRef}
        className={styles.PCanvas}
    >
      ss
    </main>
}