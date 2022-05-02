import { useSelector } from "react-redux"
import { Link } from "react-router-dom"




const styles = {
    fontSize:"22px",
    color:"white",
    fontWeight:900,
    marginLeft:"5%",
    marginRight:"5%",
    marginTop:"1%"
}
  

export const Navbar = () =>{

    const {user} = useSelector((store)=>{return store.user})
    const {isAuth} = useSelector((store)=>{return store.user})

    const {username} = user

    return <div style={{background:"rgb(250, 100, 0)",height:"60px",display:"flex",justifyContent:"space-between"}}>
        {isAuth?<kbd style={styles} > <Link id="Link" to="/">Home</Link> </kbd>:<kbd>.</kbd>}
    <kbd style={styles}>{username}</kbd>
    </div>
    
}
