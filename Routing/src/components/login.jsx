import { useContext } from "react"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/authcontext"

export const Login = () =>
{
    const {isAuth} = useContext(AuthContext)

    const [detail,setDetail] = useState({
        name:"",
        password:""
    })
    console.log("DETAILS",detail)
    return <div>
        <input type="text" placeholder="Enter username" onChange={(e)=>{setDetail({...detail,name:e.target.value})}}/>
        <input type="text" placeholder="Enter the password" onChange={(e)=>{setDetail({...detail,password:e.target.value})}} />
        <button onClick={()=>
        {
            if(Object.values(detail)[0] != []){
                isAuth(true)
                {<Navigate to="/about"/>}
            }
            else{alert("enter all details")}
            }
            }>Submit</button>
    </div>
}