import {useEffect,useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OneCountry } from "../Redux/Country/action";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"

const InputStyles = {
    width:"90%",
    marginTop:"5%",
}

const selectStyles = {
    width:"90%",
    height:30,
    marginTop:"5%",
    marginBottom:"2%"
    
}



export const Edit = () => 
{
    const [detail,setDetail] = useState({
        country:"",
        city:"",
        population:""
    })

    const {id} = useParams()
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const single = useSelector((store)=> {return store.country})

   useEffect(()=>{
    console.log(id)
    dispatch(OneCountry(id))
   },[])

    const countries = useSelector((store)=> {return store.countries})
    
    const Update = () =>
    {
        axios.put(`http://localhost:8883/details/${id}`,detail)
        .then(()=>
        {   
            navigate("/")
             dispatch(getCities())  
             
        })
    }

    return <div className="addCityBox">
            <Select style={selectStyles} label="Country" onChange={(e)=>{setDetail({...detail,country:e.target.value})}}>
                    {countries?.map((elem)=>(
                        <MenuItem key={elem.id} value={elem.name}>{elem.name}</MenuItem>))}
            </Select>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                noValidate autoComplete="off">
                <TextField label="Edit City" id="outlined-size-small" defaultValue={single.city} size="small"
                onChange={(e)=>{setDetail({...detail,city:e.target.value})}} style={InputStyles}/>

                <TextField label="Edit Population" id="outlined-size-small" defaultValue={single.population} size="small"
                 onChange={(e)=>{setDetail({...detail,population:e.target.value})}} style={InputStyles}/>
            </Box>
                        
            <Button style={{background:"#a6300c",fontWeight:800,marginTop:"8%"}} 
            variant="contained" onClick={()=>{Update(detail)}}>Submit</Button>
    
        </div>
}
