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
let n3 = document.querySelector(".five25");
n3.style.height=n1.offsetHeight+"px";
n.innerHTML=n1.innerHTML;
if(window.innerWidth<=500){
    n2.prepend(n);
    n2.style.backgroundColor = "white";
    n2.style.padding="1rem 0";
    n2.setAttribute("id","fifth1");
    n3.style.height="100%";
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

let prof = document.querySelector(".five3");
let prof2 = document.querySelector(".five61");
let prof3 = document.querySelector(".five62");
prof.addEventListener("click", function(){
    prof2.style.display="block";
    prof3.style.visibility="visible";
    prof3.style.transform="translate(-50%, -50%) scale(1)";
});

let back = document.getElementById("five2");
back.addEventListener("click", function(){
    prof3.style.visibility="hidden";
    prof3.style.transform="translate(-50%, -50%) scale(0.01)";
    prof2.style.display="none";
})