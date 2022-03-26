import styled from "styled-components"

export const Button = styled.button`
    font-weight:550;
    width:120px;
    height:35px;
    background:white;
    border:${props => props.dashed ? "1px dashed #dadada":props.default ? "1px solid #dadada":"none"}
    color:${props => props.link ? "#3998e6":"black"}
    background:${props => props.primary ? "#3998e6":"white"}
    color:${props => props.primary ? "white" : ""}
    
    
`   
