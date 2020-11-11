

const hexvalues = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const gomb = document.getElementById("szincsere")
const hatter = document.querySelector(".body")
const ertek = document.querySelector(".hexhatter")



gomb.addEventListener("click", function(){

    var hexvalue = "#"
    var newchar = ""
    for (i=0; i<6; i++){
        newchar = hexvalues[Math.floor(Math.random()*(hexvalues.length))]
        /*newchar = hexvalues[0]*/
        hexvalue += newchar
        ertek.innerHTML= hexvalue
        hatter.style.background= hexvalue
    }

})


