import { LOGOUT, LOG_USER } from "./action";

const initState = {
    isAuth:false,
    details:""
}

export const logReducer = (store = initState,{type,payload}) =>{
    switch (type){
        case LOG_USER:
            return {...store,isAuth:true,details:payload}
        case LOGOUT:
            return { ...initState}
        default:
            return store
    }
}
