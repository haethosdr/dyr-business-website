// index.js //

import '../styles/index.css';

console.log("from index.js");

let slideIndex = 0;

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
    const calcWIDTH = sliderWrap.getBoundingClientRect().width;
    sliderWrap.style.transitionDuration = `${ms}ms`;
    sliderWrap.style.transform = `translateX(${-calcWIDTH * slideIndex}px)`;
};


document.addEventListener('DOMContentLoaded', () => {
    const serviceMenuLink = document.querySelector('#services');
    const dropDownMenu = document.querySelector('#dropdown-menu');

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

    // nav overlay opening
    const navOpenBtn = document.querySelector('#mobile-nav-btn');
    const navDialog = document.querySelector('#mobile-dialog');
    const closeDiaNav = document.querySelector('.nav-close-btn');
    
    navOpenBtn.addEventListener('click', () => {
        navDialog.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeDiaNav.addEventListener('click', () => {
        subNavDisplay.style.display = 'none';
        document.body.style.overflow = '';
        navDialog.style.display = 'none';
    });
    
    // nav subservice menu opening
    const subNavbtn = document.querySelector('#services-nav');
    const subNavDisplay = document.querySelector('#nav-srvc-menu');
    subNavbtn.addEventListener('click', () => {
        if (subNavDisplay.style.display === 'none') {
            subNavDisplay.style.display = 'flex';
        } else subNavDisplay.style.display = 'none';
    });

});

