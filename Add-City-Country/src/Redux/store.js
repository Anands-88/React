import {createStore,applyMiddleware} from "redux";
import {CityReducer} from "./Country/reducer"
import thunk from "redux-thunk"

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const middleware = [thunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);
export const store = createStore(CityReducer, enhancer);