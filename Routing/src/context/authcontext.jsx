import { createContext } from "react";
import {useState} from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>
{
    const [islog,setIslog] = useState(false)

    const isAuth = (word) =>
    {
        setIslog(word)
    }
    console.log("ISLOG",islog)
    return <AuthContext.Provider value={{isAuth,islog}}>{children}</AuthContext.Provider>
}