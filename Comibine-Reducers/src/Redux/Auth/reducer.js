import { AUTH_STATE } from "./action"

const initState = {
    token:JSON.parse(localStorage.getItem("Login"))|| null,
}
// console.log("INIT",initState)
export const AuthReducer = (store = initState,{type,payload}) => {

    switch(type)
    {
        case AUTH_STATE:
            return{...store,token:payload}
        default:
            return store;
    }
}