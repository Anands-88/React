import { useSelector } from "react-redux"
import { Sidebar } from "./Sidebar"

export const Summary = () =>{

    const {todos} = useSelector((store)=> store.todo)

    const todo = todos.filter((item)=> item.status == "Todos").length;
    const inProgress = todos.filter((item)=> item.status == "InProgress").length;
    const done = todos.filter((item)=> item.status == "Done").length;

    return <div style={{display:"flex"}}>
        <Sidebar/>
        <div style={{width:"40%"}} >
            <h1 >Summary</h1>
            <div > 
                    <div className="summaryStatus">
                        <div>Todo</div>
                        <div>{todo}</div>
                    </div>
                    <div className="summaryStatus">
                        <div>In Progress</div>
                        <div>{inProgress}</div>
                    </div>
                    <div className="summaryStatus"> 
                        <div>Done</div>
                        <div>{done}</div>
                    </div>
            </div>
       </div>
    </div>
}