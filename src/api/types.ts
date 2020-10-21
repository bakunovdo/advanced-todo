import firebase from "firebase";

import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentData = firebase.firestore.DocumentData;

import {TTodo} from "../types";
import {status} from "./helpers";

type TStatus = typeof status

type TFromGetTodos = {
    status: string,
    data: TTodo[]
}

type TFromUpdateTodo = {
    status: string,
    data: any
}

type TFromApi = {
    status: string,
    data: any
}

export {QuerySnapshot};

export type {
    DocumentData,
    TFromGetTodos,
    TFromUpdateTodo,
    TStatus,
    TFromApi
};