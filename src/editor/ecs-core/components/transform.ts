import { AbstractComponent } from 'ecs-ge'
import { EventEmitter } from 'events'

export interface Transform2DEventMap {

    positionChange: (...position: Parameters<Transform2D['setPosition']>) => void

    rotationChange: (...rotation: Parameters<Transform2D['setRotation']>) => void

    scaleChange: (...scale: Parameters<Transform2D['setScale']>) => void

}
type EmitFun = <E extends keyof Transform2DEventMap>(name:E, ...params: Parameters<Transform2DEventMap[E]>) => void

type Register = <E extends keyof Transform2DEventMap>(name:E, listener: Transform2DEventMap[E]) => void

export class Transform2D extends AbstractComponent {

    /**
     * world position.
     */
    public position: [ number, number ] = [ 0, 0 ]

    /**
     * position relative to parent.
     */
    public relativePosition: [number, number] = [ 0, 0 ]

    /**
     * rotation in degree, 0~360.
     */
    public rotation: number = 0

    private emitter = new EventEmitter()

    /**
     * scale -1 ~ 1.
     */
    public scale:[ number, number ] = [ 1, 1 ]

    protected emit: EmitFun = this.emitter.emit.bind(this.emitter)

    on: Register = this.emitter.on.bind(this.emitter)

    off: Register = this.emitter.off.bind(this.emitter)

    setPosition(x: number, y: number) {
    	this.emit('positionChange', x, y)
    	this.position[0] = x
    	this.position[1] = y
    }

    setRotation(rotation: number) {
    	this.emit('rotationChange', rotation)
    	this.rotation = rotation
    }

    setScale(x: number, y: number) {
    	this.emit('scaleChange', x, y)
    	this.scale[0] = x
    	this.scale[1] = y
    }


}