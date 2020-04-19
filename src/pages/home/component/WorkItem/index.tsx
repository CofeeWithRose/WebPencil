import React, { ReactNode } from 'react'
import style from './style.less'

export interface WorkItemProps {
    id: string,
    name: string,
    content: ReactNode,
    onClick?: (id: string) => void
}
export default ({name, content, id, onClick }: WorkItemProps) => {
    return <section 
        className={style.workItem}
        onClick={() => onClick && onClick(id)}
    >
        <div 
            className={style.imgBox}
        >
            {content}
        </div>
    <p>{name}</p>
    </section>
}