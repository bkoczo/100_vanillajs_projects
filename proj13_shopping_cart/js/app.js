

const addCartBtn = document.querySelectorAll('.store-item-icon');
const removeCartBtn = document.querySelectorAll('.cart-item-remove');
const mainCartBtn = document.getElementById('cart-info');
const cart = document.getElementById('cart');
const clearCartBtn = document.getElementById('clear-cart');

//calculate total sum
function calculateCart(){
    const sumOfItems = document.getElementById('cart-total');
    const costOfItem = document.querySelectorAll('.cart-item-price');
    const costTotal = document.querySelector('.item-total');
    const countOfItems = document.getElementById('item-count');
    let totalSum = 0.0;
    let counter = 0;
    costOfItem.forEach(function(item){
    totalSum += parseFloat(item.textContent);
    counter ++;
    })
    costTotal.textContent = totalSum.toFixed(2);
    sumOfItems.textContent = totalSum.toFixed(2);
    countOfItems.textContent = counter;
}

//load prices as soon as page loads
document.addEventListener('DOMContentLoaded',calculateCart())
document.addEventListener('DOMContentLoaded',addButtonFunction())

//show cart
mainCartBtn.addEventListener('click',function(){
    cart.classList.toggle('show-cart');
})

//clear cart
clearCartBtn.addEventListener('click',function(){

    
    const addedItems = cart.querySelectorAll('.cart-item');
    addedItems.forEach(function(item){
        cart.removeChild(item);
        calculateCart();
    })
})


// add item to cart
addCartBtn.forEach(function(current){
    current.addEventListener('click',function(){
    //console.log('successfully added')

    //image
    const storeImg = current.previousElementSibling.src;
    let pos = storeImg.indexOf('img') + 3;
    const nameImg = storeImg.slice(pos);
    const cartImg = 'img-cart'.concat(nameImg);
    //console.log(cartImg)

    //name
    const cartName = current.parentElement.nextElementSibling.firstElementChild.children[0].textContent;
    //cost
    const fullCartPrice = current.parentElement.nextElementSibling.firstElementChild.children[1].textContent;
    const cartPrice = fullCartPrice.slice(1).trim();

    cart.insertAdjacentHTML("afterbegin",
    `<div class="cart-item d-flex justify-content-between text-capitalize my-3">
    <img src="${cartImg}" class="img-fluid rounded-circle" id="item-img" alt="">
    <div class="cart-item-text">
      <p id="cart-item-title" class="font-weight-bold mb-0">${cartName}</p>
      <span>$</span>
      <span id="cart-item-price" class="cart-item-price" class="mb-0">${cartPrice}</span>
    </div>
    <a href="#" id='cart-item-remove' class="cart-item-remove">
      <i class="fas fa-trash"></i>
    </a>
  </div>`)



  calculateCart();

})
})

//remove single item functionality
function addButtonFunction(){
removeCartBtn.forEach(function(button){
    button.addEventListener('click',function(){
        button.parentElement.remove();
        calculateCart();
    })
})
}