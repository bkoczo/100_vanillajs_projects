const score = document.getElementById('points');
const number1 = document.getElementById('primary-number');
const number2 = document.getElementById('secondary-number');
const guess = document.getElementById('guess');
const btn = document.getElementById('btn');

let points = 0;

(function(){
    generateNumber(number1,number2);
})()

btn.addEventListener('click',function(e){
    e.preventDefault();
    let checkInput = validateInput();
    if (checkInput){
        evaluateResult(Number(number1.innerHTML),Number(number2.innerHTML),Number(guess.value));
        generateNumber(number1,number2);
        guess.value='';
    }

})

function validateInput(){
    if (guess.value==='' || isNaN(guess.value)){
        alert('Make a correct guess!');
        return false;
    }
    else {
        return true;
    }
}

function evaluateResult(num1,num2,guess){
    if (num1 + num2 == guess){
        alert('Correct!');
        points ++;
        score.innerHTML = points;
    }
    else {
        alert('Wrong answer!');
        window.location.reload();
    }
}

function generateNumber(num1,num2){
    num1.innerHTML = Math.floor(Math.random() * 100);
    num2.innerHTML = Math.floor(Math.random() * 100);
}