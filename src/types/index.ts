export interface TUser {
    uid: string,
    email: string,
    isAnonymous?: boolean,
    emailVerified?: boolean,
    displayName?: string | null,
    photoURL?: webkitURL | null
}

export type TStep = {
    id: number,
    title: string,
    completed: boolean
}

export type TTodo = {
    id: string,
    listId: string
    title: string,
    dueDate: any,
    important: boolean,
    note: string,
    steps: TStep[],
    userId: string,
    completed: boolean,
}


export type TList = {
    title: string,
    id: string
}

