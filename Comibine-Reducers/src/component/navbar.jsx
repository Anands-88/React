
import { Link, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { authState } from "../Redux/Auth/action";


export const Navbar = ()=>{

    const dispatch = useDispatch()
    
    return <div style={{marginLeft:"70%"}}>
        <button onClick={()=>{localStorage.setItem("Login",JSON.stringify("")),dispatch(authState(""))}} ><Link className="link" to={"/login"}>Login</Link></button>
    </div>
}                                                   