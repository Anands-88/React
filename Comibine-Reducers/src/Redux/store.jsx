import axios from "axios";
import { Navigate } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { AuthReducer } from "./Auth/reducer";
import { todoReducer } from "./Todo/reducer";

const rootreducer = combineReducers({
    todo:todoReducer,
    Auth:AuthReducer
})

const authMiddleware = (store) => (next) =>(action) =>{
    
    if(action.payload.email && action.payload.password)
    {
        const {payload} = action
        localStorage.setItem("detail",JSON.stringify(payload))
    
        axios.post(`https://reqres.in/api/login`,payload).then(({data})=>{
        
            localStorage.setItem("Login",JSON.stringify(data.token))
            next({...action,payload:data.token})

        }).catch((error)=>{console.log(error)})
    }
    else{
        next(action)
    }
}


export const store = createStore(rootreducer,applyMiddleware(authMiddleware))
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()