import axios from "axios"
import { Navigate } from "react-router-dom";

export const LOG_USER = "LOG_USER";

export const loginUser = (payload) =>({type:LOG_USER,payload})


export const LogUser = (payload) => (dispatch) =>{

    axios.post(`https://intense-inlet-36398.herokuapp.com/admin/login`,payload)
    .then((data)=>{
        dispatch(GetLoguser(data))
        
    })
}

export const GetLoguser = ({data}) => (dispatch) =>{

    console.log(data.message)
    if(data.message == "Login SuccessFull")
    {
        let link = {headers: {authorization : `Bearer ${data.token}`} }
            axios.get(`https://intense-inlet-36398.herokuapp.com/home`,link).then(({data})=>{
            dispatch(loginUser(data))
        })
    }
    else
    {   
        alert(data.message)
        return <Navigate to="/login"/>
        
    }
    
}