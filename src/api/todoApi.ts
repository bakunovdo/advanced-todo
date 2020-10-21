import {firestore} from "database";

import {mapDoc, mapSnapshot, onError} from "./helpers";
import {TFromGetTodos, TFromUpdateTodo} from "./types";
import {TTodo} from "types";


export function getTodos(userId: string): Promise<TFromGetTodos> {
    return firestore.collection("todos")
        .where("userId", "==", userId)
        .get()
        .then(mapSnapshot)
        .catch(onError);
}

export function addTodo(data: TTodo): Promise<TTodo> {
    return firestore.collection("todos").add({
        ...data,
        completed: false,
        note: '',
        dueDate:'',
        steps: []
    })
        .then(docRef => docRef.get())
        .then(mapDoc)
}

export function deleteTodo(todoId: string): Promise<string> {
    return firestore.collection("todos").doc(todoId).delete()
        .then(() => todoId)
}

export function updateTodo(todoId: string, data: Partial<TTodo>): Promise<string | TFromUpdateTodo> {
    return firestore.collection("todos").doc(todoId)
        .set(data, {merge: true})
        .then(() => todoId)
        .catch(onError);
}