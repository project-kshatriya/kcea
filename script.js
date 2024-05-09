function main(){ 

const ham=document.getElementById("ham");

console.log(ham)
ham.addEventListener("click",()=>{
    document.querySelector(".nav-section-2").style.left=0;
    
})
const close=document.getElementById("close");


close.addEventListener("click",()=>{
    document.querySelector(".nav-section-2").style.left= "-120%" ;
    
})
}


main()