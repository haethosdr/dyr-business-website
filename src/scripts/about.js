// about.js //

import '../styles/about.css';

console.log("from about.js");

document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('#about');
    page.childNodes[0].classList.remove('unselected');
    page.childNodes[0].classList.add('selected-link');

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
});


// photo slider functionality //

// 1. create two buttons. Attach eventlisteners.
// 2. get photos together w/ dimensions of one standard, else set image bg to contain ?.
// 3. load them into html/create elements
// 4. create dontainer div w/ overflow settings.
// 5. 