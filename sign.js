let sign = document.getElementsByClassName("four13");
let a = document.getElementsByClassName("four1");
let b = document.getElementsByClassName("four14");
let c = document.getElementsByClassName("second5");
let d = document.getElementsByClassName("four17");
let e = document.getElementsByClassName("four18");
let f = document.getElementsByClassName("four19");
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
d[0].addEventListener("click", function(){
    e[0].style.display="block";
    b[0].style.display="none";
    c[0].textContent="Forgot Password";
});
f[0].addEventListener("click", function(){
    if(confirm("Are you sure?")){
        alert("Your password is changed.");
    }
});

