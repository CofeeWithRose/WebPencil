import { RGBA } from "../top-tool-bar/tool-item/color-selector/rgba";
import { Brush } from "../top-tool-bar/tool-item/brush";

export class PCanvasContext {

    constructor(

        public curCanvas: HTMLCanvasElement,

        /**
         * 当前选中图层的context.
         */
        public curCanvasContext2D: CanvasRenderingContext2D,
        
        public width: number,

        public height: number,

        public brush: Brush = new Brush(),

        public color: string = RGBA.BLACK.toRGBAString(),

        public brushWidth: number = 100,


    ){}
}