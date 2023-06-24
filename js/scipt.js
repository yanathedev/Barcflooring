const   burgerBtn = document.querySelector('.hamburger-lines'),
        burgerMenu = document.querySelector('.sub'),
        burgerLine = document.querySelectorAll('.line'),
        burgerLine1 = document.querySelector('.line1'),
        burgerLine2 = document.querySelector('.line2'),
        burgerLine3 = document.querySelector('.line3');

document.addEventListener('DOMContentLoaded', () => { 

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('show')
    document.querySelector('body').classList.toggle('hide')

    for (let i = 0; i < 3; i++) {
        burgerLine[i].classList.toggle(`line${i + 1}--active`) 
    }

})

}); 

