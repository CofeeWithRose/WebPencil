import { PainterTooolProps } from '../../toolbar'
import React, { Fragment, useContext, useEffect, useState, useRef } from 'react'
import { PaintContext } from '../../..'
import { RecorderStates } from '../../pannel/recorder/inerface'
import styles from '../index.less'

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
				${ recorderState === RecorderStates.BOTH || RecorderStates.CAN_UNDO === recorderState ? styles.tooBarActiveItem : ''}
      		`}
			onClick={painter&&painter.undo}
		>
			undo
		</span>
		<span 
			className={`
					${styles.tooBarItem} 
					${recorderState === RecorderStates.BOTH || RecorderStates.CAN_REDO === recorderState ? styles.tooBarActiveItem : ''}
				`}
			onClick={painter&&painter.redo}
		>
			redo
		</span>
	</Fragment>
}