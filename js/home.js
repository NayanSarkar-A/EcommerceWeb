let body=document.querySelector("body")
let bar=document.querySelector("#bar");
let mBar=document.querySelector(".nav-manu ");
let close=document.querySelector("#close");
let turn =true;

bar.addEventListener("click",()=>{
    if (turn){
        mBar.style.right="0px"
    }
})
close.addEventListener("click",()=>{
    if (turn){
        mBar.style.right="-3000px"
    }
})
// mBar.addEventListener("click",()=>{
//     if (turn){
//         mBar.style.right="-3001px"
//     }
// })

