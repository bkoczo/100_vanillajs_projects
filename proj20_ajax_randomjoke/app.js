const displayDIV = document.getElementById('display-joke');
const btnJoke = document.getElementById('get-joke');
const imgBox = document.querySelector('img');

btnJoke.addEventListener('click',function(){
    const ajax = new XMLHttpRequest();
    const url = 'https://api.chucknorris.io/jokes/random';

    ajax.open('GET', url, true)
    if (ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let tempString = JSON.parse(this.responseText);
            console.log(tempString);
            displayDIV.innerHTML = tempString.value;
            imgBox.src = tempString.icon_url;
        }
    })
    ajax.send()
})