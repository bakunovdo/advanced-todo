import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"

import {composeEnhancers} from "./utils";

import {listsReducer} from "./features/lists/reducer";
import {todosReducer} from "./features/todos/reducer";
import {appReducer} from "./features/app/reducer";


const rootReducer = combineReducers({
    app: appReducer,
    lists: listsReducer,
    todos: todosReducer,
})

const middlewares = [thunkMiddleware]
const enhancers = composeEnhancers(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, enhancers)

export type RootState = ReturnType<typeof rootReducer>