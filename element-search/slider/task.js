'use strict'

const myGallery = document.querySelectorAll('.slider__item');
const arrowNext = document.querySelector('.slider__arrow_next');
const arrowPrev = document.querySelector('.slider__arrow_prev');

arrowNext.addEventListener('click', nextPic);
arrowPrev.addEventListener('click', prevPic);

let i = 0;

function nextPic() {
    myGallery[i].classList.toggle('slider__item_active');
    i++;
    if (i === myGallery.length) {
        i = 0;
    };
    myGallery[i].classList.toggle('slider__item_active');
}
function prevPic() {
    myGallery[i].classList.toggle('slider__item_active');
    if (i === 0) {
        i = myGallery.length;
    };
    i--;
    myGallery[i].classList.toggle('slider__item_active');
}
// for(let i = 0; i < myGallery.length; i++) {
//     console.log(myGallery[i].classList)
// }