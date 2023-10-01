const back = document.querySelector(".close-window");
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

let obs3 = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("six9");
    } else{
      entry.target.classList.remove("six9");
    }
  });
});
let ani3 = document.querySelectorAll(".six9");
ani3.forEach((i)=>{obs3.observe(i)});

let obs4 = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("six10");
    } else{
      entry.target.classList.remove("six10");
    }
  });
});
let ani4 = document.querySelectorAll(".six10");
ani4.forEach((i)=>{obs4.observe(i)});

let asp = document.querySelectorAll(".six8");
asp[0].classList.add("six16");
for(let i=0;i<3;i++){
  asp[i].addEventListener("click",function(){
    if(asp[i].classList.contains("six16")){
      switch(i){
        case 0:
          document.querySelector(".six11").style.visibility="visible";
          break;
        case 1:
          document.querySelector(".six12").style.visibility="visible";
          document.querySelector(".six13").style.visibility="visible";
          break;
        case 2:
          document.querySelector(".six14").style.visibility="visible";
          document.querySelector(".six15").style.visibility="visible";
      }
      asp[i].classList.remove("six16");
      asp[i].style.backgroundColor="rgb(0, 157, 189)";
      if(i!=2){
        asp[i+1].classList.add("six16");
      }
    }
  })
}

if(window.innerWidth<="500"){
  let left_window = document.querySelector(".six1");
  let left_window2 = document.createElement("div");
  let left_window3 = document.querySelector(".five117");
  let left_window4 = 0;
  let left_window5 = document.querySelector(".five116");
  left_window2.innerHTML = left_window.innerHTML;
  left_window5.appendChild(left_window2);
  left_window2.style.position="absolute";
  left_window2.style.display="flex";
  left_window2.style.flexDirection="column";
  left_window2.style.alignItems="center";
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
    } 
    else if(left_window4==1){
      left_window2.style.visibility="hidden";
      left_window2.style.transform="scaleY(0)";
      left_window4=0;
    }
  });
}

let prev_book = document.querySelectorAll(".five96");
let book_det = document.querySelector(".five99");
let book_det2 = document.querySelector(".five100");
let rev = [".five99",".five101"];

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

for(let i of rev){
  let rev2 = document.querySelector(i);
  rev2.addEventListener("click", function(){
    book_det.style.visibility="hidden";
    book_det.style.opacity="0";
    book_det2.style.visibility="hidden";
    book_det2.style.transform="translate(-50%, 0)";
    book_det2.style.top="100%";
    book_det2.style.opacity="0";
    add_eq2.style.visibility="hidden";
    add_eq2.style.transform="translate(-50%, 0)";
    add_eq2.style.top="100%";
    add_eq2.style.opacity="0";
  });
}

let prev_cust = document.querySelectorAll(".six22");
let prev_cust2 = document.querySelectorAll(".six26");
let prev_cust3 = ["13rem", "15rem", "15rem"];
let prev_cust4 = document.querySelectorAll(".six23");
for(let i=0;i<3;i++){
  prev_cust[i].addEventListener("click", function(){
    switch(i){
      case 0:
        prev_cust2[1].style.transform="scaleY(0)";
        prev_cust2[2].style.transform="scaleY(0)";
        prev_cust2[1].style.height="0";
        prev_cust2[2].style.height="0";
        prev_cust4[1].style.transform="rotate(-90deg)";
        prev_cust4[2].style.transform="rotate(-90deg)";
        break;
      case 1:
        prev_cust2[0].style.transform="scaleY(0)";
        prev_cust2[2].style.transform="scaleY(0)";
        prev_cust2[0].style.height="0";
        prev_cust2[2].style.height="0";
        prev_cust4[0].style.transform="rotate(-90deg)";
        prev_cust4[2].style.transform="rotate(-90deg)";
        break;
      case 2:
        prev_cust2[0].style.transform="scaleY(0)";
        prev_cust2[1].style.transform="scaleY(0)";
        prev_cust2[0].style.height="0";
        prev_cust2[1].style.height="0";
        prev_cust4[0].style.transform="rotate(-90deg)";
        prev_cust4[1].style.transform="rotate(-90deg)";
        break;
    }
    if(prev_cust2[i].style.transform=="scaleY(0)"){
      prev_cust2[i].style.transform="scaleY(1)";
      prev_cust2[i].style.height=prev_cust3[i];
      prev_cust4[i].style.transform="rotate(0deg)";
    } else{
      prev_cust2[i].style.transform="scaleY(0)";
      prev_cust2[i].style.height="0";
      prev_cust4[i].style.transform="rotate(-90deg)";
    }
  });
}

let add_eq = document.getElementById("sixth1");
let add_eq2 = document.querySelector(".six33");
let add_eq3 = [".six36", ".five99"];

add_eq.addEventListener("click", function(){
    book_det.style.visibility="visible";
    book_det.style.opacity="1";
    add_eq2.style.visibility="visible";
    add_eq2.style.transform="translate(-50%, -50%)";
    add_eq2.style.top="50%";
    add_eq2.style.opacity="1";
});

for(let i of add_eq3){
  let rev2 = document.querySelector(i);
  rev2.addEventListener("click", function(){
    book_det.style.visibility="hidden";
    book_det.style.opacity="0";
    add_eq2.style.visibility="hidden";
    add_eq2.style.transform="translate(-50%, 0)";
    add_eq2.style.top="100%";
    add_eq2.style.opacity="0";
  });
}

let rmv_prof = document.querySelectorAll(".six34");
let rmv_prof2 = document.getElementById("sixth2");
let rmv_prof3 = document.querySelectorAll(".six37");
let rmv_prof4 = new Set();
let rmv_prof6 = Array.from(rmv_prof);

for(let i of rmv_prof6){
  let j=rmv_prof6.indexOf(i);
  i.addEventListener("click", function(){
    if(rmv_prof4.has(j)){
      rmv_prof4.delete(j);
      rmv_prof3[j].style.transform="scale(0)";
    } else{
      rmv_prof4.add(j);
      rmv_prof3[j].style.transform="scale(1)";
    }
    if(rmv_prof4.size==0){
      rmv_prof2.classList.add("six40");
      rmv_prof2.classList.remove("six41");
    } else{
      rmv_prof2.classList.remove("six40");
      rmv_prof2.classList.add("six41");
    }
  });
}
rmv_prof2.addEventListener("click", function(){
  if(rmv_prof2.classList.contains("six41") && confirm("Do you want to remove the following profile")){
    alert("Seleted profile has been removed successfully!");
  }
});

let add_prof = document.getElementById("sixth6");
let add_prof2 = document.querySelector(".six42");
let add_prof3 = [".six43", ".five99"];

add_prof.addEventListener("click", function(){
  book_det.style.visibility="visible";
  book_det.style.opacity="1";
  add_prof2.style.visibility="visible";
  add_prof2.style.transform="translate(-50%, -50%)";
  add_prof2.style.top="50%";
  add_prof2.style.opacity="1";
});

for(let i of add_prof3){
  let rev2 = document.querySelector(i);
  rev2.addEventListener("click", function(){
    book_det.style.visibility="hidden";
    book_det.style.opacity="0";
    add_prof2.style.visibility="hidden";
    add_prof2.style.transform="translate(-50%, 0)";
    add_prof2.style.top="100%";
    add_prof2.style.opacity="0";
  });
}

let avail = document.querySelectorAll(".six48");
let avail2 = document.querySelectorAll(".six50");
let avail3 = document.querySelectorAll(".six51");
for(let i=0;i<7;i++){
  avail[i].addEventListener("click", function(){
    if(avail3[i].style.display=="none"){
      avail3[i].style.display="block";
      avail2[i].style.display="none";
      avail[i].style.backgroundColor="rgb(19, 188, 255)";
    } else{
      avail3[i].style.display="none";
      avail2[i].style.display="flex";
      avail[i].style.backgroundColor="white";
    }
  });
}

function pleaseSpecify(that){
  let other2 = document.getElementById("sixth8");
  if(that.value=="other"){
    other2.classList.remove("six55");
    other2.classList.add("six56");
  } else{
    other2.classList.add("six55");
    other2.classList.remove("six56");
  }
}
