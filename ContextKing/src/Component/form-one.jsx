import { Form, Input,Button} from "./styled"
import { Link } from "react-router-dom"
import { useContext,useRef } from "react"
import { RegistrationContext } from "../Context/form-context"

export const OneForm = () =>{

    let value = useRef(false);

    const {state,dispatch} = useContext(RegistrationContext)

    if(state.name != "" && state.age != 0 && state.dob != "")
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
            <label>Enter Name</label>
            <Input type="text" value={state.name} onChange={(e)=>{dispatch({type:"ADD_NAME",payload:e.target.value})}}/>
            <label>Enter Age</label>
            <Input type="number" value={state.age} onChange={(e)=>{dispatch({type:"ADD_AGE",payload:e.target.value})}}/>
            <label>Enter Date of Birth</label>
            <Input type="date" value={state.dob} onChange={(e)=>{dispatch({type:"ADD_DOB",payload:e.target.value})}}/>
            <Button style={{background:value.current?"orange":"red"}} > <Link style={styles} to="/registration/two">Next</Link> </Button>
        </Form>
    </div>
}