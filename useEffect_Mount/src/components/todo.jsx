import axios from "axios"
import { useState } from "react"


export  const Todo = ({bttn}) =>
{
    const [list,setList] = useState([])
    const [value,setValue] = useState("")


    return <div>
        <input value={value} onChange={(e) =>
        { setList(e.target.value)
            setValue(e.target.value) }} type="text"/>
        <button onClick={()=>
        { 
            axios.post("http://localhost:1235/data_storage",{title:list})
            bttn(true)
            setValue("")}}>Save</button>
    </div>


}