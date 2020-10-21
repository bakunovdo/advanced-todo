import {TList, TTodo} from "../types";

export function calcSidebarValue(lists: TList[] | null | undefined, url: string | undefined) {
    if (url === "/") {
        return "Home"
    } else if (url === "/important") {
        return "Important"
    } else if (url === "/planned") {
        return "Planned"
    }

    if (lists) {
        const list = lists.filter(list => `/${list.id}` === url)[0]
        if (list) return list.id
    }

    return ""
}

export const capitalizeWord = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const getTodosByPath: { [index: string]: any } = ({
    '/': (todos: TTodo[]) => todos,
    '/important': (todos: TTodo[]) => todos.filter(t => t.important),
    '/planned': (todos: TTodo[]) => todos.filter(t => t.dueDate)
})

export const getTodosByList = (todos: TTodo[], listId: string) => {
    return todos.filter(t => t.listId === listId)
}

export const filteringTodos = (todos: TTodo[], path: string, listId: string) => {
    if (listId) {
        return getTodosByList(todos, listId)
    }
    return getTodosByPath[path](todos)
}

export const getList = (lists: TList[], listId: string) => {
    const list = lists.find((list) => list.id === listId)
    return list ? list : undefined
}

export const getTotalTodos = (todos: TTodo[], listId: string) => {
    return todos.filter((todo) => todo.listId === listId)
}

export const getTitle = (lists: TList[], path: string, listId?: string) => {
    if (listId) {
        const list = getList(lists, listId)
        return list ? list.title : "List not find"
    }
    if (path === "/") return "Home"
    return capitalizeWord(path.slice(1))
}