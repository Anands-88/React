
import {useParams} from "react-router-dom"


export const Product = () =>
{   
    const {id} = useParams();
    return <h1>yOU ARE SEEING DETAILS OF PRODUCT - {id}</h1>

}