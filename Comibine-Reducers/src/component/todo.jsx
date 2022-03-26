import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../Redux/Todo/action"
import { Link } from "react-router-dom"

export const Todo = () => {

    const [store,setStore] = useState("")
   const {todo} = useSelector((store)=>store.todo)
 
   const dispatch = useDispatch()
   
    useEffect(()=>{
        getData()
    },[])

    const storeData = () =>
    {
        axios.post(`http://localhost:8888/todos`,{title:store,status:"False"})
        .then(()=>{getData()})
    }

    const getData = () =>{
        axios.get(`http://localhost:8888/todos`).then(({data})=>{

            dispatch(addTodo(data))
        })
    }

    return <div>
        <input type="text" onChange={(e)=>{setStore(e.target.value)}} />
        <button onClick={()=>{storeData(store)}}>Add Todo</button>
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Click</td>
                </tr>
            </thead>
            <tbody>
            {todo.map((elem)=>(
                <tr key={elem.id}>
                    <td>{elem.title}</td>
                    <td><button> <Link className="link" to={`/todo/${elem.id}`}>Click</Link> </button></td>
                </tr> ))}
            </tbody>
        </table>
    </div>  
}