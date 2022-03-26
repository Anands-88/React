import logo from "../logo.svg"
import favicon from "../favicon.svg"

export const Hello = () => 
{
    return <div>
        <h1>Welocome To Home page</h1>
        <img src={logo} alt="" height="80" width="80"/>
        <img src={favicon} alt="" height="80" width="80"/>
    </div>
}