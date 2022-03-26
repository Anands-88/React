import axios from 'axios'
import { useEffect, useState } from 'react'
// import { TableData ,Showdata} from './table'

export const Empform = ({getdata}) =>
{
    const [tobag,setTobag] = useState([])
    
    const [data, setData] = useState({
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        status:""
    })

    const inputValue = (e) =>
    {
        const{id,checked,value,type} = e.target
        
        if(type=="checkbox")
        {
            setData({
                ...data,
                status:value  
            })
        }
        else{
            setData({
                ...data,
                [id]:value
            })
        }
    }
    const Submit = (e) =>
    {   
        e.preventDefault()
        if(Object.values({...data}).join("")!="") // check if Objects keys are empty
        {
            axios.post("http://localhost:8888/details",data).then(()=>
            {
                alert("Form successfully filled, Click Submit button again to get data")
            })
                setData({
                    name:"",
                    age:"",
                    address:"",
                    department:"",
                    salary:"",
                    status:""
                })
        }
        
        Showdata()
    }

    const Showdata = () =>
    {
        axios.get("http://localhost:8888/details").then((res) => {
            
            setTobag(res.data)
        })
        getdata(tobag)
    }

    return ( 
    <div className="form">
        <h2>Employee form</h2>
        <form action="" onSubmit={Submit}>
            <input id="name" type="text" placeholder="Enter Your name" onInput={inputValue} value={data.name}/>
            <input id="age" type="number" placeholder="Enter Your age"onInput={inputValue} value={data.age}/>
            <input id="address" type="address" placeholder="Enter Your address" onInput={inputValue} value={data.address}/>
            <select name="Department" id="department" onChange={inputValue}>
                <option value="">Select Department</option>
                <option value="Production">Production</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Technical">Technical</option>
            </select>
            <input id="salary" type="number" placeholder="Enter Salary" onInput={inputValue} value={data.salary}/>
            <div className="tick" onInput={inputValue} id="status">
                <label htmlFor="">Married</label>
                <input type="checkbox" value="married"/>
                <label htmlFor="">Single</label>
                <input type="checkbox" value="single" />
            </div>
            <input type="submit" value="Submit" id="submit"/>
        </form>
    </div>
    )
}