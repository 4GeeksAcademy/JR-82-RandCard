import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

  let pronounArray = ['the', 'our'];
  let adj = ['Great', 'Big', 'Long', 'Bad', 'Evil'];
  let noun = ['Jogger', 'Racoon', 'Man', 'Bus'];
  let end = ['.com','.us'];

for (let pronoun of pronounArray) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of end) {
        console.log(pronoun + a  + n  + e);
      }
    }
  }
}

