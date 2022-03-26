import { useState } from "react"
import {Input} from "./GroceryInput"
import {List} from "./GroceryList"

export const Groceries = () =>{

const [store,setStore] = useState([])

    const addList = (data) =>
    {
        setStore([...store,data]) // pushing new data to array   
    }

    const removeList = (index) =>
    {
        store.splice(index,1)
        setStore([...store])
    }

    return <>
        <Input pass={addList}/>
        {store.map((data,index) => (
        <List func={removeList} send={[data,index]}/> ))}
        
    </>
}