import {useEffect,useState} from "react";
import { PostCities } from "../Redux/Country/action";
import { useDispatch, useSelector } from "react-redux";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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

export const Cities = () => 
{
    const [detail,setDetail] = useState({
        country:"",
        city:"",
        population:""
    })

    const countries = useSelector((store)=> {return store.countries})
    const dispatch = useDispatch()
   
    return <div className="addCityBox">
            <Select style={selectStyles} label="Country" onChange={(e)=>{dispatch(Filter(e.target.value))}}>
                    {countries?.map((elem)=>(
                        <MenuItem value={elem.name}>{elem.name}</MenuItem>))}
            </Select>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                noValidate autoComplete="off">
                <TextField label="Add City Name" id="outlined-size-small" defaultValue="India" size="small"
                onChange={(e)=>{setDetail({...detail,city:e.target.value})}} style={InputStyles}/>

                <TextField label="Add Population" id="outlined-size-small" defaultValue="Bengaluru" size="small"
                 onChange={(e)=>{setDetail({...detail,population:e.target.value})}} style={InputStyles}/>
            </Box>
                        
            <Button style={{background:"#a6300c",fontWeight:800,marginTop:"8%"}} variant="contained" onClick={()=>{dispatch(PostCities(detail))}}>Submit</Button>
    
        </div>
}