import React from 'react';
import {SButton, SSidebarFooter} from "./styled";
import {Tooltip} from "antd";
import {DeleteOutlined, MenuUnfoldOutlined} from "@ant-design/icons/lib";

type Props = {
    closeHandler: () => void
}

export const SidebarFooter: React.FC<Props> = (props) => {
    return (
        <SSidebarFooter>
            <Tooltip title="Hide detailed view" mouseLeaveDelay={0} color={"white"}>
                <SButton onClick={props.closeHandler}>
                    <MenuUnfoldOutlined/>
                </SButton>
            </Tooltip>

            <Tooltip title="Delete task" mouseLeaveDelay={0} color={"white"} placement="topRight">
                <SButton>
                    <DeleteOutlined/>
                </SButton>
            </Tooltip>
        </SSidebarFooter>
    );
};


