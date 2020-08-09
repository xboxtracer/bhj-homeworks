'use strict'

const myGallery = document.querySelectorAll('.slider__item');
const arrowNext = document.querySelector('.slider__arrow_next');
const arrowPrev = document.querySelector('.slider__arrow_prev');

arrowNext.addEventListener('click', () => {
    i++;
    setImage();
});
arrowPrev.addEventListener('click', () => {
    --i;
    setImage();
});

let i = 0;


function setImage() {
    for(let j = 0; j < myGallery.length; j++) {
        myGallery[j].classList.remove('slider__item_active');
    };
    if (i < 0) {
        i = myGallery.length - 1;
    } else if ( i >= myGallery.length) {
        i = 0;
    };
    myGallery[i].classList.toggle('slider__item_active');
};