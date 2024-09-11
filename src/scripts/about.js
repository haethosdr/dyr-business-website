// about.js //

import '../styles/about.css';

console.log("from about.js");

const elem = (prop, par) => (par || document).querySelector(prop);
const elems = (prop, par) => (par || document).querySelectorAll(prop);
//const elementNew = (tag, prop) => Object.assign(document.createElement(tag), prop);


// will need to get width fronm bounding rect when media query is applied //
// need WIDTH = slideFrame.getBoundingClientRect().width / (images.length - 1);

let sliderIndex = 0;
const WIDTH = 350;

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
    console.log(slideFrame.getBoundingClientRect());
    const newWIDTH = slideFrame.getBoundingClientRect().width / (images.length);
    console.log(newWIDTH);
    slideFrame.style.transitionDuration = `${ms}ms`;
    slideFrame.style.transform = `translateX(${-newWIDTH * sliderIndex}px)`;
};

document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('#about');
    page.childNodes[0].classList.remove('unselected');
    page.childNodes[0].classList.add('selected-link');

    const serviceMenuLink = document.querySelector('#services');
    const dropDownMenu = document.querySelector('#dropdown-menu');
    const imgSlideButtons = elems('.scroll-slider');
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

    // img slider functionality: //
    imgSlideButtons[0].addEventListener('click', prevImg);
    imgSlideButtons[1].addEventListener('click', nextImg);

    const navOpenBtn = elem('#mobile-nav-btn');
    const navDialog = elem('#mobile-dialog');
    const closeDiaNav = elem('.nav-close-btn');

    navOpenBtn.addEventListener('click', () => {
        navDialog.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeDiaNav.addEventListener('click', () => {
        subNavDisplay.style.display = 'none';
        document.body.style.overflow = '';
        navDialog.style.display = 'none';
    });

    const subNavbtn = elem('#services-nav');
    const subNavDisplay = elem('#nav-srvc-menu');
    subNavbtn.addEventListener('click', () => {
        if (subNavDisplay.style.display === 'none') {
            subNavDisplay.style.display = 'flex';
        } else subNavDisplay.style.display = 'none';
    });



});

