import React, {useState} from 'react';

import {Input, message, Popconfirm, Typography} from "antd";
import {CloseCircleOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons/lib";
import {ListActions, SListTitle, STodoListHeader} from "./styled";

type Props = {
    listId: string | undefined,
    listTitle: string,
    deleteList: (listId: string) => void
    renameList: (listId: string, title: string) => boolean
}


export const TodoListHeader: React.FC<Props> = ({listId, listTitle, deleteList, renameList}) => {
    const [newListValue, setListValue] = useState(listTitle || "")
    const [editMode, setEditMode] = useState(false)

    const deleteListHandler = () => {
        if (listId) {
            deleteList(listId)
        }

    }

    const onEnableEditMode = () => {
        setListValue(listTitle || "")
        setEditMode(true)
    }

    const confirmTitle = async () => {
        if (listTitle !== newListValue && newListValue && listId) {
            const res = await renameList(listId, newListValue)
            if(!res) message.error("Rename list fail")
        }

        setEditMode(false)
    }

    return (
        <STodoListHeader>
            <SListTitle>
                {
                    editMode
                        ? (
                            <div>
                                <Input
                                    placeholder={"Your list title"}
                                    value={newListValue}
                                    onChange={(e) => setListValue(e.target.value)}
                                    onPressEnter={confirmTitle}
                                    onBlur={confirmTitle}
                                    autoFocus
                                />
                            </div>
                        )

                        : (
                            <Typography.Title>
                                {listTitle}
                            </Typography.Title>
                        )
                }
            </SListTitle>

            {
                listId && (
                    <ListActions>
                        {
                            editMode
                                ? <CloseCircleOutlined className={"editIcon"}/>
                                : <EditOutlined className={"editIcon"} onClick={onEnableEditMode}/>
                        }
                        <Popconfirm
                            placement="right"
                            title="Are you sure？"
                            onConfirm={deleteListHandler}
                            okText="Yes"
                            cancelText="No">
                            <DeleteOutlined className={"deleteIcon"}/>
                        </Popconfirm>
                    </ListActions>
                )
            }
        </STodoListHeader>


    );
};