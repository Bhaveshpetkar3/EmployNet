let con = document.querySelector(".five25");
let con2 = document.getElementsByClassName("five27");
let con3=document.createElement("div");
con3.innerHTML=con.innerHTML;
for(let i=0;i<5;i++){
    con.innerHTML += con3.innerHTML;
}

let n = document.createElement("div");
let n1 = document.querySelector(".five26");
let n2 = document.querySelector(".five24");
n.innerHTML=n1.innerHTML;
if(window.innerWidth<=500){
    n2.prepend(n);
    n2.style.backgroundColor = "white";
    n2.style.padding="1rem 0";
    n2.setAttribute("id","fifth1");
}

let m = document.querySelectorAll(".five34");
for(let i of m){
    i.addEventListener("click", function(){
        let j=confirm("Are you sure");
        if(j==true){
            alert("Order has been delivered successfully");
        }
    });
}
