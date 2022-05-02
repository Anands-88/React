import { Navigate } from "react-router-dom"

export const PrivateRouter = ({children,auth})=>{

    if(!auth)
    { 
        return <Navigate to="/signup"/>
    } 
    
    return children
}