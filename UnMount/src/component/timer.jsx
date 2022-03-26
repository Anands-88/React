import { useState, useEffect} from "react"


export const Timer = ({startTime,endTime})=>
{
    const [count,setCount] = useState(startTime)
    
    let color = ""

    useEffect(()=>{
        const time = setInterval(()=>{
            console.log("count",count)
            setCount((prev)=>{
                if(prev == endTime-1)
                {
                    clearInterval(time)
                }
                return prev+1
            })
        },1000)

        return ()=>{
            clearInterval(time)
            console.log("Cleaned")
        }

    },[])
    
    if(count%2==0)
    {
        color = "orange"
    }
    else
    {
        color = "red"
    }
    return <div>
        <h1 style={{color:color}}>Count: {count}</h1>
        <div>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
    </div>


//     const[timer,setTimer] = useState(10)
    
//     useEffect(()=>
//     {
//        const id = setInterval(()=>{
//             console.log("interval",timer)
//             setTimer((prev) => 
//             {
//                 if(prev <= 1)
//                 {
//                     clearInterval(id)
//                     return 0
//                 }
//                  return prev-1})
//         },1000)

//     return ()=> {
//         console.log("Cleaned")
//         clearInterval(id) // when unmounting , to clear setinterval
        
//     }

// },[])

//     return <h1>Time:{timer}</h1>

    
}