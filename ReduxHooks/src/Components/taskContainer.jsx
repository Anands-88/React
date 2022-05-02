import { TaskItem } from "./taskitem"

export const TaskContainer = ({todos,heading}) =>
{
    return <div style={{border:"1px solid red",width:"30%"}}>
        <div className="Titles">
            <div className="statusHead"><h3>{heading}</h3></div>
            {todos.map((task)=>
            <TaskItem key={task.id} {...task}/>)}

        </div>
    </div>
}