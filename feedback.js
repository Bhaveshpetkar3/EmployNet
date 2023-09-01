let star=document.querySelectorAll(".four9");
let stars=["one","two","three","four","five"];
for(let i=0;i<5;i++){
    star[i].addEventListener("click", function(){
        for(let j=0;j<=i;j++){
            star[j].setAttribute("src","gallery/"+stars[j]+".png");
        }
        for(let j=i+1;j<5;j++){
            star[j].setAttribute("src","gallery/star.png");
        }
    });
}