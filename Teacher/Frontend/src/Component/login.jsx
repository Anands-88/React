import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import {LogUser} from '../redux/User/action'
import { useState } from 'react';
import { Navigate,Link } from "react-router-dom"


const styles = {
    width:"90%",
    marginTop:"1%",
    marginBottom:"3%"
}

export const Login = () =>
{
    const [user,setUser] = useState({
        username:"",
        password:""
    })
    const {isAuth} = useSelector((store)=>{return store.user})
    const dispatch = useDispatch()
    
    if(isAuth)
    {
        return <Navigate to="/"/>
    }

    return <div className="FormBox">
         <h2 style={{color:"orangered",fontFamily:"sans"}}>Sign In</h2>
         <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
            <TextField style={styles} label="Enter username" id="outlined-size-small" size="small" 
            onChange={(e)=>{setUser({...user,username:e.target.value})}}/>

            <TextField style={styles} label="Enter password" id="outlined-size-small" size="small" 
            onChange={(e)=>{setUser({...user,password:e.target.value})}}/>

            <Button variant="contained" onClick={()=>{dispatch(LogUser(user))}} style={{marginTop:"5%",marginBottom:"6%"}}>Login</Button>
        </Box>
        <kbd style={{fontSize:"18px"}}>Don't have an Account? </kbd>
        <Button style={{background:"green"}} variant="contained"><Link id="Link" to="/signup">Signup</Link> </Button>
    </div>
}