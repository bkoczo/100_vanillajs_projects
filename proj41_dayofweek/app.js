const weekDay = document.getElementById('weekday');
const phrase = document.getElementById('phrase');

let currDate = new Date();
//console.log(currDate);
let currDay = currDate.getDay();
console.log(currDay);

switch(currDay){
case 0: 
    weekDay.innerHTML = 'Sunday';
    phrase.innerHTML = 'still relax bruh';
    break;
case 1: 
    weekDay.innerHTML = 'Monday';
    phrase.innerHTML = 'get used to work bruh';
    break;
case 2: 
    weekDay.innerHTML = 'Tuesday';
    phrase.innerHTML = 'work hard bruh';
    break;
case 3: 
    weekDay.innerHTML = 'Wednesday';
    phrase.innerHTML = 'stay alive bruh';
    break;
case 4: 
    weekDay.innerHTML = 'Thursday';
    phrase.innerHTML = 'getting there bruh';
    break;
case 5: 
    weekDay.innerHTML = 'Friday';
    phrase.innerHTML = 'almost relaxtime bruh';
    break;
case 6: 
    weekDay.innerHTML = 'Saturday';
    phrase.innerHTML = 'relax bruh';
    break;
}