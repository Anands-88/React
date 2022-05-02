import axios from "axios";

export const ADD_CITIES = "ADD_CITIES";

export const addCities = (payload) => ({type:ADD_CITIES,payload});

export const ADD_COUNTRIES = "ADD_COUNTRIES";

export const AddCountries = (payload) => ({type:ADD_COUNTRIES,payload});

export const GET_COUNTRY = "GET_COUNTRY";

export const getCountry = (payload) => ({type:GET_COUNTRY,payload});



export const getCountries = () => (dispatch) =>
{
    axios.get("http://localhost:8883/countries")
    .then(({data})=>{
        dispatch(AddCountries(data))
    })
}

export const getCities = () => (dispatch) =>
{
    axios.get("http://localhost:8883/details")
    .then(({data})=>{
        dispatch(addCities(data))
    })
    
}
export const PostCities = (payload) => (dispatch) => {

    axios.post("http://localhost:8883/details",payload)
    .then(()=>{ dispatch(getCities())})
}


export const sortBypop = (value) => (dispatch)=>
{
    axios.get(`http://localhost:8883/details?_sort=population&_order=${value}`)
    .then(({data})=>{
        dispatch(addCities(data))
    })
}

export const Filter = (name) => (dispatch) =>{
    axios.get(`http://localhost:8883/details?country=${name}`)
    .then(({data})=>{
        dispatch(addCities(data))
    })
}


export const Delete = (id) => (dispatch) =>{
    axios.delete(`http://localhost:8883/details/${id}`)
    .then(()=>{
        dispatch(getCities())
    })
}

export const OneCountry = (id) => (dispatch) =>
{
    axios.get(`http://localhost:8883/details/${id}`)
    .then(({data})=>
    {   
        dispatch(getCountry(data))
    })
}
