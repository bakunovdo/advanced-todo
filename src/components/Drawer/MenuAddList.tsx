import React from 'react';

import {PlusOutlined} from "@ant-design/icons/lib";
import {Input} from "antd";

import {SMenuAddList} from "./styled";
import classNames from "classnames";

type Props = {
    inputHover: any,
    isAddListVisible: boolean,
    isCollapsed: boolean,
    setCollapsed: (value: boolean) => void,
    setAddListVisible: (value: boolean) => void,
    requestAddList: (userId: string, title: string) => void,
    userId: string | undefined

}


export const MenuAddList: React.FC<Props> = (props) => {
    const {inputHover, isCollapsed, setCollapsed, setAddListVisible, userId, isAddListVisible, requestAddList} = props

    const [openListFromCollapse, setOpenListFromCollapse] = React.useState(false)
    const [newListTitle, setNewListTitle] = React.useState('')

    const addListHandler = () => {
        if (isCollapsed) {
            setCollapsed(false)
            setOpenListFromCollapse(true)
        }
        setAddListVisible(true)
    }

    const onBlurAddListHandler = () => {
        if (openListFromCollapse) setCollapsed(true)
        setOpenListFromCollapse(false)
        setAddListVisible(false)
    }

    const createListHandler = () => {
        if (newListTitle.length > 0 && userId) {
            requestAddList(userId, newListTitle)
            setNewListTitle("")
        }
        setAddListVisible(false)
    }

    const addListClx = classNames({
        collapsed: isCollapsed
    })

    return (
        <SMenuAddList className={`${inputHover} ${addListClx}`} onClick={addListHandler}>
            {
                isAddListVisible
                    ? <Input
                        autoFocus
                        placeholder="Create a list"
                        onBlur={onBlurAddListHandler}
                        onChange={e => setNewListTitle(e.target.value)}
                        onPressEnter={createListHandler}
                    />
                    : (
                        <React.Fragment>
                            <PlusOutlined/>
                            <p>Create a list</p>
                        </React.Fragment>
                    )
            }
        </SMenuAddList>
    );
};