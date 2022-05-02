
import {useState} from "react"
import axios from "axios"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const InputStyles = {
    width:"20%",
    marginTop:"5%",
}

export const AddCountry = () =>
{

    const [country,setCountry] = useState({
        name:""
    })

    const PostCountry = () =>
    {
        if(country.name)
        {
            axios.post("http://localhost:8883/countries",country)
            setCountry({name:""})
        }
        else
        {
            alert("Empty")
        }
    }


    return <div>
         <TextField label="Add City Name" id="outlined-size-small" defaultValue="India" size="small"
                onChange={(e)=>{setCountry({...country,name:e.target.value})}} style={InputStyles}/>
        <Button style={{background:"#a6300c",marginLeft:"2%",fontWeight:800,marginTop:"5%"}} variant="contained" onClick={()=>{PostCountry()}}>Add Country</Button>
    </div>
}