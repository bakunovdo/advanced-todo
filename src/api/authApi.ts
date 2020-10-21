import {firebaseAuth} from "../database";


export function login(email: string, password: string) {
    return firebaseAuth.signInWithEmailAndPassword(email, password)
}

export function signin(email: string, password: string) {
    return firebaseAuth.createUserWithEmailAndPassword(email, password)
}


export function signOut() {
    return firebaseAuth.signOut()
}