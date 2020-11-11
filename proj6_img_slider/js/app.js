
const buttons = document.querySelectorAll('.btn');
const imgContainer = document.querySelector('.img-container');
let counter = 0;

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
    if (button.classList.contains('btn-left')){
        if (counter == 0) 
        {counter = 4 ;}
        else 
        {counter-- ;}
        
        setBgImage()
    }
    else if (button.classList.contains('btn-right')){
        if (counter == 4) 
        {counter = 0 ;}
        else 
        {counter++ ;} 
        
        setBgImage()

     }
    })})


function setBgImage(){
    imgContainer.style.backgroundImage = "url('./img/contBcg-" + counter + ".jpeg')";
}
