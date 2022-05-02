import axios from "axios"
import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { log_Out } from "../Redux/Login/action"
import { Info,Button } from "./styled"


export const Sidebar = ({todos}) =>{

    const [profile,setProfile] = useState()

    const {details} = useSelector((store)=>{return store.auth});
    let {username,token} = details;
    const dispatch = useDispatch()

    todos = todos || useSelector((store)=>{return store.todo.todos});

    useEffect(()=>{
        axios.get(`https://masai-api-mocker.herokuapp.com/user/${username}`,
        {headers:{"Authorization": `Bearer ${token}`}})
        .then(({data})=>{setProfile(data)})
    },[])
    console.log("Profile",todos)
    const Personal = todos?.filter((el)=> el.tags.personal).length
    const Official = todos?.filter((el)=> el.tags.official).length
    const Others = todos?.filter((el)=> el.tags.others).length

    const Total = Personal + Official + Others||0;

    return <div style={{border:"1px solid grey",width:"25%"}}>
            <div className="Info">
                <h3>Profile Info</h3>
                <Info> <b>Name</b>: {profile?.name}</Info>
                <Info> <b>Username</b>: {profile?.username}</Info>
                <Info> <b>Mobile</b>: {profile?.mobile}</Info>
                <Info> <b>Email</b>: {profile?.email}</Info>
                <Info> <b>Description</b>: {profile?.description}</Info>
            </div>
            <br />
            <hr />
        <br />
        <div className="Info count">
            <table>
                <tbody>
                    <tr style={{background:"rgb(183, 231, 231)"}}>
                        <td>All</td>
                        <td>{Total}</td>
                    </tr>
                    <tr style={{background:"#ec9a56"}}>
                        <td>Personal</td>
                        <td>{Personal}</td>
                    </tr>
                    <tr style={{background:"#ca8ad6"}}>
                        <td>Official</td>
                        <td>{Official}</td>
                    </tr>
                    <tr style={{background:"#91e798"}}>
                        <td>Others</td>
                        <td>{Others}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="logout" onClick={()=>{dispatch(log_Out())}}>Log Out</div>

    </div>
}