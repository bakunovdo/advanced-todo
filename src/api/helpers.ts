import {DocumentData, QuerySnapshot} from "./types";


export const status = {
    error: "error",
    success: "success"
}

export const onSuccess = (data : any) => ({
    status: status.success,
    data: data
})

export const onError = ((error: any) => ({
    status: status.error,
    data: error
}))

export const mapDoc = (doc: DocumentData) => {
    return {
        id: doc.id,
        ...doc.data()
    }
}

export const mapSnapshot = (snapshot: QuerySnapshot) => {
    return onSuccess(snapshot.docs.map(mapDoc))
}


