import {todosActionTypes, todoTypes, TTodosState} from "./types";
import {TTodo} from "../../../types";

const initialState: TTodosState = {
    items: [],
    selectedTodo: null,
}

export const todosReducer = (state = initialState, action: todosActionTypes) => {
    switch (action.type) {
        case todoTypes.SET_TODOS: {
            return {
                ...state,
                items: action.payload
            }
        }
        case todoTypes.ADD_TODO: {
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        }
        case todoTypes.DELETE_TODO: {
            return {
                ...state,
                items: state.items.filter((t) => t.id !== action.payload)
            }
        }
        case todoTypes.SELECT_TODO: {
            const item = state.items.filter((t) => t.id === action.payload)
            return {
                ...state,
                selectedTodo: item[0]
            }
        }
        case todoTypes.CLEAR_SELECT: {
            return {
                ...state,
                selectedTodo: null
            }
        }
        case todoTypes.TOGGLE_TODO: {
            const items = state.items.map((t) =>
                t.id === action.payload ? {...t, completed: !t.completed} : t)
            return {
                ...state,
                items: items
            }
        }
        case todoTypes.TOGGLE_IMPORTANT: {
            const items = state.items.map((t) =>
                t.id === action.payload ? {...t, important: !t.important} : t)
            return {
                ...state,
                items: items
            }
        }
        case todoTypes.UPDATE_TODO: {
            const newItems = state.items.map((todo) => {
                if (todo.id === action.payload.id) {

                    return {...todo, ...action.payload as TTodo}
                } else return todo
            })
            return {
                ...state,
                items: [...newItems]
            }
        }
        case todoTypes.ADD_STEP: {
            const {step, todoId} = action.payload
            const [...todos] = state.items
            let newSelTodo = state.selectedTodo

            const newTodos = todos.map((todo) => {
                if (todo.id === todoId) {
                    if (todo.steps) {
                        todo.steps = [step, ...todo.steps]
                    } else todo.steps = [step]
                    newSelTodo = {...todo}
                    return todo
                } else return todo
            })


            return {
                ...state,
                items: newTodos,
                selectedTodo: newSelTodo
            }
        }
        case todoTypes.UPDATE_STEPS: {
            const {todoId, newSteps} = action.payload
            const [...todos] = state.items
            let newSelTodo = state.selectedTodo
            const newTodos = todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.steps = newSteps
                    newSelTodo = {...todo}
                }
                return todo
            })

            return {
                ...state,
                items: newTodos,
                selectedTodo: newSelTodo
            }
        }

        case todoTypes.MOVE_TODO: {
            const {listId, todoId} = action.payload
            const [...todos] = state.items

            const newTodos = todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.listId = listId
                }
                return todo
            })
            return {
                ...state,
                items: newTodos
            }
        }
        default:
            return state
    }
}
