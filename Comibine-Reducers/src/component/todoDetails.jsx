import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"


export const TodoDetails = () =>{

    const {id} = useParams()
    const [todo,setTodo] = useState()
    const token = JSON.parse(localStorage.getItem("Login"))

    useEffect(()=>{
        axios.get(`http://localhost:8888/todos/${id}`).then(({data})=>{

            setTodo(data)
        })
        
    },[])

    const deleteData = (id) =>{
        axios.delete(`http://localhost:8888/todos/${id}`)
    }

    const updateData = (value) =>{
        axios.patch(`http://localhost:8888/todos/${id}`,{status:value})
        setTodo({...todo,status:value})
    }

    if(!todo) return <div></div>

    if(token == "")
    {
        return<div>PLease Login</div>
    }

    return<table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
        <tr key={todo.id}>
            <td>{todo.title}</td>
            <td><button onClick={()=>
                { updateData(todo.status == "False"?"True":"False")  }}
                >{todo.status}</button></td>
            <td><button onClick={()=>{deleteData(todo.id)}}><Link className="link" to={"/"}>Remove</Link> </button></td>
        </tr>
        </tbody>
    </table>
}