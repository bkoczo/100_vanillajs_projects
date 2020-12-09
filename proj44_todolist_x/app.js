const input = document.getElementById('todo-input');
const btn = document.getElementById('add-item');
const list = document.getElementById('list');
let itemList = [];

(function(){
    displayLocalStorage();
    //localStorage.clear();
})()

btn.addEventListener('click',function(e){
    e.preventDefault();
    let checkInput = validateInput(input.value);
    if (checkInput){
        addItem(input.value);
        input.value = '';
    }   
})

list.addEventListener('click',function(e){
    e.preventDefault();
    if (e.target.classList.contains('delete-item')){

        console.clear();
        let tempParent = e.target.parentElement;
        tempParent.removeChild(tempParent.childNodes[1]);
        console.log(tempParent);
        console.log(itemList[0]);
        console.log(tempParent.innerHTML);
        /*if (itemList[0]== tempParent.innerHTML){
            console.log('cool')
        }*/
        console.log(itemList.length)
        itemList.splice(itemList.indexOf(tempParent.innerHTML),1)
        list.removeChild(tempParent);
        console.log(itemList.length)

        localStorage.setItem('tomb', JSON.stringify(itemList));
    }
})

function validateInput(inputVal){
    if (inputVal !== ''){
        return true;
    }
    else {
        alert('Give a value');
        return false;
    }
}

function addItem(inputVal){
    let newItem = document.createElement('li');
    newItem.innerHTML = `${inputVal}<div class="delete-item">Remove</div>`;
    list.appendChild(newItem);
    let stringified = String(inputVal);
    console.clear();
    itemList.push(stringified);
    for (i=0; i<itemList.length; i++){
        
        console.log(itemList[i]);
        console.log(itemList.indexOf(stringified))
    }
    localStorage.setItem('tomb', JSON.stringify(itemList));
    
}


function displayLocalStorage(){
    let storage = localStorage.getItem('tomb');
    
    if (storage === null){
        itemList = [];
    } else {
        let storageParsed = JSON.parse(storage);
        console.log(storageParsed);
        storageParsed.forEach(function(storageItem){
            addItem(storageItem);
        })
    };
};