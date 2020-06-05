import { EventEmitter } from 'events'
import { CanvasEvent } from '../pages/paint/pcanvas'

export class PCanvasPlugin {

    init(
        trigger: <T>(eventName: string, event: CanvasEvent<T>) => void,
        on: (pluginName: string, eventName: string, listenter: <T>(event: CanvasEvent<T>)=> void ) => void , 
        off: (pluginName: string, eventName: string, listenter: <T>(event: CanvasEvent<T>)=> void ) => void , 
    ){

    }
}

export class PluginRoom {
    
    protected eventEmiter = new EventEmitter()

    // protected plugins: { [name:string]: PCanvasPlugin} = {}

    protected emit<T>(pluginName:string, eventName: string, event: CanvasEvent<T>){
        this.eventEmiter.emit(`${pluginName}_${eventName}`, event)
    }

    protected on<T>(pluginName: string, eventName: string, listenter: (event: CanvasEvent<T>)=> void){
        this.eventEmiter.on(`${pluginName}_${eventName}`, listenter)
    }

    protected off<T>(pluginName: string, eventName: string, listenter: (event: CanvasEvent<T>)=> void){
        this.eventEmiter.off(`${pluginName}_${eventName}`, listenter)
    }

    use<T>(pluginName: string, plugin: PCanvasPlugin){
        const on = (pluginName: string, eventName: string, listenter: (event: CanvasEvent<T>)=> void ) =>  {
            this.on(pluginName,eventName, listenter)
        }
        const trigger = <T>(eventName: string, event: CanvasEvent<T>) => {
           this.emit(pluginName,eventName,event)
        }

        const off = (pluginName: string, eventName: string, listenter: (event: CanvasEvent<T>)=> void) => {
            this.off(pluginName, eventName, listenter)
        }
        plugin.init( trigger, on, off )
        // this.plugins[pluginName] = plugin
    }

    active(){
        this.on = () => {
            throw 'Please use plugin before active'
        }
        // const pluginNames = Object.keys(this.plugins)
        this.emit('pluginroom', 'active', new CanvasEvent(null))
    }

}