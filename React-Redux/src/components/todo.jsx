import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../Redux/action";

export const Todo = () =>{

    const todo = useSelector((store)=> store.todo)

    const dispatch = useDispatch()

    const [store,setStore] = useState("");

    useEffect(()=> {

        getdata()
    },[])

    const postData = () =>{

        axios.post(`http://localhost:8888/todos`,{title:store,status:"False"})
        getdata();
    }
    
    const getdata = () =>{

        axios.get(`http://localhost:8888/todos`).then(({data})=>{

            dispatch(addTodo(data))
        })
    }

    const deleteData = (id)=>
    {
        axios.delete(`http://localhost:8888/todos/${id}`).then(()=>getdata())
    }
   
    return <div className="todo">
        <input type="text" onChange={(e)=>{
            setStore(e.target.value)
        }}/>
        <button onClick={()=>{
            postData()
        }}>Add Todo</button>

        <div className="table">
            <table border="1" >
                <thead>
                    <tr>
                        <td>Todo Title</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                  {todo.map((item,i)=>(
                      <tr key={i}>
                          <td> <Link style={{textDecoration:"none",fontSize:"20px", color:"black"}} to={`/todo/${item.id}`}>{item.title}</Link></td>
                          <td><button onClick={()=>{deleteData(item.id)}}>Remove</button></td>
                      </tr>
                  ))}
                </tbody>
            </table>
        </div>
        
    </div>
}