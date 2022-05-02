import axios from "axios"
import { useReducer } from "react"
import {useNavigate} from "react-router-dom"

const initalState = {
    name:"",
   email:"",
   password:""
}

const reducer = (state,{type,payload})=>{

    switch (type){
        case "SIGNUP":
            return {...state,
                    name:payload.name,
                    email:payload.email,
                    password:payload.password
                }
            
        default:
            return state
            }
}

export const Signup = () =>
{
    const navigate = useNavigate()

    const [state,dispatch] = useReducer(reducer,initalState)

    const check = (e) =>{
        e.preventDefault()
        console.log(state)
        axios.post("https://serene-escarpment-61942.herokuapp.com/user/signup",state)
        .then(({data})=>
        {
            if(data.message === undefined)
            {
                alert("successfull")
                navigate("/login")
            }
            else
            {
                alert(data.message)
            }
            
        })
    }

    return <div style={{width:"30%",margin:"auto",border:"1px solid red"}}>
        <form action="" onSubmit={check}>
            <input type="text"  placeholder="Enter Your Name" onChange={(e)=>{dispatch({type:"SIGNUP",payload:{...state,name:e.target.value}})}}/>
            <input type="email"  placeholder="Enter your Email" onChange={(e)=>{dispatch({type:"SIGNUP",payload:{...state, email:e.target.value}})}}/>
            <input type="password"  placeholder="Enter Password" onChange={(e)=>{dispatch({type:"SIGNUP",payload:{...state, password:e.target.value}})}}/>
            <input type="submit" style={{width:"40%"}}/>
        </form>
            <button onClick={()=>{navigate("/login")}}>Login</button>

    </div>
}