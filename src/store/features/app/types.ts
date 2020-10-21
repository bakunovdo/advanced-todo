import {TUser} from "types";

export interface TAppState {
    user: TUser | null,
    isAuth: boolean | null,
    initialized: boolean
}

export const appTypes = {
    SET_USER: "@@app/SET_USER",
    LOGOUT: "@@app/LOGOUT",
    SET_INITIALIZED: "@@app/SET_INITIALIZED",
}

interface setUserAction {
    type: typeof appTypes.SET_USER
    payload: { user: TUser, isAuth: boolean }
}

interface setAppInitializedAction {
    type: typeof appTypes.SET_INITIALIZED
    payload: boolean
}

interface logoutAction {
    type: typeof appTypes.LOGOUT
}


export type appActionTypes =
    & setUserAction
    & logoutAction
    & setAppInitializedAction