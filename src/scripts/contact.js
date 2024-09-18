// contact.js //

import '../styles/contact.css';

console.log("from contact.js");

const elem = (prop, par) => (par || document).querySelector(prop);
// const elems = (prop, par) => (par || document).querySelectorAll(prop);

document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('#contact');
    page.childNodes[0].classList.remove('unselected');
    page.childNodes[0].classList.add('selected-link');

    const contactForm = document.querySelector('#contact-form');
    const submitButton = document.querySelector('#form-submit');

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

       // nav overlay opening
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

    // nav subservice menu opening
    const subNavbtn = elem('#services-nav');
    const subNavDisplay = elem('#nav-srvc-menu');
    subNavbtn.addEventListener('click', () => {
        if (subNavDisplay.style.display === 'none') {
            subNavDisplay.style.display = 'flex';
        } else subNavDisplay.style.display = 'none';
    });

    submitButton.addEventListener('submit', () => {
        
        contactForm.clear();
    });

});




// const initMap = function() {

// }

// need google api key from google cloud to do map range overlay //