
import { AUTH_USER,AUTH_USER_LOAD,AUTH_USER_ERROR } from "./action"

const initState = {
    loading:false,
    isAuth:false,
    name:"User",
    error:false
}


export const authReducer = (store = initState,{type,payload} ) =>{
    switch(type)
    {
        case AUTH_USER_LOAD:
            return{...store,loading:true}
        case AUTH_USER:
            return {...store,loading:false,isAuth:true,name:payload }
        case AUTH_USER_ERROR:
            return {...store,loading:false,error:true}
        default:
            return store;
    }
}