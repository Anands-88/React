
import { ADD_TODOS } from "./action";

const initState = {
    todos:[],
}

export const todoReducer = (store = initState,{type,payload})=>{
    switch (type){
        case ADD_TODOS:
            return {...store,todos:payload}
        default:
            return store;
    }
}