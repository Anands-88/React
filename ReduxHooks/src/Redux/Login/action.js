import axios from "axios";

export const  LOG_USER = "LOG_USER";
export const LOGOUT = "LOGOUT"

export const log_user = (payload) =>({type:LOG_USER,payload})

export const log_Out = () => ({type:LOGOUT})

export const loginData = (payload) => (dispatch) =>{

    axios.post("https://masai-api-mocker.herokuapp.com/auth/login",payload)
    .then(({data})=>{
        if(data.error == false)
        {
            dispatch(log_user({username:payload.username,token:data.token}))
        }
        else
        {
            alert("Invalid login creadentials")
        }
    })
}