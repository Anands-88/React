import {Link} from "react-router-dom"

export const Navbar = () =>{

    return <div style = {{border:"1px solid red",height:"50px",display:"flex", justifyContent:"end"}}>
            <div style = {{ border:"1px solid blue", height:"50px", display:"flex",justifyContent:"space-evenly", width:"300px"}}>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
       
        </div>
}
