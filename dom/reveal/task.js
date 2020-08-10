'use strict'

const revealingElement = Array.from(document.querySelectorAll('.reveal'));

// console.log(revealingElement[0].getBoundingClientRect().top < 0);
// console.log(revealingElement[0].getBoundingClientRect().top > window.innerHeight);
// let ruleOne = (revealingElement[0].getBoundingClientRect().top > window.innerHeight || revealingElement[0].getBoundingClientRect().top < 0);
// let ruleOne = revealingElement[0].getBoundingClientRect().top < window.innerHeight && revealingElement[0].getBoundingClientRect().top > 0;
// window.addEventListener('scroll', () => {
    // console.log(revealingElement[0].getBoundingClientRect().top < window.innerHeight);
// });

for (let element of revealingElement) {
    window.addEventListener('scroll', () => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('reveal_active');
        }
    });
};