import { RGBA } from "../tool-item/color-selector/rgba";
import { Brush } from "../tool-item/brush";

export class PCanvasContext {
    constructor(

        public curCanvas: HTMLCanvasElement,

        /**
         * 当前选中图层的context.
         */
        public curCanvasContext2D: CanvasRenderingContext2D,

        public brush: Brush = new Brush(),

        public color: string = RGBA.BLACK.toRGBAString(),

        public brushWidth: number = 100,

    ){}
}