import React, { ReactNode } from 'react'
import styles from './LayerList.less'

export interface LayerListProps {
  children: ReactNode[]
  title?: ReactNode
}
export default function LayerList({
	children, title
}: LayerListProps){
	return <div className={styles.layerList}>
		<header 
			className={styles.header}
		>
			{title}
		</header>
		<div className={styles.view} >
			<div className={styles.scroll}>
				{children}
			</div>
		</div>
	</div>
}