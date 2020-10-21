import {listsActionTypes, listsTypes, TListState} from "./types";

const initialState: TListState = {
    items: [],
    currentList: ""
}

export const listsReducer = (state = initialState, action: listsActionTypes) => {
    switch (action.type) {
        case listsTypes.SET_LISTS: {
            return {...state, items: action.payload}
        }
        case listsTypes.ADD_LIST: {
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        }
        case listsTypes.DELETE_LIST: {
            return {
                ...state,
                items: state.items.filter(list=> list.id !== action.payload)
            }
        }
        case listsTypes.RENAME_LIST: {
            return state
        }
        default:
            return state
    }
}
