
    
 
    const form = document.querySelector('form');
    const results = document.getElementById('results');

    form.addEventListener('submit', function(e){
        const height = parseInt(document.getElementById('height').value);
        const weight = parseInt(document.getElementById('weight').value);
        //console.log(height);
        e.preventDefault();

        if (height=="" || height <= 0 || isNaN(height)){
            alert('Give a valid height');
        } 
        else if (weight=="" || weight <= 0 || isNaN(weight)){
            alert('Give a valid weight');
        } 
        else {
            const bmi = (weight / ((height*height)/10000)).toFixed(2);
            results.innerHTML = bmi;
            switch (true) {
                case (bmi < 18.6):
                    alert("Under Weight");
                    break;
                case (bmi >= 18.6 && bmi <= 24.9):
                    alert("Normal Range");
                    break;
                case (bmi > 24.9):
                    alert("Overweight");
                    break;
                default:
                    alert("none");
                    break;
            }
        }

        
    })
    
    
    
    
