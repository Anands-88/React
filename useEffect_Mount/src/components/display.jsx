import axios from "axios"
import { useState, useEffect} from "react"

export const Display = ({click}) =>
{
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    useEffect(() =>
    {
        showData()
    },[page])
 
    const showData = () =>
    {
        axios.get(`http://localhost:1235/data_storage?_limit=5&_page=${page}`).then((res =>
        {
            setData(res.data)
        }))
    }

    if(click)
    {
        showData()
        click = false;
    }
    
    return <div className="table">
        <table border='1'>
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
            {data.map(({title,id},index)=>(
                <tr key={id}>
                    <td>{title}</td>
                    <td><button onClick={(e)=>
                    {
                        axios.delete(`http://localhost:1235/data_storage/${id}`)
                        data.splice(index,1)
                        setData(data)  

                        showData()

                    }}>Remove</button></td>
                </tr>))}
            </tbody>
         </table>
        <br />
        <button disabled={page==1} style={page==1?{background:"red"}:{background:"purple"}}onClick={()=>
        {
            console.log('Hello',page)
            setPage(page-1)

        }}>Prev</button>
        <button onClick={()=>
        {
            setPage(page+1)
            console.log('Hello',page)

        }}>Next</button>
    </div>
}