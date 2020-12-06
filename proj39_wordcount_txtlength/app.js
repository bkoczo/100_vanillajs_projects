const button = document.getElementById('btn');
const inputField = document.getElementById('str');
const op1 = document.getElementById('output');
const op2 = document.getElementById('output2');

button.addEventListener('click',function(e){
    e.preventDefault();
    let modText = inputField.value.trim().replace(/ +(?= )/g,'');
    inputField.value = modText;
    let textLength = modText.length;
    //console.log(textLength);
    op1.innerHTML = `<h2>${textLength}</h2>`;
    let wordCount = 0;
    for (i=0; i< textLength; i++ ){
        if (modText[i] == ' '){
            wordCount ++;
        }
    }
    op2.innerHTML = `<h2>${wordCount+1}</h2>`;
})
