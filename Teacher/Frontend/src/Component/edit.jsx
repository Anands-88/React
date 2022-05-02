import { useEffect, useState} from "react"
import {useParams,useNavigate} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { getOneClass} from "../redux/Teacher/action"
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import axios from "axios";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize:17,
      fontWeight:800,
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "orange",
    width:300,
    marginTop:"5%",
    marginLeft:"5%",
    height:30,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    fontSize:22,
    fontWeight:800,
    textAlign: 'center',
    }));

     const StyledTextField = styled(TextField)(({ theme }) => ({
      background:"white"
    }));



export const Edit = () =>
{

    const {id} = useParams()
    const navigate = useNavigate()

    const [edited,setEdited] = useState({
        grade:"",
        section:"",
        subject:""
    })

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneClass(id))
    },[])

    const {user} = useSelector((store)=>{return store.teachers.info})
    const Class  = useSelector((store)=>{return store.teachers.edition})
    console.log(Class)
    if(user != undefined)
    {
        var {name,age,gender} = user[0]?.teacher_id
        
    }

    const UpdateData = () =>{
        axios.put(`https://intense-inlet-36398.herokuapp.com/school/class/${id}`,edited)
        .then((res)=>{
        navigate(`/teacher/${Class.teacher_id}`)
    })

    }

  return (<div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid  style={{display:"flex",margin:"auto"}}>
            <Item>Name: {name}</Item>
            <Item>Age: {age}</Item>
            <Item>Gender : {gender}</Item>
          </Grid>
      </Grid>
    </Box>
    </div>
    <div>
         <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 800, margin:"auto",marginTop:"5%",border:"2px solid gray", marginBottom:"2%"  }} aria-label="customized table">
        <TableHead>
        <TableRow>
            <StyledTableCell align="center">SL.No</StyledTableCell>
            <StyledTableCell align="center">Class</StyledTableCell>
            <StyledTableCell align="center">Section</StyledTableCell>
            <StyledTableCell align="center">Subject</StyledTableCell>
            <StyledTableCell  align="center">Edit</StyledTableCell>
        </TableRow>
        </TableHead>
        <TableBody style={{fontSize:"22px"}}>
                <StyledTableRow>
                    <StyledTableCell align="left"  component="th" scope="row">{1}</StyledTableCell>
                    <StyledTableCell align="center">
                        <StyledTextField  label={Class.grade} id="outlined-size-small" defaultValue={Class.grade}  size="small" 
                        onChange={(e)=>{setEdited({...edited,grade:e.target.value})}} />
                        </StyledTableCell>

                    <StyledTableCell align="center">
                        <StyledTextField  label={Class.section} id="outlined-size-small" defaultValue={Class.section}  size="small" 
                        onChange={(e)=>{setEdited({...edited,section:e.target.value})}} />
                    </StyledTableCell>

                    <StyledTableCell align="center">
                         <StyledTextField  label={Class.subject} defaultValue={Class.subject} id="outlined-size-small" size="small" 
                         onChange={(e)=>{setEdited({...edited,subject:e.target.value})}} />
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <Button style={{background:"orange",fontWeight:800}}variant="contained"
                      onClick={()=>{UpdateData()}}> Submit </Button>
                    </StyledTableCell>
                </StyledTableRow>
        </TableBody>
    </Table>
</TableContainer>
    </div>
  </div>
    
  );
}
