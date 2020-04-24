
import React, { Fragment, useLayoutEffect, useRef, useEffect, useState } from 'react'
import BasicLayout from '../../lauout/BasicLayout'
import style from './style.less'
import PCanvas from './PCanvas'
import {history} from '../../app'
import  qs from 'qs'
import { WorkInfo, WorkDetail } from '../../workStorage'


export default function Paint(){

	const [ workDetail, setWorkDetail ] = useState<WorkDetail>()

	useEffect(() => {
		const {width, height, type, workId} = qs.parse(history.location.search.substr(1)) as  (Pick<WorkInfo, 'width' | 'height'| 'workId'> & {type: 'new'|'edit'})
		if( type === 'new'){
		}else{
		}
	},[])

	// const ele = useRef<HTMLElement>(null)
	// const onClick = () => {
	// 	// console.log('click')
	// 	// if(ele.current){
	// 	// 	ele.current.requestFullscreen()
	// 	// }
	// }
	// return <section 
	// 	ref={ele}
	//     onClick={onClick}
	// 	className={style.section}
	// >
	// 	<header>
	// 	</header>
	// 	<div className={style.wrapper}>
	// 		<aside></aside>
	// 		<main>
	// 			<PCanvas/>
	// 		</main>
	// 	</div>
	// </section>
	return <BasicLayout >
		<PCanvas workDetail={workDetail}/>
	</BasicLayout>
  
}