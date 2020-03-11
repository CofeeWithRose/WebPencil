
import React, { Fragment } from 'react'
import { FileMenu } from './FileMenu'
import style from './style.less'



export default function Paint(){



	return <section className={style.container}>
		<header>
			<FileMenu
				className={style.FileMenu}
			/>
		</header>
		<div>
			<aside></aside>
			<main>
				<canvas></canvas>
			</main>
		</div>
	</section>
  
}