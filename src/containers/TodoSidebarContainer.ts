import {connect} from 'react-redux';

import {TodoSidebar} from "components/TodoSidebar/TodoSidebar";

import {addStepRequest, deleteStepRequest, toggleStepRequest, updateTodoRequest} from "store/features/todos/thunks";
import {clearSelectTodo} from "store/features/todos/actions";
import {TTodosState} from "store/features/todos/types";
import {TAppState} from "store/features/app/types";

interface TMapState {
    todos: TTodosState
    app: TAppState
}


const mapStateToProps = (state: TMapState) => ({
    selectedTodo: state.todos.selectedTodo
});

const mapDispatchProps = {
    updateTodoRequest,
    clearSelectTodo,
    addStepRequest,
    deleteStepRequest,
    toggleStepRequest
};


export const connectorTodoSidebar = connect(mapStateToProps, mapDispatchProps)
export const TodoSidebarContainer = connectorTodoSidebar(TodoSidebar);