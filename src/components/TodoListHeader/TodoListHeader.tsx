import React from 'react';
import styled from "styled-components";

import {Popconfirm, Typography} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons/lib";

const SListTitle = styled.div`
  width: 100%;
  padding-left: 30px;
  h1 {
    margin-bottom: 0;
  }
`

const ListActions = styled.div`
  display:flex;
  cursor: pointer;
  right: 0;
  color: #a5a5a5;
  font-size: 18px;
  
  & > span {
    margin-right: 20px;
  }
`

const STodoListHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  
`

type Props = {
    listId: string | undefined,
    listTitle: string,
    deleteList: (listId: string) => void
}


export const TodoListHeader: React.FC<Props> = ({listId, listTitle, deleteList}) => {

    const deleteListHandler = () => {
        if (listId) {
            deleteList(listId)
        }

    }

    return (
        <STodoListHeader>
            <SListTitle>
                <Typography.Title>
                    {listTitle}
                </Typography.Title>
            </SListTitle>
            {
                listId && (
                    <ListActions>
                        <EditOutlined className={"editIcon"}/>
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