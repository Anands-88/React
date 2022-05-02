import axios from "axios"


export const ADD_TODOS = "ADD_TODOS";

export const add_todos = (payload) =>({type:ADD_TODOS,payload});


export const AddTodoTask = (payload) => (dispatch) =>{
    axios.post("http://localhost:8884/todos",payload)
    .then(()=>{
        GetTodos()
    })
}

export const GetTodos = () => (dispatch) =>{
    axios.get("http://localhost:8884/todos")
    .then(({data})=>{
        console.log("Dtas",data)
        dispatch(add_todos(data))
    })
}