
const images = ['image1.png', 'image2.png', 'image3.png','image4.png'];
const canvas = document.getElementById('canvas');
const arrows = document.querySelectorAll('.arrow');
let index = 0;

canvas.style.backgroundImage = `url(./images/${images[0]})`;

    arrows.forEach(function(arrow){
        arrow.addEventListener('click',function(e){
            if (e.target.id =='left'){
                index --;
                if (index <0){
                    index = images.length-1;
                }
                canvas.style.backgroundImage = `url(./images/${images[index]})`;
                console.log('left')
                console.log(index)
            }
            else if (e.target.id =='right'){
                index ++;
                if (index > 3){
                    index = 0;
                }
                canvas.style.backgroundImage = `url(./images/${images[index]})`;
                console.log('right')
                console.log(index)
            }
        })
    })