import {TStep, TTodo} from "types";
import {todoTypes} from "./types";


export const setTodos = (items: TTodo[]) => ({
    type: todoTypes.SET_TODOS,
    payload: items
})

export const addTodo = (todo : TTodo) => ({
    type: todoTypes.ADD_TODO,
    payload: todo
})

export const deleteTodo = (todoId : string) => ({
    type: todoTypes.DELETE_TODO,
    payload: todoId
})

export const toggleTodo = (todoId : string) => ({
    type: todoTypes.TOGGLE_TODO,
    payload: todoId
})

export const toggleImportant = (todoId: string) => ({
    type: todoTypes.TOGGLE_IMPORTANT,
    payload: todoId
})

export const selectTodo = (todoId : string) => ({
    type: todoTypes.SELECT_TODO,
    payload: todoId
})

export const clearSelectTodo = () => ({
    type: todoTypes.CLEAR_SELECT,
})

export const updateTodo = (data : Partial<TTodo>) => ({
    type: todoTypes.UPDATE_TODO,
    payload: data
})

export const moveTodo = (todoId : string, listId:string) => ({
    type: todoTypes.MOVE_TODO,
    payload: {todoId, listId}
})

export const addStep = (todoId : string, step: TStep) => ({
    type: todoTypes.ADD_STEP,
    payload: {todoId, step}
})

export const updateSteps = (todoId : string, newSteps: TStep[]) => ({
    type: todoTypes.UPDATE_STEPS,
    payload: {todoId, newSteps}
})




