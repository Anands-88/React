import { useState, useContext} from "react"
import { AuthContext } from "../../Contexts/auth-context"


export const Display = () =>{

    const {status} = useContext(AuthContext)
    console.log(status)
    if(status.status == false)
    {
        return <div>
            <div>
                <h3>Status:False</h3>
                <p>User Not logged</p>
            </div>
        </div>
    }
    return <div>
        <div>
            <h3>Status : True</h3>
            <h3>Token: {status.token}</h3>
        </div>
    </div>
    
}