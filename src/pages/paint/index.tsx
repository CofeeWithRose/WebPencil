
import React, {  useEffect, useState } from 'react'
import BasicLayout from '../../lauout/BasicLayout'
import style from './style.less'
import { usePCanvas, PCanvas } from './pcanvas'
import  qs from 'qs'
import WorkStorage, { WorkInfo, WorkDetail } from '../../workStorage'
import TopToolBar from './top-tool-bar'
import AsideToolBar from './aside-tool-bar'
import { useHistory } from 'react-router-dom'


export default function Paint(){

	const workStateHandle = useState<WorkDetail>()
	const [ workDetail, setWorkDetail ] = workStateHandle
  const {pCanvas} = usePCanvas()
  const [loading, setLoading] = useState(true)
  const { replace, location } = useHistory()

	useEffect(() => {
		(async () => {
			const {workId} = qs.parse(location.search.substr(1)) as  (Pick<WorkInfo, 'workId'>)
      setLoading(true)
      const work = await WorkStorage.getWorkDetail(workId)
      if(work){
        setLoading(false)
        setWorkDetail(work)
      }else{
        replace('./home')
      }
			
		})()
	},[])

	useEffect(() => {
		return () => {
			// if(workDetail){
			// 	WorkStorage.saveWork(workDetail)
			// }
		}
	},[workDetail])

	return <BasicLayout 
				contentClassName={style.layout} 
				headNode={<TopToolBar pCanvasController={pCanvas} />}
				asideNode={
					<AsideToolBar 
						pCanvasController={pCanvas}
					/>
				}
			>
				{
          <PCanvas 
            loading={loading}
						pCanvasController={pCanvas}   
						initValue={workDetail}
					/>
				}
	</BasicLayout>
}