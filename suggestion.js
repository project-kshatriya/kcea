var suggestion = document.getElementById("suggestion")

suggestion.addEventListener("click",()=>{
    document.querySelector(".section-3").style.display="none"
   document.querySelector(".section-2").style.display="block"
})
var feedback = document.getElementById("feedback")

feedback.addEventListener("click",()=>{
    document.querySelector(".section-2").style.display="none"
   document.querySelector(".section-3").style.display="block"
})