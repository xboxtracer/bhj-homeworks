'use strict'

const btnDropdown = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = document.querySelectorAll('.dropdown__link');

function listToggle() {
    dropdownList.classList.toggle('dropdown__list_active');
};

function changeText(e) {
    e.preventDefault();
    btnDropdown.textContent = this.textContent;
    listToggle();
};

btnDropdown.addEventListener('click', listToggle)

for(let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].addEventListener('click', changeText);
};