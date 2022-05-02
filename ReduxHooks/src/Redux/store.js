import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { logReducer } from "./Login/reducer";
import {todoReducer} from "./Todos/reducer"

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = [thunk]


const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);


const rootReducer = combineReducers({
    auth:logReducer,
    todo:todoReducer
})

export const store = createStore(rootReducer,enhancer)