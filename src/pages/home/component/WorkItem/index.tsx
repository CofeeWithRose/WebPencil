import React, { ReactNode, useRef } from 'react'
import style from './style.less'
import { usePointerUp } from '@/util/ui'

export interface WorkItemProps {
    id: string,
    name: string,
    content: ReactNode,
    onPointerUp?: (id: string) => void
}
export default function WorkItem({name, content, id, onPointerUp }: WorkItemProps) {

	const sectionRef = useRef<HTMLElement>(null)

	usePointerUp(sectionRef, {
		onShortUp: () =>  onPointerUp&&onPointerUp(id),
		onLongUp: () => console.log('long up..', id)
	})

	return <section 
		ref={sectionRef}
		className={style.workItem}
		// onPointerUp={() => {
		// 	onPointerUp && onPointerUp(id)
		// }}
	>
		<div 
			className={style.imgBox}
		>
			{content}
		</div>
		<p>{name}</p>
	</section>
}