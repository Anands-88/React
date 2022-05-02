import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useReducer } from 'react';
import Button from '@mui/material/Button';
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios"

const styles = {
    width:"90%",
    marginTop:"1%",
    marginBottom:"3%"
}

const initState = {
    name:"",
    username:"",
    email:"",
    phone:"",
    password:""
}

const reducer = (state,{type,payload}) =>
{
    switch(type)
    {
        case "ADD_NAME":
            return {...state,name:payload}
        case "ADD_USERNAME":
            return {...state,username:payload}
        case "ADD_EMAIL":
            return {...state,email:payload}
        case "ADD_PHONE":
            return {...state,phone:payload}
        case "ADD_PASSWORD":
            return {...state,password:payload}
        default:
                return state
    }
}

export const Signup = () =>
{
    const [state,dispatch] = useReducer(reducer,initState)
    const navigate = useNavigate()

    const postData = () =>
    {
        axios.post(`https://intense-inlet-36398.herokuapp.com/admin/signup`,state).then(()=>
        {
            navigate("/login")
        })


    }
    

    return <div className="FormBox">
            <h2 style={{color:"orangered",fontFamily:"sans"}}>Create Account</h2>
         <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      
            <TextField style={styles} stye label="Enter name" id="outlined-size-small" size="small" onChange={(e)=>{dispatch({type:"ADD_NAME",payload:e.target.value})}}/>
            <TextField style={styles} label="Enter username" id="outlined-size-small" size="small" onChange={(e)=>{dispatch({type:"ADD_USERNAME",payload:e.target.value})}}/>
            <TextField style={styles} label="Enter email" id="outlined-size-small" size="small" onChange={(e)=>{dispatch({type:"ADD_EMAIL",payload:e.target.value})}}/>
            <TextField style={styles} label="Enter phone" id="outlined-size-small" size="small" onChange={(e)=>{dispatch({type:"ADD_PHONE",payload:e.target.value})}}/>
            <TextField style={styles} label="Enter password" id="outlined-size-small" size="small" onChange={(e)=>{dispatch({type:"ADD_PASSWORD",payload:e.target.value})}}/>
            <Button variant="contained" onClick={()=>{postData()}} style={{marginTop:"5%",marginBottom:"6%"}} >Signup</Button>
        </Box>
        <kbd style={{fontSize:"18px"}}>Have the Account? </kbd>
        <Button variant="contained" style={{background:"green"}}> <Link id="Link" to="/login">Login</Link></Button>
    </div>
}