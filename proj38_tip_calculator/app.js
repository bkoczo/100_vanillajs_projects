const billAmount = document.getElementById('bill-amount');
const percentTip = document.getElementById('percentage-tip');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');
const calculate = document.getElementById('calculate');

calculate.addEventListener('click',function(){
    let v1 = validateInput(billAmount);
    let v2 = validateInput(percentTip);
    if (v1 && v2){
        console.log("10");
        let tipCount = Number(billAmount.value) * (Number(percentTip.value)/100);
        tipAmount.value = tipCount;
        total.value = Number(tipCount) + Number(billAmount.value);
    }       
})


function validateInput(input){
    if (input.value != '' && !isNaN(input.value)){
        return true;
    }
    else {
        alert('Give a valid value for ' + input.previousElementSibling.innerHTML.slice(0,-1));
        return false;
    }
}