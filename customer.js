let con = document.querySelector(".five25");
let con2 = document.getElementsByClassName("five27");
let con3 = document.createElement("div");
const back = document.querySelector(".close-window");
if(con){
  con3.innerHTML = con.innerHTML;
  for (let i = 0; i < 5; i++) {
    con.innerHTML += con3.innerHTML;
  }
}
let n = document.createElement("div");
let n1 = document.querySelector(".five26");
let n2 = document.querySelector(".five24");
let n3 = document.querySelector(".five25");
if(n1 && n2){
  n3.style.height = n1.offsetHeight + "px";
  n.innerHTML = n1.innerHTML;
  if (window.innerWidth <= 500) {
    n2.prepend(n);
    n2.style.backgroundColor = "white";
    n2.style.padding = "1rem 0";
    n2.setAttribute("id", "fifth1");
    n3.style.height = "100%";
  }
}

let m = document.querySelectorAll(".five34");
for (let i of m) {
  i.addEventListener("click", function () {
    let j = confirm("Are you sure");
    if (j == true) {
      alert("Order has been delivered successfully");
    }
  });
}
let modal = document.querySelector(".five62");
let overlay = document.querySelector(".overlay");
let prof = document.querySelector(".five3");
prof.addEventListener("click", function () {
  //prof2.style.display="block";
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  modal.style.visibility = "visible"; //have to remove
  modal.style.transform = "translate(-50%, -50%) scale(1)";
});
function closethemodal() {
  //modal.classList.add("hidden");
  modal.style.visibility = "hidden"; //have to remove
  overlay.classList.add("hidden");
  modal.style.transform = "translate(-50%, -50%) scale(0.01)";
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closethemodal();
  }
});
back.addEventListener("click", closethemodal);
overlay.addEventListener("click", closethemodal);

let obs = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("five84");
    } else{
      entry.target.classList.remove("five84");
    }
  });
});
let ani1 = document.querySelectorAll(".five84");
ani1.forEach((i)=>{obs.observe(i)});

let obs2 = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("five85");
    } else{
      entry.target.classList.remove("five85");
    }
  });
});
let ani2 = document.querySelectorAll(".five85");
ani2.forEach((i)=>{obs2.observe(i)});
