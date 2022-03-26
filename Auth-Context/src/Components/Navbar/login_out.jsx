import axios from "axios"
import { useState,useContext,useEffect} from "react"
import {AuthContext} from "../../Contexts/auth-context"


export const Button = () =>
{
    const [log,setLog] = useState(false)

    const {auth,isAuth,toggleAuth} = useContext(AuthContext)
    let data = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }

    useEffect(()=>{
        if(log)
        axios.post("https://reqres.in/api/login",data).then((res)=>{
            
            toggleAuth(res.data)
            isAuth("Logout")
        })
        else
        {
            toggleAuth({token:"",status:false})
            isAuth("Login")
        }
    
    },[log])

    return <nav>
        <button onClick={()=>{ setLog(log?false:true)}}>{auth}</button>
    </nav>
}