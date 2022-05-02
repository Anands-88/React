import axios from "axios"
import { useReducer } from "react"
import {Link, useNavigate} from "react-router-dom"
import { Input,Button,Form,Submit,styles } from "./styled"

const initState = {
    name:"",
    email:"",
    username:"",
    password:'',
    mobile:"",
    description:""
}

const reducer = (state,{type,payload}) =>
{
    switch(type){

        case "REG_NAME":
            return {...state,name:payload}
        case "REG_EMAIL":
            return {...state,email:payload}
        case "REG_PASS":
            return {...state,password:payload}
        case "REG_USER":
            return {...state,username:payload}
        case "REG_MOBILE":
            return {...state,mobile:payload}
        case "REG_DESC":
            return {...state,description:payload}
    }
}

export const Signup = () => {

    const navigate = useNavigate()

    const [state,dispatch] = useReducer(reducer,initState)

    const submit = (e) =>
    {
        e.preventDefault()
        console.log(state)
        axios.post("https://masai-api-mocker.herokuapp.com/auth/register",state)
        .then(({data})=>{
            if(data.message == "Registration Success")
            {
                navigate("/login")
            }
            else
            {
                alert(data.message)
            }
        })
    }

    return <div style={{width:"30%",margin:"auto"}}>
        <Form action="" onSubmit={submit}>
            <Input type="text" placeholder="Enter Your Name" onChange={(e)=>{dispatch({type:"REG_NAME",payload:e.target.value})}}/>
            <Input type="text" placeholder="Enter a User Name"onChange={(e)=>{dispatch({type:"REG_USER",payload:e.target.value})}}/>
            <Input type="number" placeholder="Enter Mobile Number"onChange={(e)=>{dispatch({type:"REG_MOBILE",payload:e.target.value})}}/>
            <Input type="text" placeholder="Enter Your Email"onChange={(e)=>{dispatch({type:"REG_EMAIL",payload:e.target.value})}}/>
            <Input type="text" placeholder="Enter a Password"onChange={(e)=>{dispatch({type:"REG_PASS",payload:e.target.value})}}/>
            <Input type="text" placeholder="Description" onChange={(e)=>{dispatch({type:"REG_DESC",payload:e.target.value})}}/>
            <Submit type="submit" />
        </Form>
        <label>Already Have the Account?</label>
        <Button><Link style={styles} to="/login">LOGIN</Link></Button>
    </div>
}