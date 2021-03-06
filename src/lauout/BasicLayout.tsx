import React, { ReactElement, ReactNode } from 'react'
import style from './style.less'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

export interface BasicLayoutProps {
    contentClassName?: string,
    className?: string
    headNode?: ReactNode,
    asideClass?:string,
    asideNode?:ReactNode, 
    children?:ReactNode,
    beforeBack?: () => Promise<boolean> | boolean,
    showBackButton?: boolean
}

export default function Home ({
	className='', 
	headNode=null, 
	asideClass='', 
	asideNode=null, 
	children=null, 
	beforeBack, 
	showBackButton =true,
	contentClassName='',
}: BasicLayoutProps){
	const { goBack } = useHistory()
	const onGoBack = async () => {
		if((beforeBack && await beforeBack())|| !beforeBack){
			goBack()
		}
	}

	return <section 
		className={`${style.section} ${className}`}
	>
		<header>
			{
				showBackButton && 
           <Button 
           	ghost={true}
           	onPointerUp={onGoBack}
           	shape="circle"
           	size="small"
           	icon={<LeftOutlined />}
           ></Button>
			}
			{
				process.env.BUILD_ENV === 'development'&&
            <Button 
            	ghost={true}
            	onPointerUp={() => location.reload()}
            	shape="circle"
            	size="small"
            >reload</Button>
			}
        
			{headNode}
		</header>
		<div className={style.wrapper}>
			<aside className={asideClass} >
				{asideNode}
			</aside>
			<main className={contentClassName}>
				{children}
			</main>
		</div>
	</section>
}