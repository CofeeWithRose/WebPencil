import React, { Fragment, useState } from 'react'
import localStyle from './index.less'
import { Slider } from "antd";
import style from '../index.less'
import { debounce } from 'lodash'
import pencilPen from '../../pannel/pens/pen.pencil'
import { OnSelectTool } from '../../pannel/painter/interface';
import { ToolTypes } from '../../pannel/painter/interface'
import { PainterTooolProps } from '../../toolbar';

const handleWidthChange = debounce((val:number, onSelectTool:OnSelectTool) => {
    onSelectTool(ToolTypes.WIDTH, val)
},200)

export default ({ onSelectTool, onActiveTool, curState }: PainterTooolProps) => {

    const [isShowWidth, setIsShowWidth] = useState(false)
    const [lineWidth, setLineWidth] = useState(10)

    const handleClick = () => {
        if (curState === ToolTypes.PENCIL) {
            setIsShowWidth( isShowWidth => !isShowWidth)
        }
        onActiveTool(ToolTypes.PENCIL)
        onSelectTool(ToolTypes.PENCIL, pencilPen)
        onSelectTool(ToolTypes.WIDTH, lineWidth)
        
    }

    const onSliderChange = (val: number) => {
        setLineWidth(val)
        handleWidthChange(val, onSelectTool)
    }

    return <Fragment>
        <span
             className={
                `${localStyle.pencilWrap}
                ${style.tooBarItem }
                ${curState === ToolTypes.PENCIL ? style.tooBarActiveItem : ''}`
            }   
            onClick={handleClick}
        >
            pencil
        </span>
        <Slider
            value={lineWidth}
            min={1}
            max={100}
            className={`${localStyle.slider} ${
                isShowWidth &&
                curState === ToolTypes.PENCIL ? '' : localStyle.hideSlider}`}
            onChange={onSliderChange }
        />
    </Fragment>

}
