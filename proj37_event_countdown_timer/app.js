const inputDate = document.querySelector("input[name='endDate']");
const currentField = document.getElementById('current');
const futureField = document.getElementById('future');
const clockBox = document.querySelector('.clock');
let timeDiff;

(function(){
    
    let startInterval = setInterval(() => {
        let currDate = new Date();
        currentField.innerHTML = currDate.getFullYear() + ". " + (currDate.getMonth()+1) + ". " + currDate.getDate() +". " + currDate.toLocaleTimeString();
    }, 1000);
    

})()

inputDate.addEventListener('change', function(){
    let futDate = new Date(inputDate.value);
    //console.log(futDate);
    //console.log(futDate.getFullYear())
    //console.log(futDate.getMonth()+1)
    //console.log(futDate.getDate())
    futureField.innerHTML = futDate.getFullYear() + ". " + (futDate.getMonth()+1) + ". " + futDate.getDate() +". " + "   " + futDate.toLocaleTimeString();
    let diffInterval = setInterval(() => {
        let timeDiff = calcDiff(futDate);
        console.log(timeDiff);
        for (let param in timeDiff){
            let par = (clockBox.querySelector('.' + param));
            if (par){
                par.innerHTML = timeDiff[param];
            }
        }
    }, 1000);

})

function calcDiff(time){
    let currDate = new Date();
    let diff = Date.parse(time) - Date.parse(currDate);
    let seconds = Math.ceil(diff/1000%60);
    let minutes = Math.floor(diff/1000/60%60);
    let hours = Math.floor(diff/1000/60/60%24);
    let days = Math.floor(diff/1000/60/60/24);
    return {
        'diff' : diff,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}