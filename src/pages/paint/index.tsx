import React from 'react'
import styles from './index.less'
console.log('styles: ', styles)
export default function Paint(){
  return <canvas className={styles.mainCanvas}>你的浏览器不支持</canvas>
}