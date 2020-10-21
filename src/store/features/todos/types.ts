import {TList, TTodo} from "types"

export type TTodosState = {
    items: TTodo[],
    selectedTodo: TTodo | null,
    isLoading: boolean
}

export const todoTypes = {
    SET_TODOS: "@@todo/SET_TODOS",
    SET_LOADING: "@@todo/SET_LOADING",
    DELETE_TODO: "@@todo/DELETE_TODO",
    ADD_TODO: "@@todo/ADD_TODO",
    TOGGLE_TODO: "@@todo/TOGGLE_TODO",
    TOGGLE_IMPORTANT: "@@todo/TOGGLE_IMPORTANT",
    SELECT_TODO: "@@todo/SELECT_TODO",
    CLEAR_SELECT: "@@todo/CLEAR_SELECT",
    UPDATE_TODO: "@@todo/UPDATE_TODO",
    MOVE_TODO: "@@todo/MOVE_TODO",
    //STEP
    ADD_STEP: "@@todo/ADD_STEP",
    UPDATE_STEPS: "@@todo/UPDATE_STEPS"
}

interface setTodosAction {
    type: typeof todoTypes.SET_TODOS
    payload: TList[]
}

interface setLoadingAction {
    type: typeof todoTypes.SET_LOADING
    payload: boolean
}

interface deleteTodoAction {
    type: typeof todoTypes.DELETE_TODO
    payload: string
}

interface addTodoAction {
    type: typeof todoTypes.ADD_TODO
    payload: TTodo
}

interface toggleTodoAction {
    type: typeof todoTypes.TOGGLE_TODO
    payload: string
}

interface toggleImportantAction {
    type: typeof todoTypes.TOGGLE_TODO
    payload: TTodo
}

interface selectTodoAction {
    type: typeof todoTypes.SELECT_TODO
    payload: string
}

interface clearSelectAction {
    type: typeof todoTypes.CLEAR_SELECT
    payload: null
}

interface updateTodoAction {
    type: typeof todoTypes.UPDATE_TODO
    payload: Partial<TTodo>
}

interface moveTodoAction {
    type: typeof todoTypes.MOVE_TODO
    payload: {
        todoId: string,
        listId: string
    }
}

interface addStepAction {
    type: typeof todoTypes.ADD_TODO
    payload: {
        todoId: string,
        title: string
    }
}

interface deleteStepAction {
    type: typeof todoTypes.DELETE_TODO
    payload: {
        todoId: string,
        stepId: string
    }
}

interface toggleStepAction {
    type: typeof todoTypes.TOGGLE_TODO
    payload: {
        todoId: string,
        stepId: string
    }
}


export type todosActionTypes =
    | setTodosAction
    | setLoadingAction
    | deleteTodoAction
    | addTodoAction
    | toggleTodoAction
    | selectTodoAction
    | toggleImportantAction
    | updateTodoAction
    | clearSelectAction
    | addStepAction
    | deleteStepAction
    | moveTodoAction
    | toggleStepAction