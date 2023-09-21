let change_pass = document.querySelector(".seven18");
let change_pass2 = document.getElementById("seventh1");
let change_pass3 = document.querySelector(".seven14");
let change_pass4 = document.querySelectorAll(".seven13")
let change_pass5 = document.querySelectorAll(".seven4")
change_pass.addEventListener("click", function(){
    if(change_pass2.classList.contains("seven17")){
        change_pass2.classList.add("seven7");
        change_pass2.classList.remove("seven17");
        change_pass3.style.transform="rotate(0deg)";
        change_pass4[0].style.display="block";
    } else{
        change_pass2.classList.add("seven17");
        change_pass2.classList.remove("seven7");
        change_pass3.style.transform="rotate(-90deg)";
        change_pass4[0].style.display="none";
    }
});
change_pass4[2].addEventListener("click", function(){
    change_pass4[1].style.display="block";
    change_pass4[2].style.display="none";
    for(let i of change_pass5){
        i.removeAttribute("readonly");
    }
});
change_pass4[1].addEventListener("click", function(){
    change_pass4[2].style.display="block";
    change_pass4[1].style.display="none";
    for(let i of change_pass5){
        i.setAttributeAttribute("readonly", "");
    }
});