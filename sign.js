let sign = document.getElementsByClassName("four13");
let a = document.getElementsByClassName("four1");
let b = document.getElementsByClassName("four14");
let c = document.getElementsByClassName("second5");
for(let i=0;i<2;i++){
    sign[i].addEventListener("click", function(){
        if(i==0){
            a[0].style.display="none";
            b[0].style.display="flex";
            c[0].textContent="Log In Form";

        } else{
            a[0].style.display="flex";
            b[0].style.display="none";
            c[0].textContent="Sign Up Form";
        }
    });
}
