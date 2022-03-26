
import {useState,useEffect,useContext} from "react"
import {useParams,Navigate} from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../context/authcontext"

export const UserDetails = () =>
{
    const {islog} = useContext(AuthContext)

    const {userid} = useParams()
    const [datas,setDatas] = useState([])

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${userid}`).then(({data})=>{
            setDatas(data.data) 
        })
    },[])

    if(!islog)
    {
        alert("Login to see details")
        return <Navigate to="/login"/>
    }

    return <div>
        <h1>User details:{datas.id}</h1>
        <img src={datas.avatar} alt="" />
    </div>
}