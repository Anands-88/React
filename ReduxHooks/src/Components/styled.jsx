import styled from 'styled-components'

export const styles ={ // For Link
    textDecoration:"none",
    color:"black"
}

export const Form = styled.form
`
background:orange;
margin:5% 0;
gap:10px;
display:flex;
flex-wrap :wrap;
justify-content: center;
padding-top:3%;
`

export const Input = styled.input
`
width:80%;
height:35px;
font-weight:900;
border-radius:10px;
border:none;
border-bottom:2px double red;
::placeholder{
    padding-left:4%;
}
`

export const Button = styled.button 
`
width:90px;
height:30px;
font-size:18px;
border:none;
margin-left:2%;
border:2px ridge #d8945c;
border-radius:10px;
background:#d8945c;
`

export const Submit = styled.input 
`
width:35%;
height:35px;
border-radius:10%;
border:none;
background:#c97734;;
color:white;
font-size:16px;
font-weight:900;
margin-bottom:5%;
`
// Home page Profile section

export const Info = styled.div
`
height:30px;
background:#e7bf9f;
text-align:left;
padding:5px 0 0 10px;
`

export const Task = styled.div
`
width:92%;
margin:auto;
border:1px solid #928f8d;

`

export const Tags = styled.div 
`
display:flex;
width:100%;
margin:auto;
justify-content: center;
> div{
    margin:0 2%;
    background:#e0d7afe1;
}
`

export const SubTask = styled.table
`
margin:3% auto;
width:80%;
> div{
    height:28px;
}

`

export const FirstSide = styled.div
`
width:50%;
box-shadow: rgba(240, 217, 116, 0.884) 0px 0px 0px 2px, rgba(243, 243, 243, 0.938) 0px 4px 6px -1px, rgba(255, 255, 255, 0.966) 0px 1px 0px inset;
> label{
    font-size:19px;
}
`
export const CreateInput = styled.input
`
height:30px;
margin-top:5%;
width:70%;
font-weight:800;
::placeholder{
    padding-left:4%;
}
`

export const SecondSide = styled.div
`
box-shadow: rgba(240, 217, 116, 0.884) 0px 0px 0px 2px, rgba(243, 243, 243, 0.938) 0px 4px 6px -1px, rgba(255, 255, 255, 0.966) 0px 1px 0px inset;
width:50%;
`

export const SubButton = styled.button
`
width:150px;
height:35px;
font-size:18px;
border:none;
margin-top:2%;
border:2px ridge #d8945c;
border-radius:10px;
background:#d8945c;
`

export const CheckBox = styled.input
`
border:2px solid red;
background:red;
height:20px;
width:20px;
`
