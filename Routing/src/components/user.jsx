import axios from "axios"
import {Link} from "react-router-dom"
import { useState,useEffect } from "react"

export const User = () =>
{
    const [list,setList] = useState([])

    useEffect(() =>
    {
        axios.get("https://reqres.in/api/users").then(({data})=>{
            setList([...data.data])
        })
    },[])

    return(
        <div style={{ alignItems:"center" }}>
            {list.map((e)=>(<div key={e.id}><Link to={`/users/${e.id}`}>
                {e.id}
                {e.first_name}
            </Link></div>))}
        </div>
    )
}