// function add(first,second)
// {
//     return first + second
// }

// console.log(23+23)

// function hello(h)
// {
//     if(h%2==0)
//     {
//         for(let i = 1; i < h; i++)
//         {
//             console.log("even",i%8)
//         }
//     }
//     else
//     {
//         console.log("HELLO")
//     }
// }

// export {add,hello}

import "./todo.css"
import "../images.png"

document.querySelector("img").src = "images.png"


document.getElementById("add").addEventListener("click", () => {

    document.getElementById("add").style.cssText = 
    `transform:translate(265px,-100px)`;

    document.getElementsByTagName("textarea")[0].style.cssText = 
    `display:unset`;
    document.getElementById("remove").style.cssText = 
    `transform:translate(-218px,285px)`;
}) 

document.getElementById("remove").addEventListener("click", () => {


    document.getElementsByTagName("textarea")[0].value = null

}) 

