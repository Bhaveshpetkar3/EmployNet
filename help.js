let b = document.getElementsByClassName("second8");
let c = document.querySelector(".second15");
let d = document.querySelectorAll(".second17");
for(let i=0;i<7;i++){
    b[i].addEventListener("click", function(){
        let j = b[i].children;
        c.innerHTML=j[1].innerHTML;
        c.style.width=j[1].clientWidth+"px";
        if(j[1].classList.contains("second11")){
            j[1].classList.remove("second11");
            j[1].classList.add("second16");
            j[1].style.height=c.offsetHeight+"px";
            d[i].style.transform="rotate(0deg)";
        } else{
            j[1].classList.remove("second16");
            j[1].classList.add("second11");
            j[1].style.height="0";
            d[i].style.transform="rotate(-90deg)";
        }
    });
}
