import ColorPicker from './color-picker'

export interface MainPannelPluginNames {

    color_picker: ColorPicker


}

export interface MainPannelPlugin {
    readonly name: keyof MainPannelPluginNames
    init():void
    destory(): void;
}

export interface MainPannel {

    use(plugin: MainPannelPlugin): void



}