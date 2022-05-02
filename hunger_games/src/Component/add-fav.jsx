import axios from "axios";
import { Button, FoodBox,Image, Item, Box } from "./styled";
import { useEffect, useState } from "react";
export const Favorites = ({fav}) =>{

    let pay = "";
    let arr = "";
    
    return <div>
        {fav?.map((item)=>(
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
} 