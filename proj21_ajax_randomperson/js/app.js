const btn = document.getElementById('btn');

const img = document.getElementById('photo');
const fName = document.getElementById('first');
const lName = document.getElementById('last');
const city = document.getElementById('street');
const phone = document.getElementById('phone');
const mail = document.getElementById('email');


btn.addEventListener('click',function(){
  importData(getData);
})

function importData(callback){
  const ajax = new XMLHttpRequest();
  const url = 'https://randomuser.me/api/';

  ajax.open('GET',url,true);
  ajax.onload = function(){
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  }
  ajax.send();

}


function getData(imported){
  const data = JSON.parse(imported);
  console.log(data);
  img.src = data.results[0].picture.large;
  fName.innerHTML = data.results[0].name.first;
  lName.innerHTML = data.results[0].name.last;
  city.innerHTML = data.results[0].location.city;
  phone.innerHTML = data.results[0].cell;
  mail.innerHTML = data.results[0].email;
}