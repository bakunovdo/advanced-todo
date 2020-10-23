import React from 'react';

import {
    DeleteOutlined,
    ExclamationCircleOutlined,
    HomeOutlined,
    RightCircleOutlined,
    StarOutlined,
    StarTwoTone
} from "@ant-design/icons/lib";
import {Button, Checkbox, Dropdown, List, Menu, message, Modal, Popconfirm, Typography} from 'antd';

import {StarButton, TodoListItemStyled} from "./styled";

import {TList, TTodo} from "types";
import {MiniNote, MiniSteps} from "./TodoMiniData";

import SubMenu from "antd/es/menu/SubMenu";

type IProps = {
    todo: TTodo,
    moveTodo: (listId: string, todoId: string) => boolean
    deleteTodo: () => void,
    toggleTodo: () => void,
    toggleImportant: () => void,
    openSidebarHandler: () => void
    selectTodo: () => void,
    lists: TList[]
}


export const TodoListItem: React.FC<IProps> = React.memo((props) => {
    const {
        todo,
        moveTodo,
        deleteTodo,
        toggleTodo,
        toggleImportant,
        openSidebarHandler,
        selectTodo,
        lists
    } = props


    const clickHandler = () => {
        openSidebarHandler()
        selectTodo()
    }

    const totalSteps = todo.steps.length
    const completedSteps = todo.steps.reduce((acc, step) => step.completed ? acc + 1 : acc, 0)

    const todoInfo = []

    if (todo.steps && todo.steps.length) {
        todoInfo.push(<MiniSteps totalSteps={totalSteps} completedSteps={completedSteps}/>)
    }

    if (todo.note && todo.note.length) {
        todoInfo.push(<MiniNote/>)
    }

    const moveTodoHandler = async (todoId: string, listId: string) => {
        const res = moveTodo(todoId, listId)
        if (res) {
            message.success("Todo moved success")
        } else message.error("Todo moved fail")
    }

    function showConfirmDelete() {
        Modal.confirm({
            title: 'Do you want delete todo?',
            icon: <ExclamationCircleOutlined/>,
            content: '',
            onOk() {
                deleteTodo()
            },
            onCancel() {

            },
        });
    }

    const ContextMenu = (
        <Menu>
            {/*<Menu.Item key={`Rename ${todo.id}`} icon={<EditOutlined/>}>*/}
            {/*    Rename*/}
            {/*</Menu.Item>*/}
            <SubMenu icon={<RightCircleOutlined/>} title="Move to list">
                <Menu.Item key={`Home ${todo.id}`}
                           icon={<HomeOutlined/>}
                           disabled={todo.listId === ""}
                           onClick={() => moveTodoHandler(todo.id, "")}
                >
                    Home
                </Menu.Item>
                <Menu.Divider/>
                {lists.map((list) => (
                    <Menu.Item key={`${list.id} ${todo.id}`}
                               onClick={() => moveTodoHandler(todo.id, list.id)}
                               disabled={todo.listId === list.id}
                    >
                        {list.title}
                    </Menu.Item>
                ))}
            </SubMenu>

            <Menu.Divider/>
            <Menu.Item key={`Delete ${todo.id}`}
                       onClick={showConfirmDelete}
                       icon={<DeleteOutlined/>}
                       danger>
                Delete task
            </Menu.Item>
        </Menu>
    );

    return (
        <TodoListItemStyled onClick={clickHandler}>
            <Dropdown key={`${todo.id}`} overlay={ContextMenu} trigger={['contextMenu']}>
                <List.Item
                    actions={[...todoInfo,
                        <StarButton onClick={toggleImportant}>
                            {!todo.important ? <StarOutlined/> : <StarTwoTone/>}
                        </StarButton>,

                        <Popconfirm
                            title="Are you sure you want to delete?"
                            onConfirm={deleteTodo}
                        >
                            <Button shape="circle" size="middle" type="primary" danger>
                                <DeleteOutlined/>
                            </Button>
                        </Popconfirm>,
                    ]}
                >
                    <div>
                        <Checkbox checked={todo.completed} onChange={toggleTodo}/>
                        <div>
                            <div>
                                <Typography.Text delete={todo.completed}>
                                    {todo.title}
                                </Typography.Text>
                            </div>
                        </div>
                    </div>
                </List.Item>
            </Dropdown>
        </TodoListItemStyled>
    );
});