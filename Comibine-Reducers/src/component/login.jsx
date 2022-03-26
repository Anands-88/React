
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { authState } from "../Redux/Auth/action"

export const Login = ()=>{
   const [logdata,setLogdata] =  useState(
       {
           email:"",
           password:""
       }
   )

   const {token} = useSelector((store)=>store.Auth)

   const dispatch = useDispatch()

   if(token != "")
    {return <Navigate to={"/"}/>}


//    const postData = () =>{
//       axios.post(`https://reqres.in/api/login`,logdata).then(({data})=>{
           
//         // localStorage.setItem("Login",JSON.stringify(data.token)
//         dispatch(authState(data.token))

//        }).catch((error)=>{console.log(error)})
       
       
//    }


    return <div>
        <input type="email" onChange={(e)=>{
            setLogdata({...logdata,email:e.target.value})
        }}/>
        <input type="password" name="" id="" onChange={(e)=>{
            setLogdata({...logdata,password:e.target.value})}}/>
        <button onClick={()=>{dispatch(authState(logdata))}}>Login</button>
    </div>
}