const display = document.getElementById('displaytext');
const buttons = document.querySelectorAll('input[type="button"]');


(function(){
  
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if (button.value=="=" && display.value != '' ){
            let result = eval(display.value);
            display.value = result;
        }
        else if (button.value=="C"){
            display.value = '';
        }
        else if (!isNaN(button.value)){
            display.value += button.value;
        }
        else if (button.value=="+" || button.value=="-"){
            //console.log(button.value)
            if (!isNaN(display.value.slice(-1))){
                display.value += button.value;
            }
            else {
                display.value = display.value.slice(0,-1).concat(button.value);
            }
        }
        else if (button.value=="/" || button.value=="*"){
            if (display.value != '' && display.value != '-' && display.value != '+'){
            //console.log(button.value)
                if (!isNaN(display.value.slice(-1))){
                    display.value += button.value;
                }
                else {
                    display.value = display.value.slice(0,-1).concat(button.value);
                }
            }
        }
    })

})

})()