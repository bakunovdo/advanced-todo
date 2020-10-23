import * as api from "api/authApi";

import {logoutAC, setUserDataAC} from "./actions";
import {TUser} from "types";

import {Dispatch} from "redux";


export const signOut: any = () => {
    return (dispatch: any) => {
        api.signOut().then(() => {
            dispatch(logoutAC)
        })
    }
}

export const loginUserEmailAndPassword: any = (email: string, password: string) => {
    return () => {
        return api.login(email, password).catch((e) => e)
    }
}

export const signInWithUserEmailAndPassword: any = (email: string, password: string) => {
    return () => {
        return api.signin(email, password).catch((e) => e)
    }
}

export const setUserData: any = (user: TUser, isAuth: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setUserDataAC(user, isAuth))
    }
}