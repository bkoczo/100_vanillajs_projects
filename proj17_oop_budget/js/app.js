class UIHandler {
  constructor() {
    //budget form
    this.budgetInput = document.getElementById('budget-input');
    this.budgetFeedback = document.querySelector('.budget-feedback');
    //expense form
    this.expenseInput = document.getElementById('expense-input');
    this.amountInput = document.getElementById('amount-input');
    this.expenseFeedback = document.querySelector('.expense-feedback');
    //expenses summary
    this.budgAm = document.getElementById('budget-amount');
    this.expAm = document.getElementById('expense-amount');
    this.balAm = document.getElementById('balance-amount');
    this.expenseList = document.querySelector('.expense-list');

    this.items = []
    this.index = 0;

    this.ttlBudget = 0;
    this.ttlExpense = 0;
    this.ttlBalance = 0;
  }

  updateNumbers(){
  this.budgAm.innerHTML = this.ttlBudget;
  this.expAm.innerHTML = this.ttlExpense;
  this.balAm.innerHTML = this.ttlBalance;
}

submitBudgetForm(){
  if(this.budgetInput.value == '' || parseInt(this.budgetInput.value) < 0){
    this.budgetFeedback.classList.add('showItem');
    this.budgetFeedback.innerHTML = "<p>Please enter a valid value</p>";
  }
  else{
    this.ttlBudget = this.budgetInput.value;
    this.ttlBalance = parseInt(this.budgetInput.value) - parseInt(this.expAm.innerHTML);
    this.budgetInput.value = '';
    this.updateNumbers();
  }
}

submitExpenseForm(){
  if(this.expenseInput.value == '' || this.amountInput.value == '' || parseInt(this.amountInput.value) < 0){
    this.expenseFeedback.classList.add('showItem');
    this.expenseFeedback.innerHTML = "<p>Please enter valid values</p>";
  }
  else{
    let currentExpense = this.expAm.innerHTML;
    this.ttlExpense = parseInt(currentExpense) + parseInt(this.amountInput.value);
    this.ttlBalance = parseInt(this.budgAm.innerHTML) - parseInt(this.ttlExpense);
    this.updateNumbers();

    let item = {
      id : this.index,
      expense : this.expenseInput.value, 
      amount : this.amountInput.value,
    }
    this.items.push(item);
    this.index ++;
    this.addItem(item);
    this.expenseInput.value = '';
    this.amountInput.value = '';
  }
}

addItem(item){
  const newDiv = document.createElement('div');
  newDiv.classList.add('expense');
  newDiv.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
    <h6 class="expense-title mb-0 text-uppercase list-item">${item.expense}</h6>
    <h5 class="expense-amount mb-0 list-item">${item.amount}</h5>
    <div class="expense-icons list-item">
      <a href="#" class="edit-icon mx-2" data-id="${item.id}">
      <i class="fas fa-edit"></i>
      </a>
      <a href="#" class="delete-icon" data-id="${item.id}">
      <i class="fas fa-trash"></i>
      </a>
    </div>
  </div>`;
  this.expenseList.appendChild(newDiv);
}

deleteItem(item){
  let currentDiv = item.parentElement.parentElement.parentElement.parentElement;
  console.log(currentDiv);
  let currentPrice = parseInt(item.parentElement.parentElement.previousElementSibling.innerHTML);
  this.ttlExpense -= currentPrice;
  this.ttlBalance += currentPrice;
  this.updateNumbers();
  this.expenseList.removeChild(currentDiv);
}

editItem(item){
  
  let currentDiv = item.parentElement.parentElement.parentElement.parentElement;
  console.log(currentDiv);

  let currentPrice = parseInt(item.parentElement.parentElement.previousElementSibling.innerHTML);
  console.log(currentPrice)
  let currentExpense = item.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML;
  console.log(currentExpense)
  this.ttlExpense -= currentPrice;
  this.ttlBalance += currentPrice;
  this.expenseInput.value = currentExpense;
  this.amountInput.value = currentPrice;
  this.updateNumbers();
  this.expenseList.removeChild(currentDiv);
}


}


document.addEventListener('DOMContentLoaded',function(){
  eventPack();
})

function eventPack(){
  budgetForm = document.getElementById('budget-form');
  expenseForm = document.getElementById('expense-form');
  expList = document.getElementById('expense-list');

  const uih = new UIHandler();

  budgetForm.addEventListener('submit',function(event){
    event.preventDefault();
    uih.submitBudgetForm();
  })

  expenseForm.addEventListener('submit',function(event){
    event.preventDefault();
    uih.submitExpenseForm();
  })

  expList.addEventListener('click',function(event){
    if (event.target.parentElement.classList.contains('delete-icon')){
      uih.deleteItem(event.target);
    }
    else if (event.target.parentElement.classList.contains('edit-icon')){
      uih.editItem(event.target);
    }
  })

}

