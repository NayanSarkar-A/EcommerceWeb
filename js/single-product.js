let mainImg=document.querySelector("#MainImg");
let smallImg=document.querySelectorAll(".small-img");
let box=document.querySelectorAll(".small-img-col");
console.log("nayan sAR")

for( let i of smallImg ){
    i.addEventListener("click",()=>{
        mainImg.src=i.src;
    })
}
// if any one click in shop box then open single product page...

let proBox=document.querySelectorAll(".product");

for (let box of proBox){
    box.addEventListener("click",()=>{
        window.location.href="single-pro.html";
    })
}


