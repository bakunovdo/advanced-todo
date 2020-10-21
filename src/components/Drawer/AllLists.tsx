import React from 'react';
import {NavLink} from "react-router-dom";

import {UnorderedListOutlined} from "@ant-design/icons/lib";
import {Menu} from "antd";

import {SListItem} from "./styled";

import {TList} from "types";

type Props = {
    lists: TList[]
    menuClass: any,
    sidebarValue: any,
    isCollapsed: boolean,
    setSidebarValue: (value: string) => void
}


export const AllLists: React.FC<Props> = (props) => {
    const {lists, sidebarValue, setSidebarValue, isCollapsed, menuClass} = props

    return (
        <Menu
            className={`${menuClass} drawer-allLists scrollable`}
            selectedKeys={[sidebarValue]}
            mode="inline"
            inlineCollapsed={isCollapsed}
            inlineIndent={12}
        >
            <Menu.ItemGroup>
                {lists?.map((list: TList) => {
                    return (
                        <Menu.Item key={list.id}
                                   icon={<UnorderedListOutlined/>}
                                   onClick={() => setSidebarValue(list.id)}
                        >
                            <NavLink to={list.id}>
                                <SListItem>
                                    {list.title}
                                </SListItem>
                            </NavLink>
                        </Menu.Item>
                    )
                })}
            </Menu.ItemGroup>
        </Menu>
    );
};


