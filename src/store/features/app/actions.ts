import {TUser} from "types";
import {appTypes} from "./types";

export const setUserDataAC = (user: TUser, isAuth: boolean) => ({
    type: appTypes.SET_USER,
    payload: {user, isAuth}
})

export const setAppInitialize = (value: boolean) => ({
    type: appTypes.SET_INITIALIZED,
    payload: value
})

export const logoutAC = () => ({
    type: appTypes.LOGOUT
})

