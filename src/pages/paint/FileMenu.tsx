import React, { useState, FC } from 'react'
import { Modal, InputNumber, Form } from 'antd'


export interface FileMenuProps {

	/**
	 * 样式.
	 */
	className?: string

}

export const FileMenu: FC<FileMenuProps> = ( {className=''}: FileMenuProps) => {

	const [isFileSizeVisibale, setIsFileSizeVisibale] = useState(false)
	const [ hasCreated, setHasCreated ] = useState(false)
	

	const onCreate = () => {
		setIsFileSizeVisibale(true)
	}

	const onFinish = (values: object) =>{
		console.log(values)
	}

	
	return <div>
		 {
			!hasCreated && 
			<span onClick={onCreate} >新建</span>
		 }
		  <Form 
			 	onFinish={onFinish}
			 >
			<Modal
				visible={isFileSizeVisibale}
				title={'创建'}
				className={className}
			>
				
				<Form.Item 
					name="width" 
					label="宽度"
						
				>
					<InputNumber min={1} max={10} precision={0} />
					<span className="ant-form-text"> px</span>
				</Form.Item>
					
				{/* <ul>
					<li>
						<span>宽度：</span>
						<FormItem>
							<InputNumber precision={0} />
						</FormItem>
						<span>px</span>
					</li>

					<li>
						<span>高度：</span>
						<InputNumber precision={0} />
						<span>px</span>
					</li>
				</ul> */}
			</Modal>
		 </Form>
	</div>
}