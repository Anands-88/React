import { Link } from "react-router-dom"

export const Navbar = () =>
{
    const styles = {
        textDecoration:"none",
        color:"black",
        fontWeight:800

    }

    return <div className="Navbar">
            <div> <Link style={styles} to="/">Home</Link> </div>
            <div> <Link style={styles} to="/add-country">Add Countries</Link> </div>
            <div> <Link style={styles} to="/add-city">Add Cities</Link> </div>
        </div>
}