import {appActionTypes, TAppState, appTypes} from "./types";

const initialState: TAppState = {
    user: null,
    isAuth: null,
    initialized: false
}

export const appReducer = (state = initialState, action: appActionTypes) => {
    switch (action.type) {
        case appTypes.SET_USER: {
            return {
                ...state,
                isAuth: action.payload.isAuth,
                user: action.payload.user
            }
        }
        case appTypes.LOGOUT: {
            return {
                ...state,
                isAuth: null,
                user: null
            }
        }
        case appTypes.SET_INITIALIZED: {
            return {
                ...state,
                initialized: action.payload,
            }
        }
        default:
            return state
    }
}