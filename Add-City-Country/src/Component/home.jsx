import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { OneCountry, getCities, getCountries,sortBypop, Delete, Filter} from "../Redux/Country/action"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 18,
      fontWeight:800
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const styles = {
    textDecoration:"none",
    color:"white",
    fontWeight:800
}

const buttonStyles = {
    color:"white",
    fontWeight:800,
    height:30,
    width:100,
    background:"#265ab9"
}

const selectStyles = {
    width:150,
    height:30
}




export const Home = () =>
{
    const dispatch = useDispatch()
    
    useEffect(()=>{

        dispatch(getCities())
        dispatch(getCountries())

    },[])

    const cities = useSelector((store)=> {return store.cities})
    const countries = useSelector((store)=> {return store.countries})


    return <div>
            <div className="buttonsBar" > 
                <Select style={selectStyles} label="Country"onChange={(e)=>{dispatch(Filter(e.target.value))}}>
                    {countries?.map((elem)=>(
                        <MenuItem value={elem.name}>{elem.name}</MenuItem>))}
                </Select>
                <Button style={buttonStyles} variant="contained" onClick={()=>{dispatch(getCities())}}>Reset</Button>
                <Button style={buttonStyles} variant="contained" onClick={()=>{dispatch(sortBypop("asc"))}}>Asc</Button>
                <Button style={buttonStyles} variant="contained"onClick={()=>{dispatch(sortBypop("desc"))}}>Desc</Button>
            </div>
        
        <TableContainer component={Paper} style={{marginTop:"2%"}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="right">Country</StyledTableCell>
                    <StyledTableCell align="right">City</StyledTableCell>
                    <StyledTableCell align="right">Population</StyledTableCell>
                    <StyledTableCell align="right">Edit</StyledTableCell>
                    <StyledTableCell align="right">Delete</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {cities.map((elem)=>(
                        <StyledTableRow key={elem.id}>
                            
                            <StyledTableCell component="th" scope="row">{elem.id}</StyledTableCell>
                            <StyledTableCell align="right">{elem.country}</StyledTableCell>
                            <StyledTableCell align="right">{elem.city}</StyledTableCell>
                            <StyledTableCell align="right">{elem.population}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Button variant="contained" onClick={()=>{dispatch(OneCountry(elem.id))}} > 
                                <Link style={styles} to={`/edit/${elem.id}`}>Edit</Link> 
                                </Button>
                                </StyledTableCell>
                            <StyledTableCell align="right">
                                <Button style={styles,{background:"#f14438"}} variant="contained" onClick={()=>{dispatch(Delete(elem.id))}}>Delete</Button>
                                </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>    
            </Table>
        </TableContainer>
    </div>
}

    
