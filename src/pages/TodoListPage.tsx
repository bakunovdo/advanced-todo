import React, {useCallback} from 'react';
import {ConnectedProps} from "react-redux";
import {Redirect} from 'react-router-dom';
import styled from "styled-components"

import {Divider, List} from "antd";

import {connectorTodoListPage} from "containers/TodoListPageContainer";
import {TodoSidebarContainer} from "containers/TodoSidebarContainer";
import {AppDrawerContainer} from "containers/AppDrawerContainer";

import {TodoListHeader} from "components/TodoListHeader/TodoListHeader";
import {AppContent} from "components/Conent/AppContent";
import {TodoForm} from "components/TodoForm/TodoForm";
import {TodoListItem} from "components/TodoListItem/TodoListItem";

import {filteringTodos, getList, getTitle} from "utils";

import {RouteComponentProps} from "types/reactRouter";
import {TTodo} from "types";


const STodoMain = styled.main`
  padding: 20px;
  flex: 1 1 0;
  overflow: hidden;
  min-width: 600px;
`

const STodoList = styled.div`
  margin-top: 20px;
  flex: 1;
`

type Props = RouteComponentProps<{ listId: string }> & ConnectedProps<typeof connectorTodoListPage>

export const TodoListPage: React.FC<Props> = (props) => {
    const {match: {params, path}, lists, todos, isAuth} = props

    const [showSidebar, setShowSidebar] = React.useState(true)

    const closeSidebar = useCallback(() => setShowSidebar(false), [])

    const listTitle = getTitle(lists, path, params.listId)
    const filTodos = filteringTodos(todos, path, params.listId)
    const list = getList(lists, params.listId)

    const addTodo = (title: string) => {
        props.addTodo({
            title: title,
            userId: props.userId,
            listId: list?.id || ""
        })
    }

    if (!isAuth) return <Redirect to="/login"/>


    return (
        <React.Fragment>
            <AppDrawerContainer/>
            <AppContent>
                <STodoMain>
                    <TodoListHeader listId={list?.id} listTitle={listTitle} deleteList={props.deleteList}/>
                    <Divider/>
                    <TodoForm addTodo={addTodo}/>
                    <STodoList>
                        <List
                            size={"default"}
                            locale={{
                                emptyText: "There's nothing to do :("
                            }}
                            dataSource={filTodos}
                            renderItem={(todo: TTodo) => (
                                <TodoListItem
                                    todo={todo}
                                    moveTodo={props.moveTodo}
                                    deleteTodo={() => props.deleteTodo(todo.id)}
                                    toggleTodo={() => props.toggleTodo(todo.id, !todo.completed)}
                                    toggleImportant={() => props.toggleImportant(todo.id, !todo.important)}
                                    openSidebarHandler={() => setShowSidebar(true)}
                                    selectTodo={() => props.selectTodo(todo.id)}
                                    lists={lists}
                                />
                            )}
                            pagination={{
                                hideOnSinglePage: true,
                                position: 'bottom',
                                pageSize: 8
                            }}
                        />
                    </STodoList>
                </STodoMain>
                <TodoSidebarContainer showSidebar={showSidebar} closeHandler={closeSidebar}/>
            </AppContent>
        </React.Fragment>
    );
};