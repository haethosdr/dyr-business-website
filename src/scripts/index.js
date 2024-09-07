// index.js //

import '../styles/index.css';

console.log("from index.js");

let slideIndex = 0;
const WIDTH = 460;

const scrollLeft = function () {
    if (slideIndex === 0) return;
    slideIndex -= 1;
    shiftPos();
};

const scrollRight = function () { 
    const quoteSlides = [...document.querySelectorAll('.quote-slide')];
    if (slideIndex === quoteSlides.length - 1) return;
    slideIndex += 1;
    shiftPos();
};

const shiftPos = function (ms = 400) {
    const sliderWrap = document.querySelector('#slide-frame');
    sliderWrap.style.transitionDuration = `${ms}ms`;
    sliderWrap.style.transform = `translateX(${-WIDTH * slideIndex}px)`;
};


document.addEventListener('DOMContentLoaded', () => {
    const serviceMenuLink = document.querySelector('#services');
    const dropDownMenu = document.querySelector('#dropdown-menu');
    // serviceMenuLink.getBoundingClientRect();

    const toggleMenuDisplay = function () {
      dropDownMenu.style.top = `${serviceMenuLink.offsetTop + 40}px`;
      dropDownMenu.style.left = `${serviceMenuLink.offsetLeft}px`;
      dropDownMenu.style.display = 'flex';
    };

    serviceMenuLink.addEventListener('mouseover', () => {
        toggleMenuDisplay();
        console.log('serviceMenuLink: mouseover');
    });

    serviceMenuLink.addEventListener('mouseout', () => {
        dropDownMenu.style.display = 'none';
        console.log("mouseout");
    });

    dropDownMenu.addEventListener('mouseover', () => {
        toggleMenuDisplay();
        console.log('dropDownMenu: mouseover');
    });

// img slider functionality:
    const quotescrollBtn = [...document.querySelectorAll('.scroll-slider')];
    quotescrollBtn[0].addEventListener('click', scrollLeft);
    quotescrollBtn[1].addEventListener('click', scrollRight);
});

