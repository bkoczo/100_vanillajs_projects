
/*const body = document.querySelector(".body")
const button = document.getElementById("szincsere")
const rgbval = document.querySelector(".rgbvalue")

button.addEventListener("click", function(){
body.style.background= 
    "rgb("+
    Math.floor(Math.random()*255) + ", " +
    Math.floor(Math.random()*255) + ", " +
    Math.floor(Math.random()*255) +")"
}
)

*/


const body = document.querySelector(".body")
const button = document.getElementById("szincsere")
const rgbval = document.querySelector(".rgbvalue")

button.addEventListener("click", szinezo)

function szinezo(){
    var piros = Math.floor(Math.random()*255)
    var zold= Math.floor(Math.random()*255)
    var kek = Math.floor(Math.random()*255)
var szin = "rgb(" + piros + ", " + zold + ", " + kek + ")"
body.style.background= szin
rgbval.innerHTML = szin
}