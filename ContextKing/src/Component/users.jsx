import axios from "axios"
import { useEffect, useState} from "react"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { RegistrationContext } from "../Context/form-context"

export const Users = () =>{

    const [data,setData] = useState()

    const {state,dispatch} = useContext(RegistrationContext)

    if(state.name == "" && state.age == 0 && state.dob == "")
    {
        return <Navigate to={"/registration/one"}></Navigate>
    }

    useEffect(()=>{
        axios.get("http://localhost:8888/User").then(({data})=>{
            setData(data)
        })  
    },[])

    return <div style={{margin:"auto", width:"90%"}}>
        <h1>USERS DETAILS</h1>
        <div className="tablebox">
            {data?.map((el)=>( 
                <table>  
                   <tbody> 
                        <tr>
                            <td>Name</td>
                            <td>{el.name}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{el.age}</td>
                        </tr>
                         <tr>
                            <td>DOB</td>
                            <td>{el.dob}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{el.address}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{el.state}</td>
                        </tr>
                        <tr>
                            <td>Pincode</td>
                            <td>{el.pincode}</td>
                        </tr>
                    </tbody>
                </table>))}
            </div>
        </div>
}