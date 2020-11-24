

const addBtn = document.querySelector('.addItems-submit');
const inputText = document.querySelector('.addItems-input');

const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.displayItems-clear');

const addMsg = document.querySelector('.addItems-action');
const removeMsg = document.querySelector('.displayItems-action');

let list = [];

//

addBtn.addEventListener('click', addItem);

clearBtn.addEventListener('click',removeAll);

groceryList.addEventListener('click',removeSingle);

document.addEventListener('DOMContentLoaded', loadStorage);


function addItem(event){
    event.preventDefault();
    if (inputText.value===''){
        addMsg.classList.add('alert');
        setTimeout(function() {
            addMsg.classList.remove('alert');
        },2000 );
    }
    else {
        addMsg.classList.add('success');
        setTimeout(function() {
            addMsg.classList.remove('success');
        },2000 );
        createItem(inputText.value);
        
        let storageList = localStorage.getItem('storageList') ? JSON.parse(localStorage.getItem('storageList')) : [];
        storageList.push(inputText.value);
        localStorage.setItem('storageList',JSON.stringify(storageList))

        inputText.value='';

    }
    console.log(list);
}

function createItem(value){
    list.push(value);
    let newItem = document.createElement('div');
    newItem.classList.add('grocery-item');
    newItem.innerHTML= `<h4 class="grocery-item__title">${value}</h4>
                        <a href="#" class="grocery-item__link">
                        <i class="far fa-trash-alt"></i>
                        </a>`
    groceryList.appendChild(newItem);
}

function removeAll(){
    list = [];
    groceryList.innerHTML='';
    localStorage.removeItem('storageList');
}

function removeSingle(){
    const items = document.querySelectorAll('.grocery-item__link');
    items.forEach(function(item){
        item.addEventListener('click', function(){
            let currentItem = item.parentElement;
            let currentValue = item.previousElementSibling.innerHTML;
            let index = list.indexOf(currentValue);
            groceryList.removeChild(currentItem);
            list.splice(index,1);

            localStorage.setItem('storageList',JSON.stringify(list));
        })
    })
    console.log(list);
}

function loadStorage(){
let notempty = localStorage.getItem('storageList');
if (notempty){
    let storageItems = JSON.parse(localStorage.getItem('storageList'));
    storageItems.forEach(function(item){
        createItem(item);
    })
}
}