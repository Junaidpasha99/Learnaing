const mybutton = document.getElementById("mybutton");
const mylable = document.getElementById("mylable");
const max = 10;
const min = 1;
let randomNum;

mybutton.onclick = function(){ 
    randomNum = Math.floor(Math.random() * max) + min;
    mylable.textContent = randomNum;
}
