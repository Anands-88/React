import axios from "axios"

export const AUTH_USER_LOAD = "AUTH_USER_LOAD";
export const AUTH_USER = "AUTH_USER";
export const AUTH_USER_ERROR = "AUTH_USER_ERROR";


export const auth_user_load = () =>({type:AUTH_USER_LOAD})

export const auth_user = (payload) =>({type:AUTH_USER,payload})

export const auth_user_error = () =>({type:AUTH_USER_ERROR})

export const loginData = (payload) => (dispatch) =>{
    dispatch(auth_user_load()) // dispatching loading
    
    axios.post("https://serene-escarpment-61942.herokuapp.com/user/login",payload)
    .then(({data})=>{
           valid(data.token,dispatch)
        
    })
}

function valid(token,dispatch)
{
    let link = {headers: {authorization : `Bearer ${token}`} }
    axios.get("https://serene-escarpment-61942.herokuapp.com/user/get-restaurants",link).then(({data})=>{

            dispatch(auth_user(data.name))

    })
    .catch()
    {
        dispatch(auth_user_error())
    }
}
