const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const texts = document.querySelectorAll('.text');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        e.preventDefault();

        body.style.backgroundColor=e.target.id;

        texts.forEach(function(text){

            if (e.target.id == 'blue'){
                text.style.color='white';
            }
            else {
                text.style.color='black';
            }
        })
    })
})