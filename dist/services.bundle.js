/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/services.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/services.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/top_background.jpeg */ "./src/images/top_background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/rwags-logo.png */ "./src/images/rwags-logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/window-cleaners.png */ "./src/images/window-cleaners.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* services.css */

:root {
    --ffff-ffff: rgb(1, 1, 1);
}

* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html, body {
    margin: 0;
    padding: 0;
    background: rgba(245, 224, 224, 1);
    font-size: 16px;
}


/* MAIN/WRAP */
#about-main-body {
    display: flex;
    flex-direction: column;
}

/* ABOUT TOP LANDING */
/*
#landing-wrap-preswash,
#landing-wrap-gutcln,
#landing-wrap-slrclean  
*/
.landing-wrap {    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    height: 80vh;
    width: 100%;
}

#landing-wrap-winwash {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover; /* or contain? */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
}

.about-top-sub-cont {
    max-width: 600px;
    height: 65%;
    text-align: center;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding-left: 8px;
    padding-right: 8px;
    /* border: 1px solid red; */
}

.about-top-sub-cont > h1 {
    color: rgba(3, 6, 51, 1);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 4rem;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 0;
    /* -webkit-font-smoothing: antialiased; */
    /* border: 1px solid red; */
}

.about-top-sub-cont > h3 {
    color: rgba(219, 153, 36, 1);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    margin: 0;
    padding-top: 10px;
}


/* HEADER */
.top-main {
    position: absolute;
    width: 100vw;
    height: auto;
    padding-top: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    /* background-color: rgba(219, 153, 36, .3); */
}

.header-links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    gap: 5px;

    list-style-type: none;
    margin: 0;
    padding: 0;
}

.head-link-item {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
   
    padding: 8px 8px;
    margin: 0;
    height: min-content;
    /* border: 1px solid black; */
    /* links should be dark blue, with a yellow hover. font should be mild bold. */
};

.head-logo {
    text-decoration: none;
    color: inherit;
}

.head-link-item > a,
#nav-srvc-menu a {
    box-sizing: border-box;
    text-decoration: none;
 }

.head-link-item > .unselected,
.head-link-item.unselected {
    color: rgba(1, 36, 86, 1);
    font-size: 21px;
    font-weight: 500;
}

.head-link-item > .unselected:hover,
.head-link-item > .unselected:active {
    color: rgba(219, 153, 36, 1);
}

.head-logo {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain; /* or contain? */
    background-repeat: no-repeat;
    position: relative;

    width: 180px;
    height: 120px;
}

.head-logo a {
    position: absolute;  /* Positioning the link within the container */
    top: 0;
    left: 0;
    width: 100%; /* Ensures the link covers the full container */
    height: 100%;
    z-index: 10;
}

/* DROPDOWN MENU */
#dropdown-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    box-sizing: border-box;
    width: 200px;
    height: auto;
    /* background: rgba(14, 165, 233, .8); */
    background: rgba(1, 36, 86, .9);
    /* border: 1px solid rgba(219, 153, 36, 1); */
    /* rgba(2, 132, 199, */
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    /* transition: opacity 0.4s ease, transform 0.4s ease; /* Transition effects */
    /* transform: translateY(-10px); Initial transform state */
    /* pointer-events: none; */
    z-index: 3;
}

#dropdown-menu > a {
    box-sizing: border-box;
    text-decoration: none;
    padding: 7px;
    color: white;
    z-index: 10;
}

#dropdown-menu > a:hover {
    box-sizing: border-box;
    text-decoration: none;
    color: rgba(219, 153, 36, 1);
}

#dropdown-menu span {
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 18px;
}

/* MOBILE MENU */
.mobile-header {
    display: none;
    flex-direction: row;
}

.mobile-btn-wrap {
    position: fixed;
    top: 15px;
    left: 15px;

    box-sizing: border-box;
    padding: 0;
    margin: 0;
    z-index: 20;
}

#mobile-nav-btn {
    display: inline-flex;
    align-items: center;  
    justify-content: center;
    padding: 0; 
    width: 35px; 
    height: 35px; 
    border: 1px solid black;
    border-radius: 5px;
    background: rgba(14, 165, 233, .9);
    fill: rgba(234, 179, 8, 1);
    cursor: pointer;
}

/* nav overlay dialog menu */
#mobile-dialog {
    display: none;
    position: fixed; /* Position fixed to cover the whole screen  */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(1, 36, 86, 0.4);
    backdrop-filter: blur(7px);
    z-index: 1000;
    border: none;
    outline: none;
}

#mobile-dialog > nav {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    position: relative;
}

.nav-cls-btn-wrp {
    position: absolute;
    box-sizing: border-box;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: end;
    /* border: 1px solid pink; */
    /* padding: 3px; */
    width: 100%;
}

.dialog-lnks-wrap {
    /* border: 1px solid black; */
    min-height: 300px;
}

.dialog-lnks-wrap > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.nav-close-btn {
    display: inline-flex; /* Use flex to center SVG */
    align-items: center;   /* Center vertically */
    justify-content: center; /* Center horizontally */
    padding: 0; /* Remove default padding */
    width: 35px; /* Set desired width */
    height: 35px; /* Set desired height */
    border: 1px solid white;
    border-radius: 5px;
    fill: white;
    background: rgba(1, 1, 1, .4);
    cursor: pointer; /* Change cursor to pointer */
}

.dialog-lnks-wrap .head-link-item > .unselected,
.dialog-lnks-wrap .head-link-item.unselected {
    /* color: rgba(1, 36, 86, 1); */
    color: white;
    font-size: 28px;
    cursor: pointer;
}

.dialog-lnks-wrap .head-link-item > .unselected:hover,
.dialog-lnks-wrap .head-link-item > .unselected:active,
#nav-srvc-menu .unselected:active {
    color: rgba(219, 153, 36, 1);
    font-size: 28px;
}

.dialog-lnks-wrap .head-link-item > .selected-link {
    color: rgba(219, 153, 36, 1);
    font-size: 28px;
    background: inherit;
}

#nav-srvc-menu {
    display: none;
    width: 70%;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding-top: 7px;
    padding-bottom: 7px;
    /* border: 1px solid black; */
}

#nav-srvc-menu a {
    color: rgba(219, 153, 36, 1);
    /* background: rgba(1, 36, 86, .3); */
    background: rgba(14, 165, 233, .4);
    border-radius: 5px;
    padding: 4px 10px;
}


/* HEADER: SELECTED PAGE LINK */
.selected-link {
    color: rgba(219, 153, 36, 1);
    font-size: 23px;
    /* background: rgba(1, 36, 86, .3); */
    /* background: rgba(14, 165, 233, .4); */
    border-radius: 3px;
    font-weight: 500;
}

/* SERVICE SECTION */
/* section > .service-section-wrap {
    height: 700px;
}

.service-section-wrap {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
}

.srv-sec {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    font-size: 25px;
    margin: 0;
}

.img-desc-wrap {
    display: flex;
    gap: 20px;
}

.img-desc-wrap > p {
    max-width: 300px;
    /padding: 20px;
} */


/* ABOUT INFO */

#service-mid-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
    padding-top: 30px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
    gap: 15px;
}

.about-cont-wrap {
    /* border: 1px solid red; */
}

section > .about-cont-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;

    min-height: 430px; /* ADJUST THIS LATER with more content */
    max-height: max-content;
    /* min-width: 550px; */
    max-width: 100%;
    /* border: 1px solid red; */
    gap: 8px;
    padding-top: 40px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 10px;
    
}

.content-left-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 375px;
    padding-right: 5px;
    padding-left: 5px;
    /* border: 1px solid red; */
}

.content-left-wrap > h4 {
    color: rgba(16, 28, 86, 1);
    margin: 0;
    /* padding-bottom: 5px; */
    font-size: 1.2rem;
}

.content-left-wrap > h2,
.content-left-wrap > p {
    padding-top: 0;
    margin: 0;
}

.content-left-wrap > p {
    padding-top: 10px;
    font-weight: 500;
    color: rgba(16, 28, 86, .8);
    padding-bottom: 20px;
    /* border: 1px solid red; */
}


/* BETA */
/* IMG / slider section */
.but-img-mast-wrap {
    box-sizing: border-box;
    height: max-content;  
    width: 350px;
    height: 380px;
    position: relative;

    border: 1px solid black;
} 

.img-slider-wrap {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
}

#img-content {
    box-sizing: border-box;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
}

/* img spec props */
.img-cont {
    box-sizing: border-box;
    width: 350px;
    height: 380px;
    /* ration ===  1.0857 */
    z-index: 0;
}

#srvc-ww-img-1 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain; /* or contain? */
    background-repeat: no-repeat;
}


/* img slider buttons */
.scroll-slider {
    position: absolute;
    height: 50px;
    width: 40px;
    border: none;
    padding: 2px;
    background: none;
    z-index: 5;
    /* top: 45%; */
    top: 50%;
}

.scroll-l {
    left: 0;
}

.scroll-r {
    right: 0;
}

#Capa_r {
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
    fill: rgba(234, 179, 8, .9);
}

#Capa_l {
    width: 100%;
    height: 100%;
    transform: rotate(270deg);
    fill: rgba(14, 165, 233, .9);
}




/* established */
/* benefits section */
.benefits-title {
    text-align: center;
    letter-spacing: .1rem;
}

.serv-lower-title {
    /* border: 1px solid black; */
    text-align: center;
    padding: 10px;
    margin: 0;
    font-size: 1.4rem;
    color: rgba(3, 6, 51, .9);
    letter-spacing: .1rem;
}

.contact-button {
    all: unset;
    border: 1px solid black;
    border-radius: 3px;
    padding: 7px 30px;
    color: rgba(232, 123, 11, 1);
    background: rgba(33, 80, 173, .1);
}

.contact-button:hover {
    background: rgba(33, 80, 173, 1);
}

.content-left-wrap > a {
    text-decoration: none; /* Removes the underline */
    color: inherit;
}

.points-desc-wrap {
    /* min-width: 280px; */
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    /* border: 1px solid black; */

}

.serv-point-wrap {
    width: 200px;
    /* border: 1px solid black; */
    padding-left: 10px;
    /* gap: 10px; */
}

.serv-point-wrap > h4 {
    margin: 0;
    padding: 0;

    padding-bottom: 10px;
    color: rgba(16, 28, 86, 1);
}

.serv-point-wrap > p {
    margin: 0;
    padding: 0;
    font-size: 15px;
}

/* dividers */
.divider-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    min-width: 45px;
    /* border: 1px solid black; */
}

.divider-spn {
    width: 2.5px;
    height: 60%;
    /* background: #0f172a; */
    background: rgba(1, 36, 86, 0.94);;
    /* padding: 2px 5px; */
}


/* FOOTER SECTION */
.index-footer {
    min-height: 400px;
    display: flex;
    justify-content: center;
    /* background: rgba(2, 6, 23, .8); */
    /* background: rgba(217, 119, 6, .7); */
    background: rgba(14, 165, 233, .9);
}
 
.logo-foot-wrap {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
}

.foot-contact-left {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 400px;
}

.foot-contact-left > span {
    font-size: .6rem;
}
 
.footer-logo {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover; /* or cover? */
    background-repeat: no-repeat;
    background-color: rgba(234, 179, 8, .9);

    display: block;
    aspect-ratio: 1.53 / 1;
    width: 90%;
    max-width: 400px;
    height: auto;
    border: 1px solid rgba(234, 179, 8, .9);
    border-radius: 5px;
    object-fit: contain;
}

.logo-foot-wrap > div > h2 {
    color: rgba(240, 233, 221, 1);
}

.foot-links {
    display: flex;
    gap: 12px;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#phone-number {
    font-size: 2.5rem;
}

#phone-number > a {
    text-decoration: none; /* Removes the underline */
    color: inherit;
}

#phone-number > a:hover {
    color: rgba(219, 153, 36, .8);
}

.foot-link > a {
    text-decoration: none; /* Removes the underline */
    color: inherit;
    /* color: rgba(1, 36, 86, 0.94); */
    color: rgba(219, 153, 36, 1);
    font-size: 1rem;
}

@media screen and (width < 900px) {
    .about-top-sub-cont {
        max-width: 500px;
    }
    
    .about-top-sub-cont > h1 { 
        font-size: 3rem;
    }

    .about-top-sub-cont > h3 {
        font-size: 1.5rem;
    }

 }

@media screen and (width < 741px) { 
    /* landing */

    /* non-mobile-header */
    .top-main {
        display: none;
    }

    .points-desc-wrap {
        flex-direction: column;
        gap: 10px;
    }

    .serv-point-wrap {
        width: 330px;
        border-left: 3px solid green;
    }

    /* MOBILE NAV MENU */
    .mobile-header {
        position: absolute;
        top: 0;
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        z-index: 4;
    }

    .head-logo {
        width: 200px;
        height: 130px;
    }

    /* footer */
    .logo-foot-wrap {
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 30px;
    }

    .foot-contact-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
    }

    #phone-number {
        margin: 0;
        padding: 5px;
    }

    #phone-number > a:active {
        color: rgba(219, 153, 36, 1);
    }

    .foot-links {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .footer-logo {
        display: block;
        aspect-ratio: 1.53 / 1;
        width: 90%;
        max-width: 400px;
        height: auto;
        border: 1px solid rgba(234, 179, 8, .9);
        border-radius: 5px;
        object-fit: contain;
    }

}

@media screen and (width < 651px) { 
    .about-top-sub-cont {
        height: 60%;
    }

    .about-top-sub-cont > h1 {
        font-size: 2.8rem;
    }

    section > .about-cont-wrap  {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid black; */
        padding-top: 20px;
        gap: 13px;
    }

}


@media screen and (width < 401px) {
    .about-top-sub-cont > h1 {
        font-size: 2.6rem;
    }

        /* footer  */
    .foot-link > a {
        font-size: .8rem;
    }

    #phone-number {
        font-size: 2.1rem;
    }

    .foot-links {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 9px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/services.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;IACI,yBAAyB;AAC7B;;AAEA;IACI,mJAAmJ;AACvJ;;AAEA;IACI,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,eAAe;AACnB;;;AAGA,cAAc;AACd;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,sBAAsB;AACtB;;;;CAIC;AACD;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;;IAEpB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yDAAsD;IACtD,sBAAsB,EAAE,gBAAgB;IACxC,4BAA4B;IAC5B,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;;IAEtB,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;IACxB,wEAAwE;IACxE,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,yCAAyC;IACzC,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;IAC5B,yCAAyC;IACzC,eAAe;IACf,SAAS;IACT,iBAAiB;AACrB;;;AAGA,WAAW;AACX;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;;IAER,qBAAqB;IACrB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;;IAEtB,gBAAgB;IAChB,SAAS;IACT,mBAAmB;IACnB,6BAA6B;IAC7B,8EAA8E;AAClF,CAAA;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;;IAEI,sBAAsB;IACtB,qBAAqB;CACxB;;AAED;;IAEI,yBAAyB;IACzB,eAAe;IACf,gBAAgB;AACpB;;AAEA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,yDAAiD;IACjD,wBAAwB,EAAE,gBAAgB;IAC1C,4BAA4B;IAC5B,kBAAkB;;IAElB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB,GAAG,8CAA8C;IACnE,MAAM;IACN,OAAO;IACP,WAAW,EAAE,+CAA+C;IAC5D,YAAY;IACZ,WAAW;AACf;;AAEA,kBAAkB;AAClB;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,wCAAwC;IACxC,+BAA+B;IAC/B,6CAA6C;IAC7C,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,8EAA8E;IAC9E,0DAA0D;IAC1D,0BAA0B;IAC1B,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;AACnB;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,UAAU;;IAEV,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,kCAAkC;IAClC,0BAA0B;IAC1B,eAAe;AACnB;;AAEA,4BAA4B;AAC5B;IACI,aAAa;IACb,eAAe,EAAE,8CAA8C;IAC/D,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,gCAAgC;IAChC,0BAA0B;IAC1B,aAAa;IACb,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,aAAa;IACb,oBAAoB;IACpB,4BAA4B;IAC5B,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,oBAAoB,EAAE,2BAA2B;IACjD,mBAAmB,IAAI,sBAAsB;IAC7C,uBAAuB,EAAE,wBAAwB;IACjD,UAAU,EAAE,2BAA2B;IACvC,WAAW,EAAE,sBAAsB;IACnC,YAAY,EAAE,uBAAuB;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,6BAA6B;IAC7B,eAAe,EAAE,6BAA6B;AAClD;;AAEA;;IAEI,+BAA+B;IAC/B,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;;AAEA;;;IAGI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;IAC5B,qCAAqC;IACrC,kCAAkC;IAClC,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA,+BAA+B;AAC/B;IACI,4BAA4B;IAC5B,eAAe;IACf,qCAAqC;IACrC,wCAAwC;IACxC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA,oBAAoB;AACpB;;;;;;;;;;;;;;;;;;;;;;;;;;GA0BG;;;AAGH,eAAe;;AAEf;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mCAAmC;IACnC,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,iBAAiB,EAAE,wCAAwC;IAC3D,uBAAuB;IACvB,sBAAsB;IACtB,eAAe;IACf,2BAA2B;IAC3B,QAAQ;IACR,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;;AAExB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;IAC1B,SAAS;IACT,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;;IAEI,cAAc;IACd,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;IAC3B,oBAAoB;IACpB,2BAA2B;AAC/B;;;AAGA,SAAS;AACT,yBAAyB;AACzB;IACI,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;;IAElB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA,mBAAmB;AACnB;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,yDAAsD;IACtD,wBAAwB,EAAE,gBAAgB;IAC1C,4BAA4B;AAChC;;;AAGA,uBAAuB;AACvB;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,cAAc;IACd,QAAQ;AACZ;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,4BAA4B;AAChC;;;;;AAKA,gBAAgB;AAChB,qBAAqB;AACrB;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,iBAAiB;IACjB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,4BAA4B;IAC5B,iCAAiC;AACrC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB,EAAE,0BAA0B;IACjD,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;;AAEjC;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,UAAU;;IAEV,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;AAEA,aAAa;AACb;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,sBAAsB;IACtB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,iCAAiC;IACjC,sBAAsB;AAC1B;;;AAGA,mBAAmB;AACnB;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,oCAAoC;IACpC,uCAAuC;IACvC,kCAAkC;AACtC;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,yDAAiD;IACjD,sBAAsB,EAAE,cAAc;IACtC,4BAA4B;IAC5B,uCAAuC;;IAEvC,cAAc;IACd,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,uCAAuC;IACvC,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,qBAAqB;IACrB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB,EAAE,0BAA0B;IACjD,cAAc;AAClB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,qBAAqB,EAAE,0BAA0B;IACjD,cAAc;IACd,kCAAkC;IAClC,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;CAEH;;AAED;IACI,YAAY;;IAEZ,sBAAsB;IACtB;QACI,aAAa;IACjB;;IAEA;QACI,sBAAsB;QACtB,SAAS;IACb;;IAEA;QACI,YAAY;QACZ,4BAA4B;IAChC;;IAEA,oBAAoB;IACpB;QACI,kBAAkB;QAClB,MAAM;QACN,iBAAiB;QACjB,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,WAAW;QACX,UAAU;IACd;;IAEA;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA,WAAW;IACX;QACI,sBAAsB;QACtB,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,mBAAmB;QACnB,oBAAoB;IACxB;;IAEA;QACI,SAAS;QACT,YAAY;IAChB;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;;IAEA;QACI,cAAc;QACd,sBAAsB;QACtB,UAAU;QACV,gBAAgB;QAChB,YAAY;QACZ,uCAAuC;QACvC,kBAAkB;QAClB,mBAAmB;IACvB;;AAEJ;;AAEA;IACI;QACI,WAAW;IACf;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,6BAA6B;QAC7B,iBAAiB;QACjB,SAAS;IACb;;AAEJ;;;AAGA;IACI;QACI,iBAAiB;IACrB;;QAEI,YAAY;IAChB;QACI,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;QACf,uBAAuB;QACvB,mBAAmB;QACnB,QAAQ;IACZ;AACJ","sourcesContent":["/* services.css */\n\n:root {\n    --ffff-ffff: rgb(1, 1, 1);\n}\n\n* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background: rgba(245, 224, 224, 1);\n    font-size: 16px;\n}\n\n\n/* MAIN/WRAP */\n#about-main-body {\n    display: flex;\n    flex-direction: column;\n}\n\n/* ABOUT TOP LANDING */\n/*\n#landing-wrap-preswash,\n#landing-wrap-gutcln,\n#landing-wrap-slrclean  \n*/\n.landing-wrap {    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: end;\n\n    height: 80vh;\n    width: 100%;\n}\n\n#landing-wrap-winwash {\n    background-image: url('../images/top_background.jpeg');\n    background-size: cover; /* or contain? */\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.about-top-sub-cont {\n    max-width: 600px;\n    height: 65%;\n    text-align: center;\n\n    display: flex;\n    flex-direction: column;\n\n    box-sizing: border-box;\n    padding-left: 8px;\n    padding-right: 8px;\n    /* border: 1px solid red; */\n}\n\n.about-top-sub-cont > h1 {\n    color: rgba(3, 6, 51, 1);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 4rem;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    margin: 0;\n    /* -webkit-font-smoothing: antialiased; */\n    /* border: 1px solid red; */\n}\n\n.about-top-sub-cont > h3 {\n    color: rgba(219, 153, 36, 1);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 25px;\n    margin: 0;\n    padding-top: 10px;\n}\n\n\n/* HEADER */\n.top-main {\n    position: absolute;\n    width: 100vw;\n    height: auto;\n    padding-top: 10px;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    /* background-color: rgba(219, 153, 36, .3); */\n}\n\n.header-links {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    gap: 5px;\n\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n.head-link-item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n   \n    padding: 8px 8px;\n    margin: 0;\n    height: min-content;\n    /* border: 1px solid black; */\n    /* links should be dark blue, with a yellow hover. font should be mild bold. */\n};\n\n.head-logo {\n    text-decoration: none;\n    color: inherit;\n}\n\n.head-link-item > a,\n#nav-srvc-menu a {\n    box-sizing: border-box;\n    text-decoration: none;\n }\n\n.head-link-item > .unselected,\n.head-link-item.unselected {\n    color: rgba(1, 36, 86, 1);\n    font-size: 21px;\n    font-weight: 500;\n}\n\n.head-link-item > .unselected:hover,\n.head-link-item > .unselected:active {\n    color: rgba(219, 153, 36, 1);\n}\n\n.head-logo {\n    background-image: url('../images/rwags-logo.png');\n    background-size: contain; /* or contain? */\n    background-repeat: no-repeat;\n    position: relative;\n\n    width: 180px;\n    height: 120px;\n}\n\n.head-logo a {\n    position: absolute;  /* Positioning the link within the container */\n    top: 0;\n    left: 0;\n    width: 100%; /* Ensures the link covers the full container */\n    height: 100%;\n    z-index: 10;\n}\n\n/* DROPDOWN MENU */\n#dropdown-menu {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    box-sizing: border-box;\n    width: 200px;\n    height: auto;\n    /* background: rgba(14, 165, 233, .8); */\n    background: rgba(1, 36, 86, .9);\n    /* border: 1px solid rgba(219, 153, 36, 1); */\n    /* rgba(2, 132, 199, */\n    padding: 5px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    /* transition: opacity 0.4s ease, transform 0.4s ease; /* Transition effects */\n    /* transform: translateY(-10px); Initial transform state */\n    /* pointer-events: none; */\n    z-index: 3;\n}\n\n#dropdown-menu > a {\n    box-sizing: border-box;\n    text-decoration: none;\n    padding: 7px;\n    color: white;\n    z-index: 10;\n}\n\n#dropdown-menu > a:hover {\n    box-sizing: border-box;\n    text-decoration: none;\n    color: rgba(219, 153, 36, 1);\n}\n\n#dropdown-menu span {\n    box-sizing: border-box;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-size: 18px;\n}\n\n/* MOBILE MENU */\n.mobile-header {\n    display: none;\n    flex-direction: row;\n}\n\n.mobile-btn-wrap {\n    position: fixed;\n    top: 15px;\n    left: 15px;\n\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    z-index: 20;\n}\n\n#mobile-nav-btn {\n    display: inline-flex;\n    align-items: center;  \n    justify-content: center;\n    padding: 0; \n    width: 35px; \n    height: 35px; \n    border: 1px solid black;\n    border-radius: 5px;\n    background: rgba(14, 165, 233, .9);\n    fill: rgba(234, 179, 8, 1);\n    cursor: pointer;\n}\n\n/* nav overlay dialog menu */\n#mobile-dialog {\n    display: none;\n    position: fixed; /* Position fixed to cover the whole screen  */\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(1, 36, 86, 0.4);\n    backdrop-filter: blur(7px);\n    z-index: 1000;\n    border: none;\n    outline: none;\n}\n\n#mobile-dialog > nav {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    /* border: 1px solid red; */\n    position: relative;\n}\n\n.nav-cls-btn-wrp {\n    position: absolute;\n    box-sizing: border-box;\n    top: 10px;\n    right: 10px;\n    display: flex;\n    justify-content: end;\n    /* border: 1px solid pink; */\n    /* padding: 3px; */\n    width: 100%;\n}\n\n.dialog-lnks-wrap {\n    /* border: 1px solid black; */\n    min-height: 300px;\n}\n\n.dialog-lnks-wrap > ul {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n.nav-close-btn {\n    display: inline-flex; /* Use flex to center SVG */\n    align-items: center;   /* Center vertically */\n    justify-content: center; /* Center horizontally */\n    padding: 0; /* Remove default padding */\n    width: 35px; /* Set desired width */\n    height: 35px; /* Set desired height */\n    border: 1px solid white;\n    border-radius: 5px;\n    fill: white;\n    background: rgba(1, 1, 1, .4);\n    cursor: pointer; /* Change cursor to pointer */\n}\n\n.dialog-lnks-wrap .head-link-item > .unselected,\n.dialog-lnks-wrap .head-link-item.unselected {\n    /* color: rgba(1, 36, 86, 1); */\n    color: white;\n    font-size: 28px;\n    cursor: pointer;\n}\n\n.dialog-lnks-wrap .head-link-item > .unselected:hover,\n.dialog-lnks-wrap .head-link-item > .unselected:active,\n#nav-srvc-menu .unselected:active {\n    color: rgba(219, 153, 36, 1);\n    font-size: 28px;\n}\n\n.dialog-lnks-wrap .head-link-item > .selected-link {\n    color: rgba(219, 153, 36, 1);\n    font-size: 28px;\n    background: inherit;\n}\n\n#nav-srvc-menu {\n    display: none;\n    width: 70%;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    /* border: 1px solid black; */\n}\n\n#nav-srvc-menu a {\n    color: rgba(219, 153, 36, 1);\n    /* background: rgba(1, 36, 86, .3); */\n    background: rgba(14, 165, 233, .4);\n    border-radius: 5px;\n    padding: 4px 10px;\n}\n\n\n/* HEADER: SELECTED PAGE LINK */\n.selected-link {\n    color: rgba(219, 153, 36, 1);\n    font-size: 23px;\n    /* background: rgba(1, 36, 86, .3); */\n    /* background: rgba(14, 165, 233, .4); */\n    border-radius: 3px;\n    font-weight: 500;\n}\n\n/* SERVICE SECTION */\n/* section > .service-section-wrap {\n    height: 700px;\n}\n\n.service-section-wrap {\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n}\n\n.srv-sec {\n    display: flex;\n    justify-content: center;\n    border: 1px solid black;\n    font-size: 25px;\n    margin: 0;\n}\n\n.img-desc-wrap {\n    display: flex;\n    gap: 20px;\n}\n\n.img-desc-wrap > p {\n    max-width: 300px;\n    /padding: 20px;\n} */\n\n\n/* ABOUT INFO */\n\n#service-mid-wrap {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: space-around; */\n    padding-top: 30px;\n    padding-bottom: 40px;\n    padding-left: 20px;\n    padding-right: 20px;\n    gap: 15px;\n}\n\n.about-cont-wrap {\n    /* border: 1px solid red; */\n}\n\nsection > .about-cont-wrap {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n\n    min-height: 430px; /* ADJUST THIS LATER with more content */\n    max-height: max-content;\n    /* min-width: 550px; */\n    max-width: 100%;\n    /* border: 1px solid red; */\n    gap: 8px;\n    padding-top: 40px;\n    padding-right: 15px;\n    padding-left: 15px;\n    padding-bottom: 10px;\n    \n}\n\n.content-left-wrap {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 375px;\n    padding-right: 5px;\n    padding-left: 5px;\n    /* border: 1px solid red; */\n}\n\n.content-left-wrap > h4 {\n    color: rgba(16, 28, 86, 1);\n    margin: 0;\n    /* padding-bottom: 5px; */\n    font-size: 1.2rem;\n}\n\n.content-left-wrap > h2,\n.content-left-wrap > p {\n    padding-top: 0;\n    margin: 0;\n}\n\n.content-left-wrap > p {\n    padding-top: 10px;\n    font-weight: 500;\n    color: rgba(16, 28, 86, .8);\n    padding-bottom: 20px;\n    /* border: 1px solid red; */\n}\n\n\n/* BETA */\n/* IMG / slider section */\n.but-img-mast-wrap {\n    box-sizing: border-box;\n    height: max-content;  \n    width: 350px;\n    height: 380px;\n    position: relative;\n\n    border: 1px solid black;\n} \n\n.img-slider-wrap {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    overflow: hidden;\n}\n\n#img-content {\n    box-sizing: border-box;\n    height: 100%;\n    \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n/* img spec props */\n.img-cont {\n    box-sizing: border-box;\n    width: 350px;\n    height: 380px;\n    /* ration ===  1.0857 */\n    z-index: 0;\n}\n\n#srvc-ww-img-1 {\n    background-image: url('../images/window-cleaners.png');\n    background-size: contain; /* or contain? */\n    background-repeat: no-repeat;\n}\n\n\n/* img slider buttons */\n.scroll-slider {\n    position: absolute;\n    height: 50px;\n    width: 40px;\n    border: none;\n    padding: 2px;\n    background: none;\n    z-index: 5;\n    /* top: 45%; */\n    top: 50%;\n}\n\n.scroll-l {\n    left: 0;\n}\n\n.scroll-r {\n    right: 0;\n}\n\n#Capa_r {\n    width: 100%;\n    height: 100%;\n    transform: rotate(90deg);\n    fill: rgba(234, 179, 8, .9);\n}\n\n#Capa_l {\n    width: 100%;\n    height: 100%;\n    transform: rotate(270deg);\n    fill: rgba(14, 165, 233, .9);\n}\n\n\n\n\n/* established */\n/* benefits section */\n.benefits-title {\n    text-align: center;\n    letter-spacing: .1rem;\n}\n\n.serv-lower-title {\n    /* border: 1px solid black; */\n    text-align: center;\n    padding: 10px;\n    margin: 0;\n    font-size: 1.4rem;\n    color: rgba(3, 6, 51, .9);\n    letter-spacing: .1rem;\n}\n\n.contact-button {\n    all: unset;\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 7px 30px;\n    color: rgba(232, 123, 11, 1);\n    background: rgba(33, 80, 173, .1);\n}\n\n.contact-button:hover {\n    background: rgba(33, 80, 173, 1);\n}\n\n.content-left-wrap > a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n}\n\n.points-desc-wrap {\n    /* min-width: 280px; */\n    display: flex;\n    padding-left: 10px;\n    padding-right: 10px;\n    /* border: 1px solid black; */\n\n}\n\n.serv-point-wrap {\n    width: 200px;\n    /* border: 1px solid black; */\n    padding-left: 10px;\n    /* gap: 10px; */\n}\n\n.serv-point-wrap > h4 {\n    margin: 0;\n    padding: 0;\n\n    padding-bottom: 10px;\n    color: rgba(16, 28, 86, 1);\n}\n\n.serv-point-wrap > p {\n    margin: 0;\n    padding: 0;\n    font-size: 15px;\n}\n\n/* dividers */\n.divider-wrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    box-sizing: border-box;\n    min-width: 45px;\n    /* border: 1px solid black; */\n}\n\n.divider-spn {\n    width: 2.5px;\n    height: 60%;\n    /* background: #0f172a; */\n    background: rgba(1, 36, 86, 0.94);;\n    /* padding: 2px 5px; */\n}\n\n\n/* FOOTER SECTION */\n.index-footer {\n    min-height: 400px;\n    display: flex;\n    justify-content: center;\n    /* background: rgba(2, 6, 23, .8); */\n    /* background: rgba(217, 119, 6, .7); */\n    background: rgba(14, 165, 233, .9);\n}\n \n.logo-foot-wrap {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding-right: 20px;\n    padding-left: 20px;\n    width: 100%;\n}\n\n.foot-contact-left {\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 10px;\n    max-width: 400px;\n}\n\n.foot-contact-left > span {\n    font-size: .6rem;\n}\n \n.footer-logo {\n    background-image: url('../images/rwags-logo.png');\n    background-size: cover; /* or cover? */\n    background-repeat: no-repeat;\n    background-color: rgba(234, 179, 8, .9);\n\n    display: block;\n    aspect-ratio: 1.53 / 1;\n    width: 90%;\n    max-width: 400px;\n    height: auto;\n    border: 1px solid rgba(234, 179, 8, .9);\n    border-radius: 5px;\n    object-fit: contain;\n}\n\n.logo-foot-wrap > div > h2 {\n    color: rgba(240, 233, 221, 1);\n}\n\n.foot-links {\n    display: flex;\n    gap: 12px;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n#phone-number {\n    font-size: 2.5rem;\n}\n\n#phone-number > a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n}\n\n#phone-number > a:hover {\n    color: rgba(219, 153, 36, .8);\n}\n\n.foot-link > a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n    /* color: rgba(1, 36, 86, 0.94); */\n    color: rgba(219, 153, 36, 1);\n    font-size: 1rem;\n}\n\n@media screen and (width < 900px) {\n    .about-top-sub-cont {\n        max-width: 500px;\n    }\n    \n    .about-top-sub-cont > h1 { \n        font-size: 3rem;\n    }\n\n    .about-top-sub-cont > h3 {\n        font-size: 1.5rem;\n    }\n\n }\n\n@media screen and (width < 741px) { \n    /* landing */\n\n    /* non-mobile-header */\n    .top-main {\n        display: none;\n    }\n\n    .points-desc-wrap {\n        flex-direction: column;\n        gap: 10px;\n    }\n\n    .serv-point-wrap {\n        width: 330px;\n        border-left: 3px solid green;\n    }\n\n    /* MOBILE NAV MENU */\n    .mobile-header {\n        position: absolute;\n        top: 0;\n        padding-top: 20px;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        width: 100%;\n        z-index: 4;\n    }\n\n    .head-logo {\n        width: 200px;\n        height: 130px;\n    }\n\n    /* footer */\n    .logo-foot-wrap {\n        flex-direction: column;\n        padding-top: 20px;\n        padding-bottom: 30px;\n    }\n\n    .foot-contact-left {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding-bottom: 30px;\n    }\n\n    #phone-number {\n        margin: 0;\n        padding: 5px;\n    }\n\n    #phone-number > a:active {\n        color: rgba(219, 153, 36, 1);\n    }\n\n    .foot-links {\n        padding-top: 5px;\n        padding-bottom: 5px;\n    }\n\n    .footer-logo {\n        display: block;\n        aspect-ratio: 1.53 / 1;\n        width: 90%;\n        max-width: 400px;\n        height: auto;\n        border: 1px solid rgba(234, 179, 8, .9);\n        border-radius: 5px;\n        object-fit: contain;\n    }\n\n}\n\n@media screen and (width < 651px) { \n    .about-top-sub-cont {\n        height: 60%;\n    }\n\n    .about-top-sub-cont > h1 {\n        font-size: 2.8rem;\n    }\n\n    section > .about-cont-wrap  {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        /* border: 1px solid black; */\n        padding-top: 20px;\n        gap: 13px;\n    }\n\n}\n\n\n@media screen and (width < 401px) {\n    .about-top-sub-cont > h1 {\n        font-size: 2.6rem;\n    }\n\n        /* footer  */\n    .foot-link > a {\n        font-size: .8rem;\n    }\n\n    #phone-number {\n        font-size: 2.1rem;\n    }\n\n    .foot-links {\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        gap: 9px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/services.css":
/*!*********************************!*\
  !*** ./src/styles/services.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_services_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./services.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/services.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_services_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_services_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_services_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_services_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/rwags-logo.png":
/*!***********************************!*\
  !*** ./src/images/rwags-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2eaa5bfc03bb51787044.png";

/***/ }),

/***/ "./src/images/top_background.jpeg":
/*!****************************************!*\
  !*** ./src/images/top_background.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac4321e6ab639487f744.jpeg";

/***/ }),

/***/ "./src/images/window-cleaners.png":
/*!****************************************!*\
  !*** ./src/images/window-cleaners.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a83c518b076157ec2d09.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"services": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/scripts/services.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_services_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/services.css */ "./src/styles/services.css");
// services.js //



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
/******/ })()
;
//# sourceMappingURL=services.bundle.js.map