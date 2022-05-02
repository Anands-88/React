
import axios from "axios";
import { createContext, useReducer,useState,useEffect} from "react";

const initialState = 
{
    name:"",
    age:0,
    dob:"",
    address:"",
    state:"",
    pincode:0,
}

const reducer = (state,{type,payload})=>{
    switch (type){
        case "ADD_NAME":
            return {...state,name:payload}
        case "ADD_AGE":
            return {...state,age:payload}
        case "ADD_DOB":
            return {...state,dob:payload}
        case "ADD_ADDRESS":
            return {...state,address:payload}
        case "ADD_STATE":
            return {...state,state:payload}
        case "ADD_PIN":
            return {...state,pincode:payload}
        default:
            return state;
    }
        
}

export const RegistrationContext = createContext()

export const RegistrationContextProvider = ({children}) =>{

    const [state,dispatch] =  useReducer(reducer,initialState)

    function PostData(){

        console.log("Hello",state)
        axios.post("http://localhost:8888/User",state)
    }


    return <RegistrationContext.Provider value={{state,dispatch,PostData}}>{children}</RegistrationContext.Provider>
}