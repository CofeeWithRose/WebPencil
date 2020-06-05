import { uniqueId } from 'lodash'
import { RGBA } from '../pages/paint/top-tool-bar/tool-item/color-selector/rgba';
import { createCanvas, emptyUrl } from '../util/canvas';

// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
    
// }
// console.log('requestFileSystem: ', (window as any).requestFileSystem);
/**
 * 作品的描述信息.
 */
export class WorkInfo<T=string> {

    constructor(
        public width: number,
        public height: number,
        public name: string = '', 
        public thumbnail: T,
        public createTime: number = Date.now(),
        public updateTime: number = Date.now(),
        public readonly workId = uniqueId(`work_${Date.now()}_`),
    ){}
}

/**
 * 作品的全部信息.
 */
export class WorkDetail<T=HTMLCanvasElement> {

    constructor(
        public workInfo: WorkInfo,
        public contens: WorkLayers<T>, 
    ){}

      /**
     * 
     * @param width 
     * @param height 
     * @param background 
     */
    static createEmpty(width: number, height: number, background: RGBA){
        const workInfo = new WorkInfo(width,height,'new work', emptyUrl() )
        const layer = new  WorkLayers();
        layer.layers.push(LayerDetail.create(workInfo, RGBA.WHITE))
        return new WorkDetail(workInfo,layer)
    }
}

// export enum  LayerDetailType{

//     TEMP_COVER= 1,
    
//     NORMAL = 2,
// }

/**
 * 作品的图层信息.
 */
export class LayerDetail<T=HTMLCanvasElement> {
    
    constructor(
        public canvas: T,

        public name = 'new layer',

        public visible: boolean = true,

        public readonly layerId = uniqueId(`layer-${Date.now()}-`)

    ){}

    static create({width, height}: Pick<WorkInfo, 'width'| 'height'>, color?: RGBA){
        const canvas = createCanvas(width, height, color)
        const layer = new LayerDetail(canvas)
        canvas.setAttribute('layerId', layer.layerId)
        return layer
    }

}

/**
 * 图层信息.
 */
export class WorkLayers<T=HTMLCanvasElement> {
    
    constructor(
        public readonly workLayersId = uniqueId(`worklayer-${Date.now()}-`),
    ){}

    public layers: LayerDetail<T>[] =[]


}
