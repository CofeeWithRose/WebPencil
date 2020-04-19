import React, { ReactElement, ReactNode } from 'react'
import style from './style.less'
import { history } from '../app'

export interface BasicLayoutProps {
    className?: string
    headNode?: ReactNode,
    asideClass?:string,
    asideNode?:ReactNode, 
    children?:ReactNode,
}

export default function Home ({className='', headNode=null, asideClass='', asideNode=null, children=null}: BasicLayoutProps){
    return <section 
        className={`${style.section} ${className}`}
    >
    <header>
        <span onClick={() => history.goBack()}>back</span>      
        {headNode}
    </header>
    <div className={style.wrapper}>
        <aside className={asideClass} >
            {asideNode}
        </aside>
        <main>
            {children}
        </main>
    </div>
</section>
}