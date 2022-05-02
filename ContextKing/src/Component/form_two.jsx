import {Form,Button,Input} from "./styled"
import { Link, Navigate } from "react-router-dom"
import { useReducer,useContext,useRef } from "react"
import { RegistrationContext } from "../Context/form-context"

export const TwoForm = () =>{
    let value = useRef(false);

    const {state,dispatch,PostData} = useContext(RegistrationContext)

    if(state.name == "" && state.age == 0 && state.dob == "")
    {
        return <Navigate to={"/registration/one"}></Navigate>
    }

    if(state.address != "" && state.state != "" && state.pincode.length > 5)
    {
        value.current = true
    }

    const styles = {
        textDecoration:"none",
        color:"white",
        fontSize:"18px",
        pointerEvents:value.current?"unset":"none",
    }

    return <div>
        <Form>
            <label>State Of Residence</label>
            <Input type="text" value={state.state} onChange={(e)=>{dispatch({type:"ADD_STATE",payload:e.target.value})}} />
            <label>Address</label>
            <Input type="text" value={state.address} onChange={(e)=>{dispatch({type:"ADD_ADDRESS",payload:e.target.value})}} />
            <label>Pincode</label>
            <Input type="number" value={state.pincode} onChange={(e)=>{dispatch({type:"ADD_PIN",payload:e.target.value})}} />
            <Button> <Link style={styles, {...styles,pointerEvents:"unset"}} to="/registration/one">Back</Link></Button>
            <Button style={{background:value.current?"orange":"red"}} onClick={PostData}> <Link style={styles} to="/users">Submit</Link></Button>
        </Form>
    </div>
}