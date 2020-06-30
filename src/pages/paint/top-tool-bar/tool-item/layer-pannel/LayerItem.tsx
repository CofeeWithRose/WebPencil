import React, { LegacyRef } from 'react'
import styles from './LayerItem.less'

export interface LayerItemProps{
  canvasRef?: LegacyRef<HTMLCanvasElement>
}
export default function LayerItem({canvasRef}: LayerItemProps){
	return <div className={styles.layerItem}>
		<canvas 
			ref={canvasRef} 
			width="45" 
			height="45"
		></canvas>
	</div>
}