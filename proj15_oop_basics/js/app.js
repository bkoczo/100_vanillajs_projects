

const nameTxt = document.getElementById('name');
const courseTxt = document.getElementById('course');
const authorTxt = document.getElementById('author');

const submitBtn = document.querySelector('.submitBtn');
const custForm = document.getElementById('customer-form');
const custList = document.querySelector('.customer-list');

const loading = document.querySelector('.loading');


document.addEventListener('DOMContentLoaded',function(){
    submitBtn.disabled = true;
    checkInput()
    
})

function checkInput (){
    nameTxt.addEventListener('keyup',this.checkIfEmpty);
    courseTxt.addEventListener('keyup',this.checkIfEmpty);
    authorTxt.addEventListener('keyup',this.checkIfEmpty);

}

function checkIfEmpty(){
    if (this.value ===''){
        this.classList.remove('complete');
        this.classList.add('fail');
    }
    else{
        this.classList.remove('fail');
        this.classList.add('complete');
        let countComplete = custForm.querySelectorAll('.complete');
        if (countComplete.length === 3 ){
            submitBtn.disabled = false;
        }
        else{
            submitBtn.disabled = true;
        }
    }
}

custForm.addEventListener('submit',function(e){
    e.preventDefault();
    const course = new Course(nameTxt.value,courseTxt.value,authorTxt.value);
    const randomN = randomNum();
    const newElement = document.createElement('div');
    newElement.classList.add('col-11', 'mx-auto', 'col-md-6', 'col-lg-4', 'my-3');
    newElement.innerHTML = (`<div class="card text-left">
    <img src="./img/cust-${randomN}.jpg" class="card-img-top" alt="">
    <div class="card-body">
     <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${course.name}</span></h6>
     <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
     ${course.course}
      </span></h6>
     <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${course.author}</span></h6>
    </div>
   </div>`)

   loading.classList.add('showItem');
   setTimeout(() => {
    loading.classList.remove('showItem');
    custList.appendChild(newElement);
    submitBtn.disabled = true;
    nameTxt.value = '';
    courseTxt.value = '';
    authorTxt.value = '';
    const completedItems = document.querySelectorAll('.complete');
    completedItems.forEach(item => {
        item.classList.remove('complete', 'fail')
    });
   }, 1200);
})

function randomNum (){
    let rndN = Math.floor(Math.random()*5+1)
    return rndN;
}

function Course(name, course, author){
    this.name = name;
    this.course = course;
    this.author = author;
}