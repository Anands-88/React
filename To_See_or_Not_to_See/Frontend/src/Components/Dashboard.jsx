import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
export const DashBoard = () =>{

    const name = useSelector((store)=>{return store.name})

    return <div>
             <h1>WELCOME TO THE HOMEPAGE,{name}</h1>
        </div>
    
}