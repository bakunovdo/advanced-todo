import * as api from "api/listsApi";
import {addList, deleteList, renameList, setLists} from "./actions";

export const getListsRequest: any = (userId: string) => {
    return async (dispatch: any) => {
        await api.getLists(userId).then(response => {
            dispatch(setLists(response.data))
        })
    }
}

export const addListRequest: any = (userId: string, title: string) => {
    return (dispatch: any) => {
        api.addList(userId, title).then(response => {
            dispatch(addList({
                id: response.id,
                title
            }))
        })
    }
}

export const deleteListRequest: any = (listId: string) => {
    return (dispatch: any) => {
        api.deleteList(listId).then(() => {
            dispatch(deleteList(listId))
        })
    }
}

export const renameListRequest: any = (listId: string, title: string) => {
    return (dispatch: any) => {
        return api.updateList(listId, {title}).then((res) => {
            if (res) {
                dispatch(renameList(listId, title))
                return true
            } return false
        })
    }
}

