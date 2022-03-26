
export const List = ({send,func}) =>
{    
    const [data,index] = [...send]
    return <div className="inputs">
            <div className="item">{data}</div>
            <button className="remove" onClick={(event)=>
            {
                func(index)
            }}>Remove</button>
        </div>
    
}