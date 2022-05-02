import {Link} from "react-router-dom"
import { styles } from "./styled"
export const Navbar = () =>{
    return <div className="navbar">
       <div id="headings">
            <Link style={styles}  to="/">Home</Link>
            <Link style={styles} to="/login">Login</Link>
            <Link style={styles} to="/create">Add Tasks</Link>
            <Link style={styles} to="/summary">Summary</Link>
       </div>
    </div>
}