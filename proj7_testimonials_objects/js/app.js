
const custImg = document.querySelector('#customer-img');
const custName = document.querySelector('#customer-name');
const custText = document.querySelector('#customer-text');
const buttons = document.querySelectorAll('.btn');

let counter = 0;
const custs = [];

function Customer (img, name,text){
    this.img = img;
    this.name = name;
    this.text = text;
}

function createCustomer (img, name,text){
 let fullImg = "./img/customer-"+img+".jpg" ;
 let customer = new Customer (fullImg, name,text);
 custs.push(customer);
 }

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if (button.classList.contains('prevBtn')){
            if (counter==0){
                counter= custs.length-1;
            }
            else {
                counter--;
                
            }
            switchCustomer()
        }
        else if (button.classList.contains('nextBtn')){
            if (counter==custs.length-1){
                counter= 0;
            }
            else {
                counter++;
            }
                switchCustomer()
        }
        
    })
})

function switchCustomer(){
    custImg.src = custs[counter].img;
    custName.textContent = custs[counter].name;
    custText.textContent = custs[counter].text;
}