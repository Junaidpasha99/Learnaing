const Decrease = document.getElementById("Decrease");
const increase = document.getElementById("increase");
 const count1 = document.getElementById("count1");
const Reset = document.getElementById("Reset");

let count = 0;
 
Decrease.onclick = function(){
    count--;
    count1.textContent = count;
}
increase.onclick = function(){
    count++;
    count1.textContent = count;
}
Reset.onclick = function(){
    count = 0;
    count1.textContent = count;
}