import { ADD_TODO } from "./action";

export const reducer = (store,{type,payload}) =>{
    switch(type)
    {
        case ADD_TODO:
            return {...store,todo:payload} // if payload is array old,return {...store,todo:[...store.todo, ...payload]}
        default:
            return store;
    }
}