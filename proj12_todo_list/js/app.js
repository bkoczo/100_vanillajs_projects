const itemForm = document.getElementById('itemForm');
const feedBack = document.querySelector('.feedback');
const inputText = document.getElementById('itemInput');
const deleteBtn = document.getElementById('clear-list');
const itemList = document.querySelector('.item-list');

let itemArray = [];

const modalForm = document.getElementById('modalForm');
const modalBtn = document.getElementById('modalBtn');
const modalInput = document.getElementById('modalInput');
const modal = document.querySelector('.modal');



//submit btn
itemForm.addEventListener('submit', function (e) {
    e.preventDefault;
    if (inputText.value === "") {
        feedBack.classList.add('showItem', 'alert-danger');
        feedBack.innerHTML = "Give a value before submitting";
        setTimeout(function () {
            feedBack.classList.remove('showItem', 'alert-danger');
        }, 2000)
    } else {
        itemArray.push(inputText.value);
        //itemArray.forEach(function(item){

        itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${itemArray[itemArray.length-1]}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>`);
        //

    }
    btnFunctions();
    inputText.value='';
})

// delete all btn
deleteBtn.addEventListener('click', function (e) {
    removeAll();
    itemArray = [];

})

function removeAll() {
    const items = itemList.querySelectorAll('.item');
    items.forEach(function (item) {
        itemList.removeChild(item);
    })
}

//btn functions
function btnFunctions() {
    const items = itemList.querySelectorAll('.item');
    items.forEach(function (item) {
        //complete
        item.querySelector('.complete-item').addEventListener('click', function () {
            if (item.querySelector('.item-name').classList.contains('completed')) {
                item.querySelector('.item-name').classList.remove('completed');
                item.querySelector('.complete-item').classList.remove('visibility');
            }
            else {
                item.querySelector('.item-name').classList.add('completed');
                item.querySelector('.complete-item').classList.add('visibility');
            }
        })
        //edit
        item.querySelector('.edit-item').addEventListener('click', function () {
            modal.style.display = "block";
            modalBtn.addEventListener('click',function(){
             item.querySelector('.item-name').textContent=modalInput.value;
             modal.style.display = "none";
            modalInput.value='';
            })
            
            /*setTimeout(function(){
                modal.style.display = "none";
            },1000)*/
        })

        //delete
        item.querySelector('.delete-item').addEventListener('click', function () {
            itemList.removeChild(item);
        })
    })

}

