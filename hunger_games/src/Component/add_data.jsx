import axios from "axios"
import { useState,useRef} from "react"
import { Input } from "./styled"

export const Form = () =>{

    const price = useRef(1)

    const [store,setStore] = useState({
       images : "http://getinfolist.com/wp-content/uploads/2014/04/indian-food-salinda-41c0.jpg",
       item : "",
       categories : [],
       cost_for_one :price.current,
      cost_for_two:price.current*2-20,
       ratings : 0,
       total_reviews :0,
       total_votes :0,
       payment : {
           Cash:false,
            Card:false,
            UPI:false
        }

    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(store,"STORE")
        // axios.post("http://localhost:8881/get-restaurants",store)
    }


    return <div className="formBox">
        <form action="" onSubmit={handleSubmit}>
            <Input type="url" className="images" placeholder="Enter Image URL(optional)" onChange={(e)=>{setStore({...store,images:e.target.value})}}/>
            <Input type="text" className="name" placeholder="Enter Item Name" onChange={(e)=>{setStore({...store,item:e.target.value})}}/>
            
           <div style={{display:"flex",marginLeft:"7%"}}>
                <label>South India</label>
                <input type="checkbox" name="South India" id="" onClick={(e)=>{setStore({...store,categories:[...store.categories,e.target.name]})}} style={{marginRight:"7%"}}/>
                <label>North India</label>
                <input type="checkbox" name="North India" id="" onClick={(e)=>{setStore({...store,categories:[...store.categories,e.target.name]})}} style={{marginRight:"7%"}}/>
                <label>Others</label>
                <input type="checkbox" name="Others" id="" onClick={(e)=>{setStore({...store,categories:[...store.categories,e.target.name]})}}/>
           </div>

            <Input type="number" name="" id="" placeholder="Price of one Item" onChange={(e)=>{}}/>
            <Input type="number" name="" id="" placeholder = "Ratings out of 5"onChange={(e)=>{setStore({...store,ratings:e.target.value})}}/>
            <Input type="number" placeholder="Reviews Count" onChange={(e)=>{setStore({...store,total_reviews:e.target.value})}}/>
            <Input type="number" placeholder="Total Votes" name="" id="" onChange={(e)=>{setStore({...store,total_votes:e.target.value})}}/>
           
            <div style={{display:"flex",margin:"0 0 5% 23%"}}>
                <label>Card</label>
                <input type="checkbox" name="Card" id="" onClick={(e)=>{setStore({...store,payment:{...store.payment,Cash:true}})}} style={{marginRight:"11%"}}/>
                <label>Cash</label>
                <input type="checkbox" name="Cash" id="" onClick={(e)=>{setStore({...store,payment:{...store.payment,Card:true}})}} style={{marginRight:"11%"}}/>
                <label>UPI</label>
                <input type="checkbox" name="Cash" id="" onClick={(e)=>{setStore({...store,payment:{...store.payment,UPI:true}})}} style={{marginRight:"11%"}}/>
            </div>

            <button id="Submit">Submit</button>
        </form>
    </div>
}