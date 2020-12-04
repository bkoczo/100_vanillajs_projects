
let clock = document.getElementById('clock');

(function(){
    getTime();
})()

setInterval(getTime, 1000)

function getTime(){
let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    let date2 = new Date();
    let hrs = date2.getHours();
    let min = date2.getMinutes();
    let sec = date2.getSeconds();
    clock2.innerHTML = hrs + ":" + min + ":" + sec ;
}