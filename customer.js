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

let last_row=document.getElementsByClassName("five96");
let l = last_row.length;
last_row[l-1].style.borderBottomRightRadius="4px";
last_row[l-1].style.borderBottomLeftRadius="4px";
last_row[l-1].style.marginBottom="1rem";

let prev_book = document.querySelectorAll(".five96");
let book_det = document.querySelector(".five99");
let book_det2 = document.querySelector(".five100");
let review = document.querySelector(".five106");
let review2 = document.querySelector(".five107");
let rev = [".five99",".five101", ".five110"];

for(let i of prev_book){
  i.addEventListener("click", function(){
    book_det.style.visibility="visible";
    book_det.style.opacity="1";
    book_det2.style.visibility="visible";
    book_det2.style.transform="translate(-50%, -50%)";
    book_det2.style.top="50%";
    book_det2.style.opacity="1";
  });
}

let star=document.querySelectorAll(".five112");
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

for(let i of rev){
  let rev2 = document.querySelector(i);
  rev2.addEventListener("click", function(){
    book_det.style.visibility="hidden";
    book_det.style.opacity="0";
    book_det2.style.visibility="hidden";
    book_det2.style.transform="translate(-50%, 0)";
    book_det2.style.top="100%";
    book_det2.style.opacity="0";
    review2.style.visibility="hidden";
    review2.style.opacity="0";
    review2.style.transform="translate(-50%, -100%)";
    review2.style.top="0%";
  });
}

review.addEventListener("click", function(){
  review2.style.visibility="visible";
  review2.style.opacity="1";
  review2.style.transform="translate(-50%,-50%)";
  review2.style.top="50%";
  book_det2.style.visibility="hidden";
  book_det2.style.transform="translate(-50%, 0)";
  book_det2.style.top="100%";
  book_det2.style.opacity="0";
});

let sub_review = document.querySelector(".five114");
sub_review.addEventListener("click", function(){
  if(confirm("Are you sure?")){
    alert("Your review is being submitted successfully!");
  }
});

if(window.innerWidth<="500"){
  let left_window = document.querySelector(".five8");
  let left_window2 = document.createElement("div");
  let left_window3 = document.querySelector(".five117");
  let left_window4 = 0;
  let left_window5 = document.querySelector(".five116");
  left_window2.innerHTML = left_window.innerHTML;
  left_window5.appendChild(left_window2);
  left_window2.style.position="absolute";
  left_window2.style.top="100%";
  left_window2.style.zIndex="1";
  left_window2.style.padding="1.5rem 0";
  left_window2.style.marginTop=".5rem";
  left_window2.style.width="7cm";
  left_window2.style.boxShadow="0px 3px 5px 2px rgba(189, 189, 189, 0.708)";
  left_window2.style.backgroundColor="white";
  left_window2.style.visibility="hidden";
  left_window2.style.transition="all .5s ease 0s";
  left_window2.style.transformOrigin="top";
  left_window2.style.transform="scaleY(0)";
  left_window3.addEventListener("click", function(){
    if(left_window4==0){
      left_window2.style.visibility="visible";
      left_window2.style.transform="scaleY(1)";
      left_window4=1;
    } else{
      left_window2.style.visibility="hidden";
      left_window2.style.transform="scaleY(0)";
      left_window4=0;
    }
  });
}
