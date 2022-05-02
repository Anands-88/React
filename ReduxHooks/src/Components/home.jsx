import { Sidebar } from "./Sidebar"
import { TaskContainer } from "./taskContainer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { GetTodos } from "../Redux/Todos/action"


export const Home = () =>
{

    useEffect(()=>{

        dispatch(GetTodos())

    },[])

    const {todos} = useSelector((store)=> store.todo)
    const dispatch = useDispatch()
    console.log("Tods",todos)

    
    return <div style={{display:"flex"}}>
        <Sidebar todos={todos}/>
        <TaskContainer todos={todos.filter((item)=> item.status === "Todos")} heading="TODOS"/>
        <TaskContainer todos={todos.filter((item)=> item.status === "InProgress")} heading="INPROGRESS"/>
        <TaskContainer todos={todos.filter((item)=> item.status === "Done")} heading="DONE"/>
    </div>
}