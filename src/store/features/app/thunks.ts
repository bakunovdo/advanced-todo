import * as api from "api/authApi";

import {logoutAC, setUserDataAC} from "./actions";
import {TUser} from "types";

export const signOut: any = () => {
    return (dispatch: any) => {
        api.signOut().then(() => {
            dispatch(logoutAC)
        }).catch((e) => console.log(e.message))
    }
}

export const loginUserEmailAndPassword: any = (email: string, password: string) => {
    return () => {
        return api.login(email, password).then(() => {
            return true
        })
    }
}

export const signInWithUserEmailAndPassword: any = (email: string, password: string) => {
    return () => {
        return api.signin(email, password).then(() => {
            return true
        })
    }
}

export const setUserData: any = (user: TUser, isAuth: boolean) => {
    return (dispatch: any) => {
        dispatch(setUserDataAC(user, isAuth))
    }
}