import { PainterTooolProps } from '../../toolbar'
import React,{ Fragment, useContext, useEffect, useState, useRef } from 'react'
import { PaintContext } from '../../..'
import { RecorderStates } from '../../pannel/recorder/inerface'
import styles from '../index.less'

export default function Recoder({ onSelectTool, onActiveTool, curState }: PainterTooolProps){
	const {painter} = useContext(PaintContext)
	const [ recorderState, setRecorderState ] = useState()
	useEffect(() => {
		if(painter){
			painter.addEventListener('stateChange', setRecorderState)
			return () => painter.removeEventListener('stateChange', setRecorderState)
		}
	},[painter])
  
	const undo = () => {
		if(painter){
			painter.undo()
		}
	}
  
	const forward = () => {
		if(painter){
			painter.forward()
		}
	}

	return <Fragment>
		<span className={`
      ${styles.tooBarItem} 
      ${ recorderState ===RecorderStates.BOTH|| RecorderStates.CAN_UNDO === recorderState? styles.tooBarActiveItem:''}
      `} 
		onClick={undo}
		>
      undo
		</span>
		<span className={`
    ${styles.tooBarItem} 
    ${recorderState ===RecorderStates.BOTH|| RecorderStates.CAN_FORWARD === recorderState? styles.tooBarActiveItem:''}
    `}
		onClick={forward}
		>
      forward
		</span>
	</Fragment>
}