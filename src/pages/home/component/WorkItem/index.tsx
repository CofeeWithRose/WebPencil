import React, { ReactNode } from 'react'
import style from './style.less'

export interface WorkItemProps {
    id: string,
    name: string,
    content: ReactNode,
    onPointerUp?: (id: string) => void
}
export default ({name, content, id, onPointerUp }: WorkItemProps) => {
    return <section 
        className={style.workItem}
        onPointerUp={() => onPointerUp && onPointerUp(id)}
    >
        <div 
            className={style.imgBox}
        >
            {content}
        </div>
    <p>{name}</p>
    </section>
}