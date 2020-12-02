
const amount = document.getElementById('amount');
const intrate = document.getElementById('interest_rate');
const months = document.getElementById('months');
const payment = document.getElementById('payment');

function computeLoan(){
    if (amount.value!=""){
        var monthlyFee = ( parseFloat(amount.value) + parseFloat((intrate.value / 100 ) * amount.value)) / parseFloat(months.value)
        var modifFee = monthlyFee.toString().replace(/\B(?=([0-9]{3})+(?!\d))/g, ",");
        payment.innerHTML= modifFee;
        //console.log ((intrate.value / 100 ) * amount.value)
    }
    else{
        payment.innerHTML="Set an amount."
    }
}