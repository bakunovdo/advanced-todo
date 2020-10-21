import {connect} from 'react-redux';

import {
    addTodoRequest,
    deleteTodoRequest,
    moveTodoRequest,
    toggleImportantRequest,
    toggleTodoRequest
} from "store/features/todos/thunks";

import {deleteListRequest, renameListRequest} from "store/features/lists/thunks";

import {TodoListPage} from "pages/TodoListPage";

import {selectTodo} from "store/features/todos/actions";

import {TTodosState} from "store/features/todos/types";
import {TAppState} from "store/features/app/types";
import {TListState} from "store/features/lists/types";

interface TMapState {
    todos: TTodosState
    lists: TListState
    app: TAppState
}


const mapStateToProps = (state: TMapState) => ({
    todos: state.todos.items,
    isLoading: state.todos.isLoading,
    lists: state.lists.items,
    userId: state.app.user?.uid,
    isAuth: state.app.isAuth,
});

const mapDispatchProps = {
    renameList: renameListRequest,
    deleteList: deleteListRequest,
    toggleImportant: toggleImportantRequest,
    deleteTodo: deleteTodoRequest,
    toggleTodo: toggleTodoRequest,
    moveTodo: moveTodoRequest,
    addTodo: addTodoRequest,
    selectTodo: selectTodo,
};

export const connectorTodoListPage = connect(mapStateToProps, mapDispatchProps)
export const TodoListPageContainer = connectorTodoListPage(TodoListPage);