import { createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import {UserReducer} from "./User/reducer"
import { TeacherReducer } from "./Teacher/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


const middleware = [thunk]

const rootreducer = combineReducers({
    user:UserReducer,
    teachers:TeacherReducer
})

const enhancer = composeEnhancers(
applyMiddleware(...middleware)
// other store enhancers if any
);
export const store = createStore(rootreducer, enhancer);