import React from 'react';

import {Checkbox, Tooltip} from "antd";
import {CloseOutlined} from "@ant-design/icons/lib";

import {SStep} from "./styled";

import {TStep} from "types";

type Props = Partial<TStep> & {
    deleteStep: () => void
    toggleStep: () => void
}

export const StepItem: React.FC<Props> = ({title, toggleStep, deleteStep, completed}) => {
    return (
        <SStep>
            <div className="step-checkbox">
                <Checkbox onClick={toggleStep} checked={completed}/>
            </div>

            <span className="step-text">
                <input type="text" defaultValue={title}/>
            </span>

            <div className="step-deleteIcon" onClick={deleteStep}>
                <Tooltip title="Delete step" color={"white"} placement="left">
                    <CloseOutlined/>
                </Tooltip>
            </div>
        </SStep>
    )
}