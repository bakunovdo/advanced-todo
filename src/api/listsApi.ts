import {firestore} from "../database";

import {mapDoc, mapSnapshot, onError} from "./helpers";
import {TFromApi} from "./types";
import {TList} from "../types";


export function getLists(userId: string): Promise<TFromApi> {
    return firestore.collection("lists")
        .where("userId", "==", userId)
        .orderBy("date", "desc")
        .get()
        .then(mapSnapshot)
        .catch(onError);
}

export function addList(userId: string, title: string): Promise<TList> {
    return firestore.collection("lists").add({
        title,
        userId,
        date: new Date()
    })
        .then(docRef => docRef.get())
        .then(mapDoc)
}

export async function deleteList(listId: string) {
    await firestore.collection("todos")
        .where("listId", "==", listId)
        .get().then((snap => Promise.all(snap.docs.map(doc => doc.ref.delete()))))

    await firestore.collection("lists").doc(listId).delete()
}