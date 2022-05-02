import { useState, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate,Link } from "react-router-dom"
import { loginData } from "../Redux/Login/action"
import {Input,Button, styles} from "./styled"


const divStyles = {
    width:"25%",
    border:"2px solid black",
    margin:" 2% auto",
    background:"orange",
    gap:"15px",
    display:"flex",
    flexWrap :"wrap",
    justifyContent: "center"

}


export const Login = () =>{

    const ReduxDispatch = useDispatch()
    const {isAuth} = useSelector((store)=>{return store.auth})

    const [logData,setLogData] = useState({
        username:"",
        password:"",
    })

    const handleSubmit = () =>{
        ReduxDispatch(loginData(logData))
    }

    if(isAuth)
    {
        return <Navigate to="/"/>
    }

    return <div style={divStyles}>
        <h2>Login</h2>
        <Input type="text" placeholder="Enter Username" onChange={(e)=>{setLogData({...logData,username:e.target.value})}}/>
        <Input type="text" placeholder="Enter Password" onChange={(e)=>{setLogData({...logData,password:e.target.value})}}/>
        <Button onClick={()=>{handleSubmit()}}>SUBMIT</Button>
        <Button><Link styled={styles} to="/register">Signup</Link></Button>
    </div>
}