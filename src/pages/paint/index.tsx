
import React, { Fragment } from 'react'
import style from './style.less'
import PCanvas from './PCanvas'



export default function Paint(){



	return <section className={style.container}>
		<header>
		
		</header>
		<div>
			<aside></aside>
			<main>
				<PCanvas/>
			</main>
		</div>
	</section>
  
}