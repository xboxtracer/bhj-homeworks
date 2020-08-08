'use strict'

const allModal = document.querySelectorAll('.modal');
const modalChange = document.querySelector('.show-success');

allModal[0].querySelector('.modal__close_times').addEventListener('click', closeModal);
allModal[1].querySelector('.modal__close_times').addEventListener('click', closeModal);
modalChange.addEventListener('click', changeModal);


function startModal() {
    allModal[0].classList.toggle('modal_active');
};

function closeModal() {
    this.parentElement.parentElement.classList.toggle('modal_active')
};

function changeModal() {
    allModal[0].classList.remove('modal_active');
    allModal[1].classList.add('modal_active');
};

setTimeout(startModal, 1000);