import axios from "axios"

export const GET_TEACH = "GET-TEACH"

export const GetTeachers = (payload) =>({type:GET_TEACH,payload})

export const GET_ONE = "GETONE"

export const GetTeacher = (payload) =>({type:GET_ONE,payload})

export const EDIT_ONE = "EDIT_ONE"

export const getClass = (payload) =>({type:EDIT_ONE,payload})


export const GetTeachersAll = () => (dispatch) => //For Reset
{
    let arr = [];
    let pg = 1
    let od = 1
    let gn = "" 

    axios.get(`https://intense-inlet-36398.herokuapp.com/school/teacher?size=6&page=${pg}&order=${od}&gender=${gn}`)
    .then((res)=>{
        dispatch(GetTeachers(res.data))
    })
    
}

export const GetTeachersDetails = ({page,order,gender}) => (dispatch) => // Upon Entry
{
    let arr = [];
    let pg = page
    let od = order
    let gn = gender 

    axios.get(`https://intense-inlet-36398.herokuapp.com/school/teacher?size=6&page=${pg}&order=${od}&gender=${gn}`)
    .then((res)=>{
        dispatch(GetTeachers(res.data))
    })
    
}

export const GetOneTeacher = (id) =>(dispatch)=>{ // On clicking particular Teacher
    axios.get(`https://intense-inlet-36398.herokuapp.com/school/teacher/${id}`)
    .then((res)=>{
        dispatch(GetTeacher(res.data))
    })
}

export const getOneClass = (id) => (dispatch)=> // On class
{
    axios.get(`https://intense-inlet-36398.herokuapp.com/school/class/${id}`)
    .then((res)=>{
        dispatch(getClass(res.data))
    })
}

export const CreateClass = (payload) =>(dispatch)=>{
    let id = payload.teacher_id
    axios.post(`https://intense-inlet-36398.herokuapp.com/school/teacher/${id}`,payload)
    .then((res)=>{
        dispatch(GetOneTeacher(payload.teacher_id))
    })
}

export const GetByName = (value) =>(dispatch) =>
{
    axios.get(`https://intense-inlet-36398.herokuapp.com/school/teachers/${value}`)
    .then(({data})=>{
        console.log("Data",data)
        dispatch(GetTeachers(data))
    })
}