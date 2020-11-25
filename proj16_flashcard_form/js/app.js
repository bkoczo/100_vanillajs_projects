const showBtn = document.querySelector('.show-btn');
const closeBtn = document.querySelector('.close-btn');
const feedBack = document.querySelector('.feedback');
const submitForm = document.getElementById('question-form');
const questionCard = document.querySelector('.question-card');
const questionTxt = document.getElementById('question-input');
const answerTxt = document.getElementById('answer-input');
const questionList = document.getElementById('questions-list');

const uiHandler = new UIHandler()

let index;
let dataStorage = [];

document.addEventListener('DOMContentLoaded',function(){
    uiHandler.restoreStorage();
    console.log(dataStorage);
})


//show Form
showBtn.addEventListener('click',function(){
    uiHandler.showForm(questionCard)
})

//close Form
closeBtn.addEventListener('click',function(){
    uiHandler.hideForm(questionCard)
})

//submit Item
submitForm.addEventListener('submit', function(event){
    event.preventDefault();
    uiHandler.validateInput(questionTxt,answerTxt);
    //console.log(uiHandler.validateInput(questionTxt,answerTxt));
    if (uiHandler.validateInput(questionTxt,answerTxt)){
        const flashCard = new Flashcard(index,questionTxt.value,answerTxt.value);
        uiHandler.addItem(flashCard);
        uiHandler.addToStorage(flashCard);
    }
})

questionList.addEventListener('click', function(event){
    uiHandler.flashcardAction(event);
})

//validate Input

function UIHandler (){

    UIHandler.prototype.showForm = function (element){
        element.classList.add('showItem');
    }

    UIHandler.prototype.hideForm = function (element){
        element.classList.remove('showItem');
    }

    //validate input
    UIHandler.prototype.validateInput = function (qTxt, aTxt){
        if (qTxt.value==='' || aTxt.value==='')
        {
            feedBack.classList.add('showItem', 'alert', 'alert-danger');
            feedBack.innerHTML = 'Please fill in both fields!';
            setTimeout(() => {
                feedBack.classList.remove('showItem', 'alert', 'alert-danger');
            }, 2000);
            return false;
        }
        else{
            return true;
        }
    }

    //add item
    UIHandler.prototype.addItem = function(flashCard){
        const newFC = document.createElement('div');
        newFC.classList.add('col-md-4');
        newFC.innerHTML = `
        <div class="card card-body flashcard my-3">
           <h4 class="text-capitalize">${flashCard.question}</h4>
           <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
           <h5 class="answer mb-3">${flashCard.answer}</h5>
           <div class="flashcard-btn d-flex justify-content-between">
               <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="${flashCard.id}">edit</a>
               <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
           </div>
       </div>`
        questionList.appendChild(newFC);
        questionTxt.value = "";
        answerTxt.value = "";
        index ++;
    }

    UIHandler.prototype.addToStorage = function(flashCard){
        dataStorage.push(flashCard);
        localStorage.clear();
        localStorage.setItem('flashCardStorage',JSON.stringify(dataStorage));

        //console.log(localStorage.getItem('flashCardStorage'));
    }

    UIHandler.prototype.restoreStorage = function (){
        let importStorage = localStorage.getItem('flashCardStorage') ? JSON.parse(localStorage.getItem('flashCardStorage')) : [];
        if (importStorage.length > 0){
            index = importStorage.length;
            dataStorage = importStorage;
            dataStorage.forEach(flashcard => {
                uiHandler.addItem(flashcard);
            });
        }
        else{
            index = 0;
        }
    }

    //flashcard buttons
    UIHandler.prototype.flashcardAction = function(event){
        if (event.target.classList.contains('show-answer')){
            event.target.nextElementSibling.classList.toggle('showItem');
        }
        else if (event.target.classList.contains('delete-flashcard')){
            uiHandler.deleteSingle(event);
            questionList.removeChild(event.target.parentElement.parentElement.parentElement);
        }

        else if (event.target.classList.contains('edit-flashcard')){

            questionTxt.value = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
            answerTxt.value = event.target.parentElement.previousElementSibling.innerHTML;
            uiHandler.editSingle(event);
            questionList.removeChild(event.target.parentElement.parentElement.parentElement);
            uiHandler.showForm(questionCard)
        }
    }

    UIHandler.prototype.deleteSingle = function(event){
        dataStorage.forEach(function(data){
            if (data.id == event.target.previousElementSibling.dataset.id){

                let tempArray = dataStorage.filter(function(item){
                    return item.id !=event.target.previousElementSibling.dataset.id
                })
                dataStorage = tempArray;
                localStorage.clear();
                localStorage.setItem('flashCardStorage',JSON.stringify(dataStorage));
            }
        })
    }

    UIHandler.prototype.editSingle = function(event){
        dataStorage.forEach(function(data){
            if (data.id == event.target.dataset.id){

                let tempArray = dataStorage.filter(function(item){
                    return item.id !=event.target.dataset.id
                })
                dataStorage = tempArray;
                localStorage.clear();
                localStorage.setItem('flashCardStorage',JSON.stringify(dataStorage));
            }
        })
    }

}

function Flashcard(id, question, answer){
    this.id = id;
    this.question = question;
    this.answer = answer;
} 