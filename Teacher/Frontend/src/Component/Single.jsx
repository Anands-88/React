import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { GetOneTeacher,CreateClass} from "../redux/Teacher/action"
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
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
import axios from "axios";
import TextField from '@mui/material/TextField';

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




export const SingleInfo = () =>
{

    const {id} = useParams()

    const dispatch = useDispatch()
    const [Create,setCreate] = useState({
      grade:"",
      section:"",
      subject:"",
      teacher_id:id
  })

    const {user} = useSelector((store)=>{return store.teachers.info})

    useEffect(()=>{

        dispatch(GetOneTeacher(id))
    },[])
    
    if(user != undefined)
    {
        var {name,age,gender} = user[0]?.teacher_id
        var array = user
        
    }

    const Delete = (classId) =>
    {
        axios.delete(`https://intense-inlet-36398.herokuapp.com/school/class/${classId}`)
        .then(()=>{
            dispatch(GetOneTeacher(id))
        })
    }
    

  return (<div>
      <div >
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
            <StyledTableCell style={{color:"white"}} align="center">Edit</StyledTableCell>
            <StyledTableCell style={{color:"white"}} align="center">Delete</StyledTableCell>
        </TableRow>
        </TableHead>
        <TableBody style={{fontSize:"22px"}}>
                {array?.map((item,index)=>(
                    <StyledTableRow>
                        <StyledTableCell align="center"  component="th" scope="row">{index+1}</StyledTableCell>
                        <StyledTableCell align="center">{item.grade}</StyledTableCell>
                        <StyledTableCell align="center">{item.section}</StyledTableCell>
                        <StyledTableCell align="center">{item.subject}</StyledTableCell>
                        <StyledTableCell align="center">
                                <Button style={{background:"orange",fontWeight:800}}variant="contained"> <Link id="Link" to={`/edit/${item._id}`}>EDIT</Link> </Button>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <Button style={{background:"red",fontWeight:800 }}variant="contained" onClick={()=>{Delete(item._id)}}> DELETE </Button>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
        </TableBody>
    </Table>
</TableContainer>
    </div>
    <div>
      <h2>Create New Session </h2>
         <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 800, margin:"auto",marginTop:"0%",border:"2px solid gray", marginBottom:"2%"  }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">SL.No</StyledTableCell>
                <StyledTableCell align="center">Class</StyledTableCell>
                <StyledTableCell align="center">Section</StyledTableCell>
                <StyledTableCell align="center">Subject</StyledTableCell>
                <StyledTableCell  align="center">Submit</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody style={{fontSize:"22px"}}>
                    <StyledTableRow>
                        <StyledTableCell align="left"  component="th" scope="row">{1}</StyledTableCell>
                        <StyledTableCell align="center">
                            <StyledTextField  label="Grade" id="outlined-size-small"  size="small" 
                            onChange={(e)=>{setCreate({...Create,grade:e.target.value})}} />
                            </StyledTableCell>

                        <StyledTableCell align="center">
                            <StyledTextField  label="Section" id="outlined-size-small"  size="small" 
                            onChange={(e)=>{setCreate({...Create,section:e.target.value})}} />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                            <StyledTextField  label="Subject" id="outlined-size-small" size="small" 
                            onChange={(e)=>{setCreate({...Create,subject:e.target.value})}} />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          <Button style={{background:"orange",fontWeight:800}}variant="contained"
                          onClick={()=>{dispatch(CreateClass(Create))}}> Submit </Button>
                        </StyledTableCell>
                    </StyledTableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>
    
  );
}
