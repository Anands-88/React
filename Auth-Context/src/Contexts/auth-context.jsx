
import { createContext, useState} from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>
{
    const [auth,setAuth] = useState("Login")
    const [status, setStatus] = useState({
        token:"",
        status:false
    })

        const isAuth = (value) =>
        {
            setAuth(value)
        }

        const toggleAuth = ({token,status}) =>
        {
            setStatus({...status,token,status})
        }

    return<AuthContext.Provider value={{isAuth,auth,toggleAuth,status}}>{children}</AuthContext.Provider>
}
