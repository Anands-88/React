import { useState } from "react"

export const Input = ({pass}) =>
{
    const [text, setText] = useState("")
    let dum = ''
    return <div>
        <input type="text" style={{fontSize:"18px"}}onChange={(event)=>
        {setText(event.target.value)}}/>

        <button onClick={()=>{pass(text)}}>Add</button>
    </div>
}
