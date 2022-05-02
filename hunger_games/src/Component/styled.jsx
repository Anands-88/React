import styled from "styled-components"
export const FoodBox  = styled.div`
width:45%;
height:250px;
border:1px solid orange;
border-radius:10px;
display:flex;
@media (min-width:376px) and (max-width: 768px) {
    width:90%;
  }
@media (max-width: 375px) {
width:100%;
margin-top:2%;
}
`

export const Image = styled.div`
width:44%;
height:100%;
margin-right:2%;
@media (min-width:376px) and (max-width: 768px) {
    width:60%;
  }
@media (max-width: 375px) {
width:50%;
margin-right:5%;
}
`

export const Item = styled.div
`width:57%;
text-align:left;
@media (min-width:376px) and (max-width: 768px) {
    width:50%;
  }
@media (max-width: 375px) {
font-size:15px;
}

`
export const Input = styled.input
`
width:90%;
height:30px;
font-weight:900;
margin:2% 0%;
border-radius:10px;
font-size:17px;
@media (min-width:376px) and (max-width: 768px) {
    width:90%;
  }
@media (max-width: 375px) {
width:88%;
margin-right:5%;
}
`

export const Button = styled.button
`
width:70px;
height:40px;
font-size:20px;
border:none;
border-radius:10px;
background:purple;
color:white;
font-weight:800;
@media (min-width:376px) and (max-width: 768px) {
    width:16%;
    height:55px;
    font-size:22px;
  }
@media (max-width: 375px) {
width:20%;
height:30px;
font-size:14px;
}
`

export const Box = styled.div
`
width:30%;
height:80px;
align-items:center;
display:flex;
justify-content: space-around;
border:1px solid red;
background:rgb(252, 181, 122);
border-radius:20px;
margin-bottom:5%;

@media (min-width:376px) and (max-width: 768px) {
    width:100%;
    margin-bottom:1%;
  }
@media (max-width: 375px) {
width:100%;
border-radius:1px;
height:40px;
font-size:10px;
margin-bottom:1%;
}
`