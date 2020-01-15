import { EventEmiter } from '../../../../../util/event'
import { RecorderStates, RecorderListenerMap, OperateRecord, OPERATE_TYPE, OperateData } from './inerface'



export default class CanvasRecoder {

	static copyCanvas(canvas: HTMLCanvasElement):HTMLCanvasElement{
		const newCanvas = document.createElement('canvas')
		newCanvas.width = canvas.width
		newCanvas.height = canvas.height
		const ctx = canvas.getContext('2d')
		if(!ctx){
			throw 'fail to get context'
		}
		ctx.drawImage(canvas, 0, 0)
		return newCanvas
	}

	constructor(protected canvases: HTMLCanvasElement[]) {
		const operates = canvases.map( canvas => new OperateRecord(OPERATE_TYPE.ADD_LAYER, CanvasRecoder.copyCanvas(canvas)))
		this.record(operates)
	}

  public recodState: RecorderStates = RecorderStates.NONE

  protected eventEmiter = new EventEmiter<RecorderListenerMap>()

  protected operateRecord: OperateRecord<OPERATE_TYPE>[][] = []

	protected curOperateIndex: number = 0
	
	protected curCanvases: HTMLCanvasElement[] = []

  protected computState = () => {
  	let changedState: RecorderStates | null= null
  	const maxHisInd = this.operateRecord.length - 1
  	const backNum = this.curOperateIndex
  	const forwardNum = maxHisInd - this.curOperateIndex
  	if(backNum && forwardNum){
  		changedState = RecorderStates.BOTH
  	}
  	if(backNum && !forwardNum){
  		changedState = RecorderStates.CAN_UNDO
  	}
  	if(!backNum && forwardNum){
  		changedState = RecorderStates.CAN_FORWARD
  	}
  	if(!backNum && !forwardNum){
  		changedState = RecorderStates.NONE
  	}
    
  	if(changedState){
  		this.eventEmiter.emit('stateChange', changedState, this.recodState)
  		this.recodState = <RecorderStates>changedState
  	}
  
  }

  public record(operates: OperateRecord<OPERATE_TYPE>[]){
  	if(this.curOperateIndex !== this.operateRecord.length -1){
  		this.operateRecord.splice( this.curOperateIndex )
  	}
  	this.curOperateIndex = this.operateRecord.length -1
  	this.computState()
  	this.updateCurCanvases(operates, true)
  }
	
  protected updateCurCanvases(operates: OperateRecord<OPERATE_TYPE>[], save?: boolean){
  	const ops:OperateRecord<OPERATE_TYPE>[]  = []
  	operates.forEach( operate => {
  		if(operate.type === OPERATE_TYPE.ADD_LAYER){
  			const c = (operate.data) as OperateData[OPERATE_TYPE.ADD_LAYER]
  			this.curCanvases.push(CanvasRecoder.copyCanvas(c))
  			ops.push(operate)
  		}
  		if(operate.type === OPERATE_TYPE.MODIFY_CANVAS){
  			const {layer, canvas } = operate.data as OperateData[OPERATE_TYPE.MODIFY_CANVAS]
  			this.curCanvases[layer] = CanvasRecoder.copyCanvas(canvas)
  			ops.push(operate)
  		}
  		if(operate.type === OPERATE_TYPE.MOVE_LAYER){
  			const {from, to} = operate.data as OperateData[OPERATE_TYPE.MOVE_LAYER]
  			const arr1 = this.curCanvases.slice(0, from)
  			const arr2 = this.curCanvases.slice(from+1, to)
  			const arr3 = this.curCanvases.slice(to)
  			this.curCanvases = arr1.concat(arr2.concat(arr3))
  			ops.push(operate)
  		}
  		if(operate.type === OPERATE_TYPE.ROMOVE_LAYER){
  			const {layer} = operate.data as OperateData[OPERATE_TYPE.ROMOVE_LAYER]
  			const [delCanvas] =	this.curCanvases.splice(layer, 1)
  			ops.push(new OperateRecord(OPERATE_TYPE.ROMOVE_LAYER, {layer, canvas: delCanvas} ))
  		}
  	})
  	save && this.operateRecord.push(ops)
  }

  public undo(): HTMLCanvasElement[]{
  	if(this.recodState === RecorderStates.BOTH || this.recodState === RecorderStates.CAN_UNDO){
  		--this.curOperateIndex
  		this.computState()
  		const lastOperates = this.operateRecord[this.curOperateIndex+1]
  		for(let i = lastOperates.length -1; i>=0; i--){
  			const op = lastOperates[i]
  			if(op.type === OPERATE_TYPE.ADD_LAYER){
  				const canvas = op.data as OperateData[OPERATE_TYPE.ADD_LAYER]
  				this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.ROMOVE_LAYER, {layer: this.curCanvases.length -1}) ])
  			}
  			if(op.type === OPERATE_TYPE.MODIFY_CANVAS){
  				const canvas = op.data as OperateData[OPERATE_TYPE.MODIFY_CANVAS]
  				this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.MODIFY_CANVAS, canvas )])
  			}
  			if(op.type === OPERATE_TYPE.MOVE_LAYER){
  				const { from, to } = op.data as OperateData[OPERATE_TYPE.MOVE_LAYER]
  				this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.MOVE_LAYER, {from : to, to: from})])
  			}
  			if(op.type === OPERATE_TYPE.ROMOVE_LAYER){
  				const { layer, canvas } = op.data as OperateData[OPERATE_TYPE.ROMOVE_LAYER]
  				if(canvas){
  					this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.ADD_LAYER, canvas)])
  					this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.MOVE_LAYER, {from: this.curCanvases.length-1, to: layer})])
  				}
  			}
  		}
  		return this,this.curCanvases
  	}
  	return []
  }

  public forwrard(): HTMLCanvasElement[]{
  	if(this.recodState === RecorderStates.BOTH || this.recodState === RecorderStates.CAN_FORWARD){
  		++this.curOperateIndex
  		this.computState()
  		this.updateCurCanvases(this.operateRecord[this.curOperateIndex -1])
  	}
  	return this.curCanvases
  }
	


  public addEventListener<T extends keyof RecorderListenerMap>(type: T, fun: RecorderListenerMap[T]) {
  	this.eventEmiter.addEventLister(type, fun)
  }

  public removeEventListener<T extends keyof RecorderListenerMap>(type: T, fun: RecorderListenerMap[T]) {
  	this.eventEmiter.removeEventLister(type, fun)
  }

}