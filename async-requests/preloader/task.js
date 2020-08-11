'use strict'
const items = document.getElementById('items');
let request = new XMLHttpRequest();

function addElements(variable) {
    let divItemContainer = document.createElement('div');
    divItemContainer.classList.add('item');
    let divCharCode = document.createElement('div');
    divCharCode.classList.add('item__code');
    divCharCode.innerHTML = variable.CharCode;
    let divValue = document.createElement('div');
    divValue.classList.add('item__value');
    divValue.innerHTML = variable.Value;
    let divCurrency = document.createElement('div');
    divCurrency.classList.add('item__currency');
    divCurrency.innerHTML = 'руб.';
    divItemContainer.append(divCharCode);
    divItemContainer.append(divValue);
    divItemContainer.append(divCurrency);
    items.append(divItemContainer);
};

request.open('GET', 'https://netology-slow-rest.herokuapp.com/');
request.send();
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        document.getElementById('loader').classList.remove('loader_active');
        let resp = JSON.parse(request.responseText).response.Valute;
        for( let key in resp) {
            addElements(resp[key]);
        };
    };
};