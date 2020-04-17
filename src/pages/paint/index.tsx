
import React, { Fragment, useLayoutEffect, useRef, useEffect } from 'react'
import style from './style.less'
import PCanvas from './PCanvas'



export default function Paint(){
	const ele = useRef<HTMLElement>(null)
	const onClick = () => {
		// console.log('click')
		// if(ele.current){
		// 	ele.current.requestFullscreen()
		// }
	}

	return <section 
		ref={ele}
	    onClick={onClick}
		className={style.section}
	>
		<header>
		
		</header>
		<div className={style.wrapper}>
			<aside></aside>
			<main>
				<PCanvas/>
			</main>
		</div>
	</section>
  
}