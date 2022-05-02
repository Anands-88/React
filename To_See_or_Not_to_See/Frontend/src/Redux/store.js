import { createStore, applyMiddleware } from "redux";
import { authReducer } from "./Auth/reducer";
import thunk from "redux-thunk"

export const store = createStore(authReducer,applyMiddleware(thunk))
