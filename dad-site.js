const pic1 = 'images/dad.jpg';
const pic2 = 'images/dad2.jpg';
const pic3 = 'images/dad3.jpg';
const pic4 = 'images/dad4.jpg';
const gallerySlide = document.querySelector('#gallery-slide');
const aboutSlide = document.querySelector('#about-slide');
const shopSlide = document.querySelector('#shop-slide');
const leftSlideButton = document.querySelector('.left-slide-button');
const rightSlideButton = document.querySelector('.right-slide-button');
const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');
const aboutBtnRight = document.querySelector('#about-btn-right');
const aboutBtnLeft = document.querySelector('#about-btn-left');
const shopBtnRight = document.querySelector('#shop-btn-right');
const shopBtnLeft = document.querySelector('#shop-btn-left');
const arrLeft = document.querySelector('#arrow-left');
const arrRight = document.querySelector('#arrow-right');
const aboutArrLeft = document.querySelector('#about-arrow-left');
const aboutArrRight = document.querySelector('#about-arrow-right');
const shopArrLeft = document.querySelector('#shop-arrow-left');
const shopArrRight = document.querySelector('#shop-arrow-right');
const hamburger = document.querySelector('#hamburger');
const dropDown = document.querySelector('.drop-down');
const images = [pic1, pic2, pic3, pic4];
const slides = [gallerySlide, aboutSlide, shopSlide];
let currentSlide = slides[0];
currentSlide.style.display = "flex";

const slideRight = () => {
    currentSlide.style.display = "none";
    let index = slides.indexOf(currentSlide) + 1;
    if (index == slides.length) {
        index = 0;
    }
    currentSlide = slides[index];
    currentSlide.style.display = "flex";
}
const slideLeft = () => {
    currentSlide.style.display = "none";
    let index = slides.indexOf(currentSlide) - 1;
    if (index < 0) {
        index = slides.length - 1;
    }
    currentSlide = slides[index];
    currentSlide.style.display = "flex";
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
aboutBtnRight.addEventListener('click', slideRight);
aboutBtnLeft.addEventListener('click', slideLeft);
shopBtnRight.addEventListener('click', slideRight);
shopBtnLeft.addEventListener('click', slideLeft);

arrLeft.addEventListener('mouseover', function () {
    btnLeft.style.display = 'block';
})
arrLeft.addEventListener('mouseout', function () {
    btnLeft.style.display = 'none';
})
arrRight.addEventListener('mouseover', function () {
    btnRight.style.display = 'block';
})
arrRight.addEventListener('mouseout', function () {
    btnRight.style.display = 'none';
})
aboutArrLeft.addEventListener('mouseover', function () {
    aboutBtnLeft.style.display = 'block';
})
aboutArrLeft.addEventListener('mouseout', function () {
    aboutBtnLeft.style.display = 'none';
})
aboutArrRight.addEventListener('mouseover', function () {
    aboutBtnRight.style.display = 'block';
})
aboutArrRight.addEventListener('mouseout', function () {
    aboutBtnRight.style.display = 'none';
})
shopArrLeft.addEventListener('mouseover', function () {
    shopBtnLeft.style.display = 'block';
})
shopArrLeft.addEventListener('mouseout', function () {
    shopBtnLeft.style.display = 'none';
})
shopArrRight.addEventListener('mouseover', function () {
    shopBtnRight.style.display = 'block';
})
shopArrRight.addEventListener('mouseout', function () {
    shopBtnRight.style.display = 'none';
})

