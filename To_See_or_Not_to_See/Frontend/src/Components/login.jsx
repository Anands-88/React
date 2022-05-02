import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginData } from "../Redux/Auth/action"


export const Login = () =>
{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const[logData,setLogData] = useState({
        email:"",
        password:"",
    })



    
    const login = () =>{
        
        if(logData.email == "" && logData.password == "")
        {
            alert("Please Enter")
        }
        else
        {
            dispatch(loginData(logData))
            navigate("/")
        }
        
    }
   
    
    return <div style={{width:"30%",margin:"auto"}}>
        <input type="email" placeholder="Enter The Email" onChange={(e)=>{setLogData({...logData,email:e.target.value})}}/>
        <input type="text" placeholder = "Enter The Password"onChange={(e)=>{setLogData({...logData,password:e.target.value})}}/>
        <button style={{width:"40%",height:"30px"}} onClick={()=>{login()}}>Submit</button>
    </div>
}