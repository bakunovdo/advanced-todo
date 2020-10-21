import * as api from "api/todoApi";

import {TTodo} from "types";
import {
    addStep,
    addTodo,
    deleteTodo,
    moveTodo,
    setTodos,
    toggleImportant,
    toggleTodo,
    updateSteps,
    updateTodo
} from "./actions";


export const getTodosRequest: any = (userId: string) => {
    return async (dispatch: any) => {
        await api.getTodos(userId).then(response => {
            dispatch(setTodos(response.data))
        })

    }
}

export const addTodoRequest: any = (todo: TTodo) => {
    return (dispatch: any) => {
        api.addTodo(todo).then(res => {
            dispatch(addTodo(res))
        })
    }
}

export const deleteTodoRequest: any = (todoId: string) => {
    return (dispatch: any) => {
        api.deleteTodo(todoId).then(() => {
            dispatch(deleteTodo(todoId))
        })
    }
}

export const toggleTodoRequest: any = (todoId: string, bool: boolean) => {
    return (dispatch: any) => {
        api.updateTodo(todoId, {completed: bool}).then(() => {
            dispatch(toggleTodo(todoId))
        })
    }
}

export const toggleImportantRequest: any = (todoId: string, bool: boolean) => {
    return (dispatch: any) => {
        api.updateTodo(todoId, {important: bool}).then(() => {
            dispatch(toggleImportant(todoId))
        })
    }
}

export const updateTodoRequest: any = (todoId: string, data: Partial<TTodo>) => {
    return (dispatch: any) => {
        api.updateTodo(todoId, data).then(() => {
            dispatch(updateTodo({id: todoId, ...data}))
        })
    }
}

export const moveTodoRequest: any = (todoId: string, listId: string) => {
    return (dispatch: any) => {
        return api.updateTodo(todoId, {listId}).then(() => {
            dispatch(moveTodo(todoId, listId))
            return true
        })
    }
}

export const addStepRequest = (todo: TTodo, title: string) => {
    const newStep = {id: Date.now(), completed: false, title}

    return (dispatch: any) => {
        api.updateTodo(todo.id, {steps: [newStep, ...todo.steps]}).then(() => {
            dispatch(addStep(todo.id, newStep))
        })
    }
}

export const deleteStepRequest = (todo: TTodo, stepId: number) => {
    const newSteps = todo.steps.filter((step) => step.id !== stepId)

    return (dispatch: any) => {
        api.updateTodo(todo.id, {steps: newSteps}).then(() => {
            dispatch(updateSteps(todo.id, newSteps))
        })
    }
}

export const toggleStepRequest = (todo: TTodo, stepId: number) => {
    const newSteps = todo.steps
        .map((step) => step.id === stepId
            ? {...step, completed: !step.completed}
            : step
        )

    return (dispatch: any) => {
        api.updateTodo(todo.id, {steps: newSteps}).then(() => {
            dispatch(updateSteps(todo.id, newSteps))
        })
    }
}


