(function () {

    const buttons = document.querySelectorAll('.btn');
    const screen = document.querySelector('.screen');
    const reset = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e){
            if (screen.value == '' && e.target.dataset.num=='.'){
                screen.value += '0'.concat(e.target.dataset.num);
            }
            else if (screen.value == '' 
                     && (e.target.dataset.num=='/'
                     || e.target.dataset.num=='*')){
                //do nothing
            }
            else {
                screen.value += e.target.dataset.num;
            }
        })
    })

    //Equal
    equal.addEventListener('click', (e) =>{
        screen.value=eval(screen.value);
    })
    
    
    //Clear
    reset.addEventListener('click', (e) =>{
        screen.value='';
    })
    
    
})()
