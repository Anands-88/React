import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { GetTodos } from "../Redux/Todos/action"
import { Task, Tags, SubTask,Button} from "./styled"

export const TaskItem = (props) =>{

    const {title,description, subtasks,status,tags,id,date} = props
    const {personal,official,others} = tags
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return <Task >
        <div>
            <h3>{title}</h3>
           <Tags> 
               <div style={{border:personal?"1px solid #83807d":"none"}}>{personal && "PERSONAL"}</div>
               <div style={{border:official?"1px solid #83807d":"none"}}>{official && "OFFICIAL"}</div>
                <div style={{border:others?"1px solid #83807d":"none"}}>{others && "OTHERS"}</div> 
            </Tags>
            <p>Description: {description}</p> 
            <div><p>Date: <b>{date}</b></p></div>
        </div>
        <br />
        <b style={{fontSize:"18px"}}>Sub Tasks</b>
        <SubTask>
            <tbody className="subtask_body">
             {   subtasks.map((el)=>(
                    <tr key={el.id}>
                            
                            <td> <input type="checkbox" checked={el.status}  onChange={(e)=>
                            {
                                const afterToggle = subtasks.map((item) => 
                                item.id == el.id ? {...el,status:e.target.checked} : item);

                                const payload = {
                                    title,
                                    description,
                                    date,
                                    tags,
                                    subtasks: afterToggle,
                                    status
                                }


                                axios.put(`http://localhost:8884/todos/${id}`,payload).then(()=>{
                                    dispatch(GetTodos())
                                })
                            }}/> </td>
                        <td>{el.task}</td>
                    </tr>
                ))}
            </tbody>
        </SubTask>
        <Button onClick={()=>{ navigate(`/todos/edit/${id}`)}}>Edit</Button>
    </Task>
}