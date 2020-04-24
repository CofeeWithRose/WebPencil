import React, { useState, useRef, useEffect } from 'react'
import BasicLayout from '../../lauout/BasicLayout'
import style from './style.less'
import WorkItem from './component/WorkItem'
import { PlusOutlined } from '@ant-design/icons';
import { history } from '../../app'
import { FileMenu, SizeInfo } from './FileMenu';
import qs from 'qs'
import WorkStorage, { WorkInfo } from '../../workStorage';

export default () => {
    
    const [ isShowSetting , setIsShowSetting ] = useState(false)
    const [ workList, setWorkList ] = useState<WorkInfo[]>([])
    
    

    useEffect(() => {
        (async () => {
            const list =  await WorkStorage.getWorkList()
            setWorkList(list)
        })()
    }, [])

    /**
     * 跳转至编辑页面.
     * @param sizeInfo 画布大小.
     */
    const newWork = (sizeInfo: SizeInfo) => {
        history.push({pathname: '/paint', search:qs.stringify({...sizeInfo, type: 'new'}) })
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
        history.push({pathname: '/paint', search:qs.stringify({workId, type: 'edit'}) })
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
                onClick={addWork}
            />
            {
                workList.map(({workId, name, thumbnail}: WorkInfo) => 
                <WorkItem 
                    id={workId}
                    name={name}
                    content={thumbnail}
                    onClick={() => editWork(workId)}
                />)
            }

        </main>
        <FileMenu isVisibale={isShowSetting} onComplete={newWork}/>
     
    </BasicLayout>
}