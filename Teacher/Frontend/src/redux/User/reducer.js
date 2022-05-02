
import {LOG_USER} from "./action"

const initState = {
    user:"",
    isAuth:false
}

export const UserReducer = (state=initState,{type,payload})=>{
    switch (type)
    {
        case LOG_USER:
            return {...state,isAuth:true,user:payload}
        default:
            return state
    }
}