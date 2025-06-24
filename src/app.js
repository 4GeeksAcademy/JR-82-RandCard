import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
   let suits = {
    spade: "♠",
    heart: "♥",
    diamond: "♦",
    club: "♣"
  };
  const suit = randomizeSuit();
  const number = randomizeNumber();

  document.querySelector('.card').className = `card ${suit}`;
  document.querySelector('.topSuit').textContent = suits[suit];
  document.querySelector('.botSuit').textContent = suits[suit];
  document.querySelector('.number').textContent = number;
};

window.ranOnClick = function() {
    let suits = {
    spade: "♠",
    heart: "♥",
    diamond: "♦",
    club: "♣"
  };
  const suit = randomizeSuit();
  const number = randomizeNumber();

  document.querySelector('.card').className = `card ${suit}`;
  document.querySelector('.topSuit').textContent = suits[suit];
  document.querySelector('.botSuit').textContent = suits[suit];
  document.querySelector('.number').textContent = number;
};

function randomizeNumber() {
  let number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
  };

function randomizeSuit () {
   let suit = ["spade","heart","diamond","club"];
   let  indexSuit = Math.floor(Math.random() * suit.length); 
   return suit[indexSuit];
};