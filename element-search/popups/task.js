'use strict'

const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const modalMainClose = document.querySelector('#modal_main .modal__close_times');
const modalSuccessClose = document.querySelector('#modal_success .modal__close_times');
const modalChange = document.querySelector('.show-success');

modalMainClose.addEventListener('click', repeatModal);
modalSuccessClose.addEventListener('click', closeModal);
modalChange.addEventListener('click', changeModal);

setTimeout(startModal, 1000);

function startModal() {
    modalMain.classList.toggle('modal_active');
};

function repeatModal() {
    modalMain.classList.toggle('modal_active');
    setTimeout(startModal, 1000);
};

function closeModal() {
    modalSuccess.classList.remove('modal_active');
};

function changeModal() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};
