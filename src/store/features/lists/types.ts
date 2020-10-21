import {TList} from "types";

export interface TListState {
    items: TList[],
    currentList: string
}

export const listsTypes = {
    SET_LISTS: "@@lists/SET_LISTS",
    ADD_LIST: "@@lists/ADD_LIST",
    DELETE_LIST: "@@lists/DELETE_LIST",
    RENAME_LIST: "@@lists/RENAME_LIST",
    MOVE_LIST: "@@lists/MOVE_LIST",
}

interface setListsAction {
    type: typeof listsTypes.SET_LISTS
    payload: TList[]
}

interface addListAction {
    type: typeof listsTypes.ADD_LIST
    payload: TList
}

interface deleteListAction {
    type: typeof listsTypes.DELETE_LIST
    payload: string
}

interface moveListAction {
    type: typeof listsTypes.MOVE_LIST
    payload: string
}

interface renameListAction {
    type: typeof listsTypes.RENAME_LIST
    payload: {
        id: string,
        title: string
    }
}


export type listsActionTypes = setListsAction
    | addListAction
    | deleteListAction
    | renameListAction
    | moveListAction