'use strict'

// const book = document.getElementById('book');
// const booksFonts = Array.from(document.getElementsByClassName('font-size'));
const booksFonts = Array.from(document.querySelectorAll('.font-size'));

// console.log(booksFonts[0].getAttribute('data-size'));
// console.log(booksFonts[0].getAttribute('class').includes('font-size_active'));
// booksFonts[0].classList.add('font-size_active');

function removeActiveClass(variable) {
    booksFonts.forEach(element => {
        element.classList.remove('font-size_active')
    });
};

booksFonts.map(element => {
    // console.log(element.getAttribute('class').includes('font-size_active'));
    // console.log(element.dataset.size === 'small');
    // console.log(element.closest('.book'));
    // console.log(element.classList.contains('font-size_active'));
    
    element.addEventListener('click', (event) => {
        event.preventDefault();
        removeActiveClass()
        event.target.classList.add('font-size_active');
        element.closest('.book').className = 'book'
        if (event.target.dataset.size === 'small') {
            element.closest('.book').classList.add('book_fs-small')
        }
        if (event.target.dataset.size === 'big') {
            element.closest('.book').classList.add('book_fs-big')
        }
    })
});

// for (let el of booksFonts) {
//     el.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log(this.dataset.size);
//     })
// };