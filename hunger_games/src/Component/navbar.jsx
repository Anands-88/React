import { Link } from "react-router-dom"

export const Navbar = () =>{

    return <div>

        <h1> <Link to="/">HUNGER GAMES ๐ฑ</Link> </h1>
        <h4> <Link to="/create">Add resturants โ</Link> </h4>
        <h3> <Link  to="/favorites">Favorites ๐งก</Link> </h3>
    </div>
}