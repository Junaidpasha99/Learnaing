let age
let btn
let h1
let h2
document.getElementById('btn').onclick = function(){
    age = document.getElementById('age').value;
    if (!age) {
        alert("Age is required. Please enter your age.");
        return;
    }
    if (age >= 18){
        h2 = document.getElementById(`h2`).textContent = `you are ${age} years old sooo u can enter`
        setTimeout(function () {
            window.location.href = "https://google.com";

        }, 2000);
    
    } else {
        document.getElementById('h1').textContent = `You are ${age} years old sooo you can't enter.`;
        setTimeout(function() {
            window.location.href = 'https://cbi.gov.in';
        }, 2000);
    }
};