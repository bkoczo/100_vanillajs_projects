const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const resetBtn = document.getElementById('reset');


(function(){
    getLocalStorage(name)
    getLocalStorage(email)
    getLocalStorage(message)
})()

resetBtn.addEventListener('click',function(){
    name.value = '';
    message.value = '';
    email.value = '';
    localStorage.clear();
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    if (validateForm()){
        localStorage.clear();
        //console.log('good mail')
        setLocalStorage(name);
        setLocalStorage(email);
        setLocalStorage(message);
    }
    else {
        //console.log('bad mail')
    }

})

function validateForm(){
    if (name.value != '' && message.value != '' && /\S+@\S+\.\S+/.test(email.value)){
        return true;
    }
    else {
        return false;
    }
}

function setLocalStorage(element){
    localStorage.setItem(element.id, element.value)
}

function getLocalStorage(element){
    element.value = localStorage.getItem(element.id);
}