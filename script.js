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

    

}


main()