
const form = document.querySelector('form');
const result = document.getElementById('result');
const input = document.getElementById('input');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(parseFloat(input.value));
    if (isNaN(parseFloat(input.value)) || parseFloat(input.value) <= 0){
        result.innerHTML='Give a valid weight in pounds!';
        result.classList.remove('no-error');
        result.classList.add('error');
        setTimeout(() => {
            result.classList.remove('error');
            result.innerHTML='';
            input.value='';
        }, 3000);
    }
    else {
        let kgValue = (parseFloat(input.value) / 2.2).toFixed(2);
        result.innerHTML=kgValue;
        result.classList.remove('error');
        result.classList.add('no-error');
        setTimeout(() => {
            result.classList.remove('no-error');
            result.innerHTML='';
            input.value='';
        }, 10000);
    }


})