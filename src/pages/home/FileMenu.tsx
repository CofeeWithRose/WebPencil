import React, { useState, FC } from 'react'
import { Modal, InputNumber, Form, Button } from 'antd'

export interface SizeInfo {
	width: number, height: number
}

export interface FileMenuProps {

	/**
	 * 样式.
	 */
	className?: string

	isVisibale: boolean

	onComplete?: ( size: SizeInfo ) => void

}

export const FileMenu: FC<FileMenuProps> = ( {className='', isVisibale, onComplete}: FileMenuProps) => {

	const [form] = Form.useForm();

	const onSubmit = async () =>{
		const values = await form.validateFields()
		onComplete && onComplete(values as SizeInfo)
	}

	const formater = (value: number ) => `${value||0}px`
	const parser = (displayVal: string) => (displayVal||'').replace('px', '')
	
	return <div>
		 <Form form={form} initialValues={{
				width: 2048,
				height: 2048,
		 }}>
			<Modal
				visible={isVisibale}
				title={'创建'}
				className={className}
				okButtonProps={{onClick:onSubmit}}
			> 
			
				
				<Form.Item 
					name="width" 
					label="宽度" 
					rules={[
						{
						  required: true,
						  message: '请填写画布宽度',
						},
					]}
				>
					<InputNumber 
						min={1} 
						max={4096} 
						precision={0} 
						formatter={formater} 
						parser={parser} 
					/>
				</Form.Item>
				<Form.Item 
					name="height" 
					label="高度" 
					rules={[
						{
						  required: true,
						  message: '请填写画布高度',
						},
					]}
				>
					<InputNumber 
						min={1} 
						max={4096} 
						precision={0} 
						formatter={formater} 
						parser={parser}
					/>
				</Form.Item>
			</Modal>
			</Form>


	</div>
}