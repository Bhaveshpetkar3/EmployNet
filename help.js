let b = document.getElementsByClassName("second8");
for(let i of b){
    i.addEventListener("click", function(){
        let j = i.children;
        if(j[1].style.display=="none"){
            j[1].style.display="block";
            j[2].style.display="block";
        } else{
            j[1].style.display="none";
            j[2].style.display="none";
        }
    });
}