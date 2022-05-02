import { useReducer, useState} from "react";
import {Sidebar} from "./Sidebar"
import { v4 as uuid } from 'uuid';
import { AddTodoTask } from "../Redux/Todos/action";
import { useDispatch } from "react-redux";
import {SubButton,FirstSide, CreateInput, CheckBox, SecondSide } from "./styled";

const initState = {
    title:"",
    description:"",
    status:"",
    subtasks:[],
    tags:{official:false,personal:false,others:false},
    date:""
}

const reducer = (state,{type,payload}) =>
{
    switch (type)
    {
        case "ADD_TITLE":
            return {...state,title:payload};
        case "ADD_DESC":
            return {...state,description:payload}
        case "ADD_STATUS":
            return {...state,status:payload}
        case "ADD_SUBTASK":
            return {...state,subtasks:[...state.subtasks,payload]}
        case "SUBTASK_TOGGLE" :
            const toggle = state.subtasks.map((el)=>(
                el.id === payload.id ? {...el,status:payload.status}:el
            ))
            return {...state,subtasks:toggle}
        case "DELETE_SUBTASK":
            const delete_subtask = state.subtasks.filter((el)=> el.id !== payload)
            return {...state,subtasks:delete_subtask}
        case "ADD_TAG":
            return {...state,tags:{...state.tags,...payload}}
        case "ADD_DATE":
            return {...state,date:payload}
        case "RESET":
            return {...state,...initState}
        default:
            return state;
    }
}

export const TodoCreate = () =>
{
    const [subTask,setSubTask] = useState()
    const[state,dispatch] = useReducer(reducer,initState)

    const reduxDispatch = useDispatch()

   const {title,description,status,subtasks,tags,date} = state;
   
   const {personal,official,others} = tags

    const storeData = () =>{
        reduxDispatch(AddTodoTask(state))
        dispatch({type:"RESET"})
    }

    return <div style={{display:"flex"}}>
            <Sidebar/>
            <div style={{width:"80%",display:"flex"}}>
                <FirstSide>
                    <CreateInput type="text" onChange={(e)=>{dispatch({type:"ADD_TITLE",payload:e.target.value})}} 
                    value={state.title} placeholder="Title of the Task" />
                    <br />
                    <br />
                    <CreateInput type="text" onChange={(e)=>{dispatch({type:"ADD_DESC",payload:e.target.value})}} 
                    value={state.description} placeholder="Task Description"/>
                    <br />
                    <br />
                <label> <CheckBox type="radio" 
                                onChange={(e)=>{dispatch({type:"ADD_STATUS",payload:"Todos"})}} 
                               checked={status === "Todos"} />
                   Todo </label>
                    <br />
                <label>
                        <CheckBox type="radio" onChange={(e)=>{dispatch({type:"ADD_STATUS",payload:"InProgress"})}} checked={status === "InProgress"}/>
                        In Progress  </label>
                <br />
                    <label> 
                    <CheckBox type="radio" 
                                onChange={(e)=>{dispatch({type:"ADD_STATUS",payload:"Done"})}} 
                                checked={status === "Done"}/>
                    Done
                    </label>
                    <br />
                    <br />

                    <label>
                    <CheckBox type="checkbox" value={personal} onChange={(e)=>{dispatch({type:"ADD_TAG",payload:{personal:e.target.checked}})}} />
                        Personal
                    </label>
                    <br />
                    <label>
                    <CheckBox type="checkbox" value={official} onChange={(e)=>{dispatch({type:"ADD_TAG",payload:{official:e.target.checked}})}} />
                        Official
                    </label>
                    <br />
                    <label >
                        <CheckBox type="checkbox" value={others} onChange={(e)=>{dispatch({type:"ADD_TAG",payload:{others:e.target.checked}})}} />
                        Others
                    </label>
                    <br />
                    <br />
                    <input style={{width:"200px",height:"30px"}} type="date" onChange={(e)=>{dispatch({type:"ADD_DATE",payload:e.target.value})}} />
                </FirstSide>
                <SecondSide>
                    <div>
                        <h1>Create Subtask</h1>
                        <CreateInput type="text" value={subTask} onChange={(e)=>{setSubTask(e.target.value)}} placeholder="Sub tasks"/>
                        <br />
                        <SubButton onClick={()=>{
                            const payload = {
                                id:uuid(),
                                task:subTask,
                                status:false
                            }

                            dispatch({type:"ADD_SUBTASK",payload})
                            setSubTask("")
                        }}>Add Sub Task</SubButton>
                    </div>
                    <div>{subtasks.map((el)=>(
                        <div key={el.id}>
                            <label style={{fontSize:"28px"}}>
                                <CheckBox type="checkbox" onChange={(e)=>{dispatch({type:"SUBTASK_TOGGLE",payload:{id:el.id,status:e.target.checked}})}}/>
                            </label>
                            {el.task}
                            <SubButton onClick={()=>{dispatch({type:"DELETE_SUBTASK",payload:el.id})}}>DELETE</SubButton>
                        </div>
                    ))}</div>
                </SecondSide>
                <br />
                <br />
                    
                <SubButton onClick={()=>{storeData()}}>Add task</SubButton>
            </div>
        </div>
}