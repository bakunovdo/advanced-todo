import {TList} from "types";
import {listsTypes} from "./types";

export const setLists = (items: TList[]) => ({
    type: listsTypes.SET_LISTS,
    payload: items
})

export const addList = (list: TList) => ({
    type: listsTypes.ADD_LIST,
    payload: list
})

export const deleteList = (id: string) => ({
    type: listsTypes.DELETE_LIST,
    payload: id
})

export const renameList = (id: string, title: string) => ({
    type: listsTypes.RENAME_LIST,
    payload: {id, title}
})

export const moveList = (listId: string) => ({
    type: listsTypes.RENAME_LIST,
    payload: {listId}
})