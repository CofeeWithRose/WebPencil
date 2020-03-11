import { PainterTooolProps } from '../../toolbar'
import React, { Fragment, useContext, useEffect, useState, useRef } from 'react'
import { PaintContext } from '../../..'
import { RecorderStates } from '../../pannel/recorder/inerface'
import styles from '../index.less'
import { Tooltip, Icon } from 'antd'

export default function Recoder() {
	const { painter } = useContext(PaintContext)
	const [recorderState, setRecorderState] = useState()
	useEffect(() => {
		if (painter) {
			painter.addEventListener('stateChange', setRecorderState)
			return () => painter.removeEventListener('stateChange', setRecorderState)
		}
	}, [painter])

	return <Fragment>
		<span 
			className={`
				${styles.tooBarItem} 
				${ recorderState === RecorderStates.BOTH || RecorderStates.CAN_UNDO === recorderState ? styles.eneableItem : ''}
      		`}
			onClick={painter&&painter.undo}
		>
			<Tooltip title="undo" placement="bottom" >
				<Icon type="undo" />
			</Tooltip>
		</span>
		<span 
			className={`
					${styles.tooBarItem} 
					${recorderState === RecorderStates.BOTH || RecorderStates.CAN_REDO === recorderState ? styles.eneableItem : ''}
				`}
			onClick={painter&&painter.redo}
		>
			<Tooltip title="redo" placement="bottom" >
				<Icon type="redo" />
			</Tooltip>
		</span>
	</Fragment>
}