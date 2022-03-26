import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"


export const TodoDetails = () =>{

//    const todo =  useSelector((store)=> store.todo)
    let [data,setData] = useState()
   const {id} =  useParams()
//    const [status,setStatus] = useState("False")

   useEffect(()=>{
       
    getData()
    
   },[])

   const getData = () =>{
    axios.get(`http://localhost:8888/todos/${id}`).then(({data})=>{

    setData(data)
        // dispatch(addTodo(data)
    })
   }

   const changeStatus = (value) =>{
    // setData(data.status = data.status=="False"?"True":"False")
        data = {title:data.title,status:value,id:data.id}
        updateData(data)
   }

   const updateData = (data)=>{
       axios.put(`http://localhost:8888/todos/${id}`,data)
    //    setData(data)
       getData()
   }

   const deleteData = (id)=>
    {
        axios.delete(`http://localhost:8888/todos/${id}`)
    }

   if(data==undefined)
   {
       return <div></div>
   }
    return <div className="table">
    <table border="1" >
        <thead>
            <tr>
                <td>Todo Title</td>
                <td>Status</td>
                <td>Remove</td>
            </tr>
        </thead>
        <tbody>
        <tr key={data.id}>
          <td>{data.title}</td>
          <td><button onClick={()=>{changeStatus(data.status=="False"?"True":"False")}}>{data.status}</button></td>
            <td><button onClick={()=>{deleteData(data.id)}}> <Link to="/" style={{ textDecoration:"none",color:"black" }}>Remove</Link> </button></td>
      </tr>
       </tbody>
    </table>
</div>
}