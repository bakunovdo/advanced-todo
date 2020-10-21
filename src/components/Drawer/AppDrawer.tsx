import React from 'react';
import classNames from "classnames"

import {NavLink} from 'react-router-dom'
import {ConnectedProps} from "react-redux";

import {CalendarOutlined, HomeOutlined, MenuOutlined, StarOutlined,} from '@ant-design/icons';


import {connectorAppDrawer} from "containers/AppDrawerContainer";

import {AppDrawerStyled, SFooterDrawer} from "./styled";
import {AllLists} from "./AllLists";
import {Button, Menu} from 'antd';


import {calcSidebarValue} from "utils";

import {RouteComponentProps} from "types/reactRouter";
import {MenuAddList} from "./MenuAddList";


export type Props = ConnectedProps<typeof connectorAppDrawer> & RouteComponentProps<any>

const topMenu = [
    {title: "Home", to: "/", icon: <HomeOutlined/>},
    {title: "Important", to: "/important", icon: <StarOutlined/>},
    {title: "Planned", to: "/planned", icon: <CalendarOutlined/>}
]

export const AppDrawer: React.FC<Props> = (props) => {
    const {requestAddList, userId, lists, match} = props

    const [sidebarValue, setSidebarValue] = React.useState(calcSidebarValue(lists, match.url))
    const [isCollapsed, setCollapsed] = React.useState(false)
    const [isAddListVisible, setAddListVisible] = React.useState(false)

    const menuClass = classNames({
        defaultMenu: true,
        CollapseMenu: isCollapsed,
        NonCollapseMenu: !isCollapsed
    })
    const buttonClass = classNames({
        baseStyles: true,
    })

    const inputHover = classNames({
        hoverOn: !isAddListVisible,
        hideText: isCollapsed
    })


    const toggleCollapsed = () => {
        setCollapsed(!isCollapsed)
    }

    return (
        <AppDrawerStyled>
            <Button onClick={toggleCollapsed} className={buttonClass} size="small">
                <MenuOutlined/>
            </Button>
            <Menu
                className={menuClass}
                selectedKeys={[sidebarValue]}
                mode="inline"
                inlineCollapsed={isCollapsed}
                inlineIndent={12}
            >
                <Menu.ItemGroup>
                    {topMenu.map((item) => (
                        <Menu.Item key={item.title}
                                   icon={item.icon}
                                   onClick={() => setSidebarValue(item.title)}>
                            <NavLink to={item.to}>
                                {item.title}
                            </NavLink>
                        </Menu.Item>

                    ))}
                </Menu.ItemGroup>
            </Menu>

            <div className={"divider"}/>

            <MenuAddList
                userId={userId}
                inputHover={inputHover}
                setAddListVisible={setAddListVisible}
                isAddListVisible={isAddListVisible}
                setCollapsed={setCollapsed}
                isCollapsed={isCollapsed}
                requestAddList={requestAddList}
            />

            <div className={"divider"}/>

            <AllLists
                isCollapsed={isCollapsed}
                lists={lists}
                menuClass={menuClass}
                setSidebarValue={setSidebarValue}
                sidebarValue={sidebarValue}
            />

            <SFooterDrawer />
        </AppDrawerStyled>
    );
};