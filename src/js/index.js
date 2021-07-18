import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

let c = 45;

function draw(){
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);




const text = document.querySelector(".hero__text__1");
const hideout = document.querySelector(".hero__site1");
const x = document.querySelector(".x");
const hide = document.querySelector(".hide");
function opacity(){
  
  hideout.classList.remove("hero__site1")
  hideout.classList.add("hide")
};
function opacitynone(){
  hideout.classList.remove("hide")
  hideout.classList.add("hero__site1")
}
text.addEventListener("mouseenter", opacity);
text.addEventListener("mouseleave", opacitynone)

console.log('hi')


const text2 = document.querySelector(".hero__text__2");
const hideout2 = document.querySelector(".hero__site2");
const x2 = document.querySelector(".x");
const hide2 = document.querySelector(".hide2");
function opacity2(){
  
  hideout2.classList.remove("hero__site2")
  hideout2.classList.add("hide2")
};
function opacitynone2(){
  hideout2.classList.remove("hide2")
  hideout2.classList.add("hero__site2")
}
text2.addEventListener("mouseenter", opacity2);
text2.addEventListener("mouseleave", opacitynone2)



const text3 = document.querySelector(".hero__text__3");
const hideout3 = document.querySelector(".hero__site3");
const x3 = document.querySelector(".x");
const hide3 = document.querySelector(".hide3");
function opacity3(){
  
  hideout3.classList.remove("hero__site3")
  hideout3.classList.add("hide3")
};
function opacitynone3(){
  hideout3.classList.remove("hide3")
  hideout3.classList.add("hero__site3")
}
text3.addEventListener("mouseenter", opacity3);
text3.addEventListener("mouseleave", opacitynone3)



const text4 = document.querySelector(".hero__text__4");
const hideout4 = document.querySelector(".hero__site4");
const x4 = document.querySelector(".x");
const hide4 = document.querySelector(".hide4");
function opacity4(){
  
  hideout4.classList.remove("hero__site4")
  hideout4.classList.add("hide4")
};
function opacitynone4(){
  hideout4.classList.remove("hide4")
  hideout4.classList.add("hero__site4")
}
text4.addEventListener("mouseenter", opacity4);
text4.addEventListener("mouseleave", opacitynone4)