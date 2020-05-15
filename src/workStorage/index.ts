import { uniqueId } from 'lodash'
import { RGBA } from '../pages/paint/top-tool-bar/tool-item/color-selector/rgba';
import { createCanvas } from './canvas.util';

// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
    
// }
// console.log('requestFileSystem: ', (window as any).requestFileSystem);
/**
 * 作品的描述信息.
 */
export class WorkInfo {

    constructor(
        public width: number,
        public height: number,
        public name: string = '', 
        public thumbnail: HTMLCanvasElement|null= null,
        public createTime: number = Date.now(),
        public updateTime: number = Date.now(),
        public readonly workId = uniqueId(`work_${Date.now()}_`),
    ){}
}

/**
 * 作品的全部信息.
 */
export class WorkDetail {

    constructor(
        public workInfo: WorkInfo,
        public contens: WorkLayers, 
    ){}

      /**
     * 
     * @param width 
     * @param height 
     * @param background 
     */
    static createEmpty(width: number, height: number, background: RGBA){
        const workInfo = new WorkInfo(width,height,'new work', createCanvas(width,height, background))
        const layer = new  WorkLayers();
        WorkLayers.addLayer(layer, workInfo, LayerDetail.create(workInfo, RGBA.WHITE))
        WorkLayers.addLayer(layer, workInfo, LayerDetail.create(workInfo, undefined, LayerDetailType.TEMP_COVER ))
        return new WorkDetail(workInfo,layer)
    }
}

export enum  LayerDetailType{

    TEMP_COVER= 1,
    
    NORMAL = 2,
}

/**
 * 作品的图层信息.
 */
export class LayerDetail {
    
    constructor(
        public canvas: HTMLCanvasElement,

        public type: LayerDetailType = LayerDetailType.NORMAL,

        public name = 'new layer',

        public visible: boolean = true,

        public readonly layerId = uniqueId(`layer-${Date.now()}-`)

    ){}

    static create({width, height}: Pick<WorkInfo, 'width'| 'height'>, color?: RGBA, type?: LayerDetailType){
        const canvas = createCanvas(width, height, color)
        const layer = new LayerDetail(canvas, type)
        canvas.setAttribute('layerId', layer.layerId)
        return layer
    }

}

/**
 * 图层信息.
 */
export class WorkLayers {
    
    constructor(
        public readonly workLayersId = uniqueId(`worklayer-${Date.now()}-`),
    ){}

    public layers: LayerDetail[] =[]

    
    static addLayer(workLayers: WorkLayers, {width, height}: WorkInfo, layerDetail?: LayerDetail, ){
        if(!layerDetail){
            layerDetail = new LayerDetail(createCanvas(width, height))
        }
        workLayers.layers.unshift(layerDetail)
    }

}

/**
 * 对作品的持久化存储操作的中间接口.
 * 
 * 
 * 方案1：fileSystem api 进行本地存储.
 * 
 * 方案2： github api 存储于 github. 
 */
export default class WorkStorage {

    /**
     * 添加作品.
     * @param workedetail 
     */
    static async addWork(workedetail: WorkDetail): Promise<void>{
        //TODO  Implement.
    }

    /**
     * 删除作品.
     * @param workId 
     */
    static async removeWork(workId: string): Promise<void> {
        //TODO  Implement.
    }

    /**
     * 更新作品的描述信息.
     * @param workInfo 
     */
    static async updateWorkInfo(workInfo: WorkInfo): Promise<void>{
         //TODO  Implement.
    }

    /**
     * 更新作品的内容, 此时会自动更新 WorkInfo 的 updateTime.
     */
    static async batchUpdateLayerDetail(workId: string, layerdetails:LayerDetail[]): Promise<void> {
         //TODO  Implement.
    }

    /**
     * 根据作品id获取指定作品的所有信息.
     * 
     * @param workId 作品ID.
     */
    static async getWorkDetail(workId: string): Promise<WorkDetail>{
        //TODO  Implement.
        // const workInfo = new WorkInfo(2048, 2048);
        return WorkDetail.createEmpty(screen.width, screen.height, RGBA.WHITE)
    }

    /**
     * 获取作品描述信息列表.
     */
    static async getWorkList(): Promise<WorkInfo[]>{
        //TODO  Implement.
        return []
     }
}
