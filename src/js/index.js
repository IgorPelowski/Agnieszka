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




const text = document.querySelector(".hero__text");
const hideout = document.querySelector(".hero__site1");
const x = document.querySelector(".x");

const hide = document.querySelector(".hide");

function opacity(){
  
  
  hideout.classList.toggle("hide")
};

text.addEventListener("mouseenter", opacity);


console.log('hi')