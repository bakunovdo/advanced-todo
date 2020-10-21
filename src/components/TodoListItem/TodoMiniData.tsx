import React from 'react';
import {STodoMiniData} from "./styled";
import {CheckOutlined, CopyOutlined} from "@ant-design/icons/lib";

type StepsProps = {
    totalSteps: number,
    completedSteps: number
}


export const MiniSteps: React.FC<StepsProps> = ({totalSteps, completedSteps}) => {
    return (
        <React.Fragment>
            <STodoMiniData backColor={"#ecc7ff"}>
                {totalSteps === completedSteps ? <CheckOutlined/> : null}
                <span>{`${completedSteps} of ${totalSteps}`}</span>
            </STodoMiniData>
        </React.Fragment>
    );
};

export const MiniNote: React.FC = () => {
    return (
        <React.Fragment>
            <STodoMiniData backColor={"#a1d8cb"}>
                <CopyOutlined/>
                <span>Note</span>
            </STodoMiniData>
        </React.Fragment>
    );
};