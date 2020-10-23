import {TList, TStep, TTodo} from "types"

export interface TTodosState {
    items: TTodo[],
    selectedTodo: TTodo | null,
}

export const todoTypes = {
    SET_TODOS: "@@todo/SET_TODOS",
    DELETE_TODO: "@@todo/DELETE_TODO",
    ADD_TODO: "@@todo/ADD_TODO",
    TOGGLE_TODO: "@@todo/TOGGLE_TODO",
    TOGGLE_IMPORTANT: "@@todo/TOGGLE_IMPORTANT",
    SELECT_TODO: "@@todo/SELECT_TODO",
    CLEAR_SELECT: "@@todo/CLEAR_SELECT",
    UPDATE_TODO: "@@todo/UPDATE_TODO",
    MOVE_TODO: "@@todo/MOVE_TODO",
    ADD_STEP: "@@todo/ADD_STEP",
    DELETE_STEP: "@@todo/DELETE_STEP",
    TOGGLE_STEP: "@@todo/TOGGLE_STEP",
    UPDATE_STEPS: "@@todo/UPDATE_STEPS"
}

interface setTodosAction {
    type: typeof todoTypes.SET_TODOS
    payload: TList[]
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
    type: typeof todoTypes.TOGGLE_IMPORTANT
    payload: TTodo
}

interface selectTodoAction {
    type: typeof todoTypes.SELECT_TODO
    payload: string
}

interface clearSelectAction {
    type: typeof todoTypes.CLEAR_SELECT
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
    type: typeof todoTypes.ADD_STEP
    payload: {
        todoId: string,
        step: TStep
    }
}

interface deleteStepAction {
    type: typeof todoTypes.DELETE_STEP
    payload: {
        todoId: string,
        newSteps: TStep[]
    }
}

interface toggleStepAction {
    type: typeof todoTypes.TOGGLE_STEP
    payload: {
        todoId: string,
        stepId: string
    }
}


export type todosActionTypes =
    & setTodosAction
    & deleteTodoAction
    & addTodoAction
    & toggleTodoAction
    & selectTodoAction
    & toggleImportantAction
    & updateTodoAction
    & clearSelectAction
    & addStepAction
    & deleteStepAction
    & moveTodoAction
    & toggleStepAction