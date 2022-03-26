import axios from "axios"
import { useState,useEffect} from "react"



const TableData = ({display}) =>
{
    let data = display[display.length-1]
    let visible = "none"
    if(data == undefined)
    {
        visible = "none"
        data = {id:"",name:"",age:"",address:"",department:"",salary:"",status:""}
    }
    else
    {
        visible = "unset"
    }
    const {name,age,address,department,salary,status} = data
    console.log(name,age,address,department,salary,status)
    return <div className="table" style={{display:visible}} >
        <table border="1">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                   <td>{name}</td> 
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{age}</td> 
                </tr>
                <tr>
                    <td>Address</td>
                 <td>{address}</td> 
                </tr>
                <tr>
                    <td>Department</td>
                    <td>{department}</td> 
                </tr>
                <tr>
                    <td>Salary</td>
                 <td>{salary}</td> 
                </tr>
                <tr>
                    <td>Status</td>
                 <td>{status}</td> 
                </tr>
        </tbody>
        </table> 
    </div>
}

export {TableData}
