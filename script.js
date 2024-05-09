function main() {
    // adding event listener to ham and close
    const ham = document.getElementById("ham");
    ham.addEventListener("click", () => {
        document.querySelector(".nav-section-2").style.left = 0;
    })
    const close = document.getElementById("close");
    close.addEventListener("click", () => {
        document.querySelector(".nav-section-2").style.left = "-120%";
    })

    // Code for image slide

    const left = document.getElementById("left-btn");
    left.addEventListener("click", () => {
        plusslide(-1);
    })
    const right = document.getElementById("right-btn");
    right.addEventListener("click", () => {
        plusslide(1)
    })
   
    let slideindex=1;
    showslide(slideindex);

    function plusslide(n){
        showslide(slideindex+=n)
    }

    function showslide(n){
        let i=0;
        let slides=document.getElementsByClassName("slide")
        if(n>slides.length){
            slideindex=1;
        }
        if(n<1){slideindex=slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slides[slideindex-1].style.display="block";
    }

}


main()