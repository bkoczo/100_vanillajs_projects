(function () {
    const services = [
        {
            value: 1,
            title: '20% - good'
     }, {
            value: 2,
            title: '10% - ok'
     }, {
            value: 3,
            title: '2% - poor'
     }

  ]

    const inputBill = document.getElementById('input-bill');
    const inputUsers = document.getElementById('input-users');
    const inputService = document.getElementById('input-service');

    const resultTotalAmount = document.getElementById('total-amount');
    const resultTotalPerPerson = document.getElementById('person-amount');
    const tipAmount = document.getElementById('tip-amount');
    const resultBox = document.querySelector('.results');


    services.forEach(function (service) {
        const newOption = document.createElement('option');
        newOption.value = service.value;
        newOption.textContent = service.title;
        inputService.appendChild(newOption);
    })

    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const loader = document.querySelector('.loader');
        loader.classList.add('showItem');

        setTimeout(function () {
            const billValue = inputBill.value;
            const usersNumber = inputUsers.value;
            const serviceOption = inputService.value;

            const tipPercent = tipCalculator(serviceOption);

            let totalValue = Number(billValue) * Number(tipPercent);
            let valuePerPerson = Number(totalValue) / Number(usersNumber);
            let totalTip = (Number(tipPercent) - 1) * Number(billValue);

            resultTotalAmount.textContent = totalValue.toFixed(2);
            resultTotalPerPerson.textContent = valuePerPerson.toFixed(2);
            tipAmount.textContent = totalTip.toFixed(2);
            loader.classList.remove('showItem');
            resultBox.classList.add('showItem');

        }, 2000);

        setTimeout(function () {
            inputBill.value = '';
            inputUsers.value = '';
            inputService.value = 0;
            resultBox.classList.remove('showItem');
        }, 8000);

    });

    function tipCalculator(serviceValue) {
        let tipPercent = 0;
        if (serviceValue == 1) {
            tipPercent = 1.2;
        } else if (serviceValue == 2) {
            tipPercent = 1.1;
        } else {
            tipPercent = 1.02;
        }
        return tipPercent;
    }

})()
