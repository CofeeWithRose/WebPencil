import { WorkDetail, WorkInfo, LayerDetail, WorkLayers } from "./work-data"
import { RGBA } from "../pages/paint/top-tool-bar/tool-item/color-selector/rgba"
import { FileApi } from "./file.system"
import { createCanvas, copyCanvas } from "./canvas.util"
import { message } from "antd"
import React from 'react'
export type WorkDetailFile = Omit<LayerDetail, 'canvas'> & { filePath: string }
export type WorkInfoFile =  Omit<WorkInfo, 'thumbnail'>& {thumbnail: string}
export class WorkLayerFile {

    public workLayersId: string

    public workDetailFiles: WorkDetailFile[] = []

    constructor({workLayersId, layers}: WorkLayers ){
        this.workLayersId = workLayersId
        layers.forEach( ({canvas, layerId ,...rest}) => {
            this.workDetailFiles.push({ ...rest, layerId, filePath: `layers/${layerId}.png`})
        })
    }

}

export class WorkDetailDesFile {

    public workInfo: WorkInfoFile

    public content: WorkLayerFile

    constructor(workedetail: WorkDetail){
        const { workInfo,  contens} = workedetail
        const {thumbnail, ...restWorkInfo} = workInfo
        this.workInfo = {...restWorkInfo, thumbnail: `thumbnail/${workedetail.workInfo.workId}.png`}
        this.content = new WorkLayerFile(contens)
    }
}

FileApi.init({ permissionTip: (callback) => {
    return new Promise<void>(resolve => {
        const handleClick = async () => {
            try{
                await callback()
            }catch(e){
                console.error(e)
            }
            message.destroy()
            resolve()
        }
        message.info(<span onClick={handleClick}>获取文件读取权限</span>, 0)
    }) as any
   
}})

/**
 * 对作品的持久化存储操作的中间接口.
 * des: workinfo:
 *      content:  
 */
export default class WorkStorage {

    /**
     * 添加作品.
     * @param workedetail 
     */
    static async saveWork(workedetail: WorkDetail): Promise<void>{
        const desFileDate = new WorkDetailDesFile(workedetail)
        await FileApi.save({ 
            type: 'text', 
            path: `${workedetail.workInfo.workId}.json` , 
            data: JSON.stringify(desFileDate) 
        })
        const canvasFileList = this.getCanvasFileList(workedetail, desFileDate)
        for( let i = 0; i < canvasFileList.length; i++ ){
            const { path, canvas } = canvasFileList[i]
            const data = await this.getBlob(canvas)
            if(data){
                await FileApi.save({
                    type: 'blob',
                    path,
                    data,
                })
            }
           
        }
    }

    protected static  getCanvasFileList(workedetail: WorkDetail, desFileDate: WorkDetailDesFile ){
        const { contens: {layers}  } = workedetail
        const { content: { workDetailFiles } } = desFileDate
        const thumbnail = {
            path: desFileDate.workInfo.thumbnail,
            canvas: this.combimeCanvas(  100, 100 ,workedetail.contens.layers.map(({canvas}) => canvas ))
        }
        const canvasFileList: {path: string, canvas:HTMLCanvasElement}[] = [thumbnail] 
        layers.forEach( ({canvas}, index) => {
            canvasFileList.push({
                canvas,
                path: workDetailFiles[index].filePath
            })
        })
        return canvasFileList
    }

    protected static getBlob(canvas:HTMLCanvasElement){
        return new Promise<Blob| null>( resolve => {
            canvas.toBlob(resolve)
        })
    }

    protected  static combimeCanvas( width: number, height: number ,canvasList: HTMLCanvasElement[]){
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')
        if(ctx){
            canvasList.forEach( canvas => {
                ctx.drawImage(canvas, 0,0,canvas.width, canvas.height, 0,0 , width, height)
            })
        }
        return canvas
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
        const workInfoList: WorkInfo[] = []
        const names = await  FileApi.getFileNames('')
        for(let i = 0; i< names.length; i++){
          const file =  await FileApi.getFile(names[i])
          const text = await file.text()
          const {workInfo: { thumbnail, ...rest }}: WorkDetailDesFile = JSON.parse(text)
          const canvasFile = await FileApi.getFile(thumbnail)
          workInfoList.push({
               ...rest, 
               thumbnail: URL.createObjectURL(canvasFile)
            })
        }
        return workInfoList
    }

    protected static getCanvasByFile(canvasFile: File){
        return new Promise<HTMLCanvasElement>(resolve => {
            const img = new Image()
            img.onload= () => {
                img.onload = null
                resolve(copyCanvas(img))
            }
            img.src = URL.createObjectURL(canvasFile)
        })
    }

}

export {
    WorkInfo,
    WorkDetail,
    LayerDetail
}