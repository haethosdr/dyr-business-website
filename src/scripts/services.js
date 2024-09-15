// services.js //

import '../styles/services.css';

console.log("from services.js");

const elem = (prop, par) => (par || document).querySelector(prop);
const elems = (prop, par) => (par || document).querySelectorAll(prop);

let sliderIndex = 0;

const nextImg = function () {
    const images = elems('.img-cont');
    if (sliderIndex === images.length - 1) return;
   
    sliderIndex += 1;
    shiftImage();
    console.log('nextImg');
};

const prevImg = function () {
    if (sliderIndex === 0) return
    sliderIndex -= 1;
    shiftImage();
    console.log('prevImg');
};

const shiftImage = function (ms = 400) {
    const slideFrame = elem('#img-content');
    const images = elems('.img-cont');
    const newWIDTH = slideFrame.getBoundingClientRect().width / (images.length);
    console.log(newWIDTH);
    slideFrame.style.transitionDuration = `${ms}ms`;
    slideFrame.style.transform = `translateX(${-newWIDTH * sliderIndex}px)`;
};


document.addEventListener('DOMContentLoaded', () => {
    const serviceMenuLink = document.querySelector('#services');
    const dropDownMenu = document.querySelector('#dropdown-menu');
    // serviceMenuLink.getBoundingClientRect();
    const imgSlideButtons = elems('.scroll-slider');

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

    // img slider functionality: //
    imgSlideButtons[0].addEventListener('click', prevImg);
    imgSlideButtons[1].addEventListener('click', nextImg);

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