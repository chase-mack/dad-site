const pic1 = 'images/dad.jpg';
const pic2 = 'images/dad2.jpg';
const pic3 = 'images/dad3.jpg';
const pic4 = 'images/dad4.jpg';
const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');
const arrLeft = document.querySelector('#arrow-left');
const arrRight = document.querySelector('#arrow-right');
const slideshow = document.querySelector('#slideshow');
const hamburger = document.querySelector('#hamburger');
const dropDown = document.querySelector('.drop-down');
const slides = [pic1, pic2, pic3, pic4];
let currentSlide = slides[0];

const slideRight = () => {
    let index = slides.indexOf(currentSlide) + 1;
    if (index == slides.length) {
        index = 0;
    }
    currentSlide = slides[index];
    slideshow.style.backgroundImage = "url(" + currentSlide + ")";
}
const slideLeft = () => {
    let index = slides.indexOf(currentSlide) - 1;
    if (index < 0) {
        index = slides.length - 1;
    }
    currentSlide = slides[index];
    slideshow.style.backgroundImage = "url(" + currentSlide + ")";
}

const openDrawer = () => {
    dropDown.style.display = "flex";
}

document.addEventListener('click', function (e) {
    let isClickInsideDropdown = hamburger.contains(e.target);
    if (dropDown.style.display === "flex" && !isClickInsideDropdown) {
        dropDown.style.display = "none";
    }
})

btnRight.addEventListener('click', slideRight);
btnLeft.addEventListener('click', slideLeft);

arrLeft.addEventListener('mouseover', function () {
    btnLeft.style.display = 'block';
})
arrRight.addEventListener('mouseover', function () {
    btnRight.style.display = 'block';
})
arrLeft.addEventListener('mouseout', function () {
    btnLeft.style.display = 'none';
})
arrRight.addEventListener('mouseout', function () {
    btnRight.style.display = 'none';
})

