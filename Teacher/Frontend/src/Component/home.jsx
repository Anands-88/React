import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { GetTeachersDetails, GetTeachersAll} from '../redux/Teacher/action';
import { Link,Navigate } from 'react-router-dom';
import { SearchInput } from './Search';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight:900,
    fontSize:17
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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
let num = 0;

export const Home = () => {

  const {isAuth} = useSelector((store)=>{return store.user})
    if(!isAuth)
    {
        return <Navigate to="/signup"/>
    }

    
    const {details} = useSelector((store)=>{return store.teachers})

    const [page,setPage] = useState(1)
    const [gender,setGender] = useState("")
    const [order,setOrder] = useState(1)


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetTeachersDetails({page,gender,order}))
        
    },[page,gender,order])

  return <div>
          <SearchInput/>
            <div style={{height:60,paddingTop:"2%"}}>
                <Button style={{marginLeft:"2%",background:"green",fontWeight:900}} variant="contained" onClick={()=>{setOrder(1)}} >Age Asc</Button>
                <Button style={{marginLeft:"2%",background:"red",fontWeight:900}} variant="contained" onClick={()=>{setOrder(-1)}} >Age Desc</Button>
                <Button style={{marginLeft:"2%",background:"teal",fontWeight:900}} variant="contained" onClick={()=>{setGender("male")}} >Male</Button>
                <Button  style={{marginLeft:"2%",background:"rgb(226, 8, 153)",fontWeight:900}} variant="contained" onClick={()=>{setGender('female')}} >Female</Button>
                <Button  style={{marginLeft:"2%",background:"orange",fontWeight:900}} variant="contained" onClick={()=>{dispatch(GetTeachersAll())}} >Reset</Button>
            </div>
            <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 800,margin:"auto",border:"2px solid gray", marginBottom:"0%"  }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">SL.No</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Age</StyledTableCell>
                    <StyledTableCell align="center">Gender</StyledTableCell>
                    <StyledTableCell align="center">Click</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody style={{fontSize:"22px"}}>
                        {details?.map((item,index)=>(
                            <StyledTableRow>
                                <StyledTableCell align="center"  component="th" scope="row">{index+1}</StyledTableCell>
                                <StyledTableCell align="center">{item.name}</StyledTableCell>
                                <StyledTableCell align="center">{item.age}</StyledTableCell>
                                <StyledTableCell align="center">{item.gender}</StyledTableCell>
                                <Button style={{background:"orange",fontWeight:800,marginTop:"5%"}}variant="contained"> <Link id="Link" to={`teacher/${item._id}`}>Click</Link> </Button>
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
        <div style={{marginTop:"5%"}}>
            <Button disabled={page==1} style={{background:page==1?"red":"",color:page==1?"white":""}} variant="contained"
            onClick={()=>{setPage(page-1)}} >Prev Page {page-1}</Button>

            <Button style={{background:"orange",marginLeft:"2%",color:"black"}}  variant="contained" >Current Page {page}</Button>
            
            <Button disabled={details==""} style={{background:details==""?"red":"",color:details==""?"white":"",marginLeft:"2%"}} variant="contained"
            onClick={()=>{setPage(page+1)}} >Next Page {page+1}</Button>
        </div>
    </div>
}
