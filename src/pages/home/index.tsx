import React, { useState, useRef, useEffect } from 'react'
import BasicLayout from '../../lauout/BasicLayout'
import style from './style.less'
import WorkItem from './component/WorkItem'
import { PlusOutlined } from '@ant-design/icons';
import { FileMenu, WorkForm } from './FileMenu';
import qs from 'qs'
import WorkStorage, { WorkInfo, WorkDetail } from '../../workStorage';
import { RGBA } from '../paint/top-tool-bar/tool-item/color-selector/rgba';
import { useHistory } from 'react-router-dom';
import ss from '@/assets/favicon.png';

export default () => {
    
    const [ isShowSetting , setIsShowSetting ] = useState(false)
    const [ workList, setWorkList ] = useState<WorkInfo[]>([])
    const { push } = useHistory()
    

    useEffect(() => {
        (async () => {
            const list =  await WorkStorage.getWorkList()
            setWorkList(list)
        })()
        return () => {
          setWorkList([])
        }
    }, [])

    /**
     * 跳转至编辑页面.
     * @param sizeInfo 画布大小.
     */
    const newWork = async ({width, height}: WorkForm) => {
        const work = WorkDetail.createEmpty(width, height, RGBA.WHITE)
        await  WorkStorage.saveWork(work)
        editWork(work.workInfo.workId)
    }

    /**
     * 显示画布弹窗
     */
    const addWork = () => setIsShowSetting(true)

    /**
     * 
     * @param workId 到编辑页面.
     */
    const editWork = (workId: string) => {
        push({pathname: '/paint', search:qs.stringify({workId}) })
    }

    return <BasicLayout
        showBackButton={false}
        asideClass={style.asideClass}
    >
        <main className={style.listWrap}>
            <WorkItem 
                id='add' 
                name="新建"
                content={ <PlusOutlined style={{ fontSize: '30px' }} />}  
                onPointerUp={addWork}
            />
            {
                workList.map(({workId, name, thumbnail}: WorkInfo) => 
                <WorkItem 
                    key={workId}
                    id={workId}
                    name={name}
                    content={<img 
                      src={thumbnail}  
                      onLoad={ () => URL.revokeObjectURL(thumbnail) }
                    />}
                    onPointerUp={() => editWork(workId)}
                />)
            }

        </main>
        <FileMenu isVisibale={isShowSetting} onComplete={newWork} onCancel={ () => setIsShowSetting(false) } />
     
    </BasicLayout>
}