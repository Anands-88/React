import axios from "axios"
import { useEffect,useState } from "react"
import { Button, FoodBox,Image, Item, Box } from "./styled";

export const RestaurantDetails = ({getdata}) => {

    const [data,setData] = useState();
    const [page,setPage] = useState(1);
    const [sort,setSort] = useState("asc")
    const [payment,setPayment] = useState("All")

    useEffect(()=>{
        axios.get(`http://localhost:8881/get-restaurants`).then(({data})=>{
            setData(data)
        })
    },[])

    useEffect(()=>{
        sortbyRating()

        return () =>
        {
            console.log("Clean")
        }
    },[page,sort,payment])

    const sortbyRating = (rate) =>{
        let rating = rate || 2;
       
        axios.get(`http://localhost:8881/get-restaurants?ratings_gte=${rating}&payment.${payment}=true&_page=${page}&_limit=6&_sort=cost_for_two&_order=${sort}`)
        .then(({data})=>{
            setData(data)
        })
    }

    if(!data)
    {
        return <div></div>
    }
    let len = data.length; 
    let arr = ""; 
    let pay = "";
    if(len==0)
    {
        return <div>
            <h1>DATA IS NOT HERE</h1>
            <button id="prev" style={{background:page==1?"red":"blue"}} disabled={page==1} onClick={()=>{setPage(page-1)}}>Prev</button>
        </div>
    }
    return <>
            <div style={{height:"100px"}}>
                
                <div className="buttonbox">
                    <Box>
                        <Button onClick={()=>{sortbyRating(4)}}>4⭐</Button>
                        <Button onClick={()=>{sortbyRating(3)}}>3⭐</Button>
                        <Button onClick={()=>{sortbyRating(2)}}>2⭐</Button>
                        <Button onClick={()=>{sortbyRating(1)}}>1⭐</Button>
                    </Box>
                    <Box>
                        <Button onClick={()=>{setPayment("Cash")}}>Cash</Button>
                        <Button onClick={()=>{setPayment("Card")}}>Card</Button>
                        <Button onClick={()=>{setPayment("UPI")}}>UPI</Button>
                        <Button onClick={()=>{setPayment("Cash")}}>All</Button>
                    </Box>
                    <Box>
                        <Button onClick={()=>{setSort("asc")}}>Asc</Button>
                        <Button onClick={()=>{setSort("desc")}}>Desc</Button>
                    </Box>
                    
                </div>
            </div>
            <div className="display">
                
                {data.map((item)=>(
                    pay="",
                    Object.entries(item.payment).filter((value)=>{return value[1]==true}).map((el)=>{
                        pay = pay + el[0]+ " ";
                    }),
                    arr = item.categories,
                    <FoodBox key={item.id} onClick={(e)=>{getdata(item)}}>
                        <Image>
                            <img src={item.images} alt="" width="100%" height="100%" />
                        </Image>
                        <Item>
                            <h3>{item.item}</h3>
                            <div style={{marginTop:"-3%",marginBottom:"3%"}}><b>Categories: </b>
                                <kbd> {arr[0]}, </kbd>
                                <kbd>{arr[1]}</kbd>
                            </div>
                           <div> <b>Cost for Two: </b> 
                                <b>{item.cost_for_two}</b>
                           </div>
                            <div style={{marginTop:"3%"}}>
                            <b>Payment : </b>
                            <span>{pay}</span>
                            </div>
                            <h3>Rating: {item.ratings}⭐</h3>
                            <p>Reviews: {item.total_reviews}</p>
                            <p>Votes : {item.total_votes}</p>
                        </Item>
                    </FoodBox>
                ))}
            </div>
            <div>
                
                <button id="prev" style={{background:page==1?"red":"blue"}} disabled={page==1} onClick={()=>{setPage(page-1)}}>Prev</button>
                <button id="next" style={{background:len==0?"red":"blue"}} disabled={len==0} onClick={()=>{setPage(page+1)}}>Next</button>
            </div>
    </>
}