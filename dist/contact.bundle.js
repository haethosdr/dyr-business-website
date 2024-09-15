/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/contact.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/contact.css ***!
  \**********************************************************************/
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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* contact.css */

:root {
    --ffff-ffff: rgb(1, 1, 1);
}

* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html, body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: #e0f2fe;
}

/* MAIN/WRAP */
#about-main-body {
    display: flex;
    flex-direction: column;
}

/* ABOUT TOP LANDING */
#landing-wrap {
    /* background-image: url('../images/contact-img3.png'); */
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover; /* or contain? */
    background-repeat: no-repeat;
    background-position: right;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 80vh;
    width: 100%;
    z-index: 0;
}

.landing-overlay {
    position: absolute;
    height: 80vh;
    width: 100%;
    /* background: rgba(50, 36, 86, 0.3); */
    background: rgba(135, 121, 171, 0.3);
    backdrop-filter: blur(7px);
    z-index: 1;

}

.about-top-sub-cont {
    max-width: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    z-index: 3;
}

.about-top-sub-cont > h1 {
    /* color: white; */
    color: rgba(1, 36, 86, 1);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 4rem;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
    /* border: 1px solid red; */
}

.about-top-sub-cont > h3 {
    /* color: rgba(219, 153, 36, 1); */
    /* color: rgba(234, 179, 8, .9); */
    /* color: rgba(207, 93, 23, .9); */
    /* color: rgba(1, 36, 86, 1); */
    /* color: rgba(219, 153, 36, 1); */
    /* color: rgba(14, 165, 233, .7); */
    color: rgba(219, 153, 36, .9);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.7rem;
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
    z-index: 3;
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


/* HEADER: SELECTED PAGE LINK */
.selected-link {
    color: rgba(219, 153, 36, 1);
    font-size: 23px;
    font-weight: 500;
    /* border-bottom: 3px solid rgba(14, 165, 233, .4); */
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
    z-index: 2;
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


/* CONTACT INFO AREA */

.contact-info-wrap {
    display: flex;
}

section > .contact-info-wrap {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    /* border: 1px solid green; */
    /* min-height: 400px; */
    /* padding: 15px; */
    padding-bottom: 10px;
    
}

.info-subwrap {
    /* display: flex;
    flex-direction: column; */

    padding-bottom: 30px;
    padding-right: 20px;
    padding-left: 25px;
    /* border: 1px solid red; */
}

.cont-into-title {
    text-align: center;
    font-size: 26px;
    letter-spacing: .1rem;
    /* height: 50px; */
    color: rgba(1, 36, 86, 1);
    /* border: 1px solid green; */
}

/* upper divider */
.divider-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    height: 35px;
    min-width: 100%;
    /* border: 1px solid black; */
}

.divider-spn {
    width: 75%;
    height: 2.5px;
    background: #0369a1;
}

.contact-subwrap {
    display: flex;
    justify-content: center;
    min-width: 85%;
    max-width: 700px;
    /* border-radius: 5px; */
    /* border: 1px solid black; */
    /* background: #0369a1; */
    background: rgba(14, 165, 233, .5);
    border-left: 4px solid rgba(14, 165, 233, .9);
    padding: 15px;

}

.adr-link-wrap > a {
    color: inherit;
    text-decoration: underline solid white;
}

.cont-into-box {
    padding: 10px;
}

.cont-into-box > h3 {
    margin: 0;
    padding-bottom: 12px;
    /* color: rgba(219, 153, 36, 1); */
    /* color: white; */
    /* color: rgba(14, 165, 233, 1); */
    color: rgba(219, 153, 36, 1);

    font-size: 21px;
    width: max-content;
    -webkit-font-smoothing: antialiased;
}

.email-num-cont {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.cont-into-box p {
    padding: 0;
    margin: 0;
    /* color: #0369a1; */
    /* color: rgba(219, 153, 36, 1); */
    color: rgba(16, 28, 86, 1);
    font-size: 1rem;
    font-weight: 500;
}

.email-num-cont > p {
    /* border: 1px solid black; */
    border-radius: 5px;
    padding: 6px 3px;
    width: max-content;
}

.email-num-cont > p:hover,
.email-num-cont > p:active {
    border-radius: 5px;
    /* background: #0369a1;
    color: rgba(219, 153, 36, 1); */
    background: rgba(219, 153, 36, 1);
    color:rgba(16, 28, 86, 1);
    /* padding: 6px 4px; */
}

.email-num-cont a {
    text-decoration: none; /* Removes the underline */
    color: inherit;
    height: 100%;
    width: 100%;
    /* border: 1px solid black;
    border-radius: 5px; */
    /* padding: 5px 5px; */
}

/* divider */
.divider-wrap-lower {
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    width: 5%;
    /* border: 1px solid black; */
}

.divider-spn-lower {
    width: 2.5px;
    height: 60%;
    /* background: rgba(1, 36, 86, 0.94); */
    background: white;
}


/* MAP SECTION */
.map-wrap {
    display: flex;
    justify-content: center;
    /* padding-left: 10px;
    padding-right: 10px; */
    padding-top: 10px;
    padding-bottom: 5px;
}

#goog-map {
    width: 88%;
    min-height: 320px;
    border: none;
    border-left: 4px solid rgba(14, 165, 233, .9)
}


/* Form */
.form-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    padding-bottom: 50px;
    padding-top: 30px;
    gap: 5px;
}

.form-section-intro {
    color: #0369a1;
    text-align: center;
    box-sizing: border-box;
    width: 88%;
}

.form-section-title {
    box-sizing: border-box;
    width: 88%;
    margin: 0;
    /* padding: 8px;
    padding-top: 20px; */
    font-size: 1.3rem;
    text-align: center;
    /* border: 1px solid green; */
    
}

#contact-form {
    width: 85%;
    /* border: 1px solid black; */
    border-left: 4px solid rgba(14, 165, 233, .9);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px;
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

/* .sub-input-group {
    display: flex;
    flex-direction: column;
    border: 1px solid yellow;
    gap: 2px;
} */

.form-input-field {
    box-sizing: border-box;
    border: 1px solid black;
    padding: 7px;
    /* background-color: #fff; */
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
}

.form-input-field:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}

.name-group {
    display: flex;
    flex-direction: row;
    border: 1px solid green;
    gap: 8px;
}

#form-submit {
    all: unset;
    text-align: center;
    border: 1px solid black;
    border-radius: 3px;
    padding: 7px 30px;
    color: rgba(232, 123, 11, 1);
    background: rgba(33, 80, 173, 1);
    width: 15%;
}

#form-submit:hover {
    background: rgba(16, 28, 86, 1);
    /* border: 1px solid rgba(232, 123, 11, 1); */
}

textarea.form-input-field {
    resize: vertical;
    min-height: 100px;
    max-width: 100%;
}

.form-label {
    font-size: 1rem;
}

.form-req-span {
    color: red;
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



/* works for far */
@media screen and (width < 741px) {

#landing-wrap {
    justify-content: end;
}

.about-top-sub-cont {
    height: 65%;
}

/* map */
#goog-map {
    width: 91%;
}

/* form */
.form-label {
    font-size: .9rem;
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

    /* non-mobile-header */
    .top-main {
        display: none;
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
}


@media screen and (width < 650px) {
/* contact section */
    .contact-subwrap {
        flex-direction: column;
        align-items: start;
    }

    /* dividers for contact */
    .divider-wrap-lower {
        justify-content: center;
        width: 100%;
        height: 20px;
        /* border: 1px solid black; */
    } 

    .divider-spn-lower {
        width: 45%;
        height: 2.5px;
        /* background: rgba(1, 36, 86, 0.94); */
    }

    .email-num-cont > p {
        padding: 6px 0px;
    }
}


@media screen and (width < 401px) { 
    /* section > .about-cont-wrap {
        padding-right: .5rem;
        padding-left: .5rem;
        border: 1px solid red;
    } */

    /* map */
    #goog-map {
        width: 95%;
    }

    /* form */
    .form-label {
        font-size: .8rem;
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

`, "",{"version":3,"sources":["webpack://./src/styles/contact.css"],"names":[],"mappings":"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","sourcesContent":["/* contact.css */\n\n:root {\n    --ffff-ffff: rgb(1, 1, 1);\n}\n\n* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    background: #e0f2fe;\n}\n\n/* MAIN/WRAP */\n#about-main-body {\n    display: flex;\n    flex-direction: column;\n}\n\n/* ABOUT TOP LANDING */\n#landing-wrap {\n    /* background-image: url('../images/contact-img3.png'); */\n    background-image: url('../images/top_background.jpeg');\n    background-size: cover; /* or contain? */\n    background-repeat: no-repeat;\n    background-position: right;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    height: 80vh;\n    width: 100%;\n    z-index: 0;\n}\n\n.landing-overlay {\n    position: absolute;\n    height: 80vh;\n    width: 100%;\n    /* background: rgba(50, 36, 86, 0.3); */\n    background: rgba(135, 121, 171, 0.3);\n    backdrop-filter: blur(7px);\n    z-index: 1;\n\n}\n\n.about-top-sub-cont {\n    max-width: 400px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    padding-top: 50px;\n    z-index: 3;\n}\n\n.about-top-sub-cont > h1 {\n    /* color: white; */\n    color: rgba(1, 36, 86, 1);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 4rem;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin: 0;\n    /* border: 1px solid red; */\n}\n\n.about-top-sub-cont > h3 {\n    /* color: rgba(219, 153, 36, 1); */\n    /* color: rgba(234, 179, 8, .9); */\n    /* color: rgba(207, 93, 23, .9); */\n    /* color: rgba(1, 36, 86, 1); */\n    /* color: rgba(219, 153, 36, 1); */\n    /* color: rgba(14, 165, 233, .7); */\n    color: rgba(219, 153, 36, .9);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.7rem;\n}\n\n\n/* HEADER */\n.top-main {\n    position: absolute;\n    width: 100vw;\n    height: auto;\n    padding-top: 10px;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    z-index: 3;\n    /* background-color: rgba(219, 153, 36, .3); */\n}\n\n.header-links {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    gap: 5px;\n\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n.head-link-item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n   \n    padding: 8px 8px;\n    margin: 0;\n    height: min-content;\n    /* border: 1px solid black; */\n    /* links should be dark blue, with a yellow hover. font should be mild bold. */\n};\n\n.head-logo {\n    text-decoration: none;\n    color: inherit;\n}\n\n.head-link-item > a,\n#nav-srvc-menu a {\n    box-sizing: border-box;\n    text-decoration: none;\n }\n\n.head-link-item > .unselected,\n.head-link-item.unselected {\n    color: rgba(1, 36, 86, 1);\n    font-size: 21px;\n    font-weight: 500;\n}\n\n.head-link-item > .unselected:hover,\n.head-link-item > .unselected:active {\n    color: rgba(219, 153, 36, 1);\n}\n\n.head-logo {\n    background-image: url('../images/rwags-logo.png');\n    background-size: contain; /* or contain? */\n    background-repeat: no-repeat;\n    position: relative;\n    width: 180px;\n    height: 120px;\n}\n\n.head-logo a {\n    position: absolute;  /* Positioning the link within the container */\n    top: 0;\n    left: 0;\n    width: 100%; /* Ensures the link covers the full container */\n    height: 100%;\n    z-index: 10;\n}\n\n\n/* HEADER: SELECTED PAGE LINK */\n.selected-link {\n    color: rgba(219, 153, 36, 1);\n    font-size: 23px;\n    font-weight: 500;\n    /* border-bottom: 3px solid rgba(14, 165, 233, .4); */\n}\n\n\n/* DROPDOWN MENU */\n#dropdown-menu {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    box-sizing: border-box;\n    width: 200px;\n    height: auto;\n    /* background: rgba(14, 165, 233, .8); */\n    background: rgba(1, 36, 86, .9);\n    /* border: 1px solid rgba(219, 153, 36, 1); */\n    /* rgba(2, 132, 199, */\n    padding: 5px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    /* transition: opacity 0.4s ease, transform 0.4s ease; /* Transition effects */\n    /* transform: translateY(-10px); Initial transform state */\n    /* pointer-events: none; */\n    z-index: 2;\n}\n\n#dropdown-menu > a {\n    box-sizing: border-box;\n    text-decoration: none;\n    padding: 7px;\n    color: white;\n    z-index: 10;\n}\n\n#dropdown-menu > a:hover {\n    box-sizing: border-box;\n    text-decoration: none;\n    color: rgba(219, 153, 36, 1);\n}\n\n#dropdown-menu span {\n    box-sizing: border-box;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-size: 18px;\n}\n\n/* MOBILE MENU */\n.mobile-header {\n    display: none;\n    flex-direction: row;\n}\n\n.mobile-btn-wrap {\n    position: fixed;\n    top: 15px;\n    left: 15px;\n\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    z-index: 20;\n}\n\n#mobile-nav-btn {\n    display: inline-flex;\n    align-items: center;  \n    justify-content: center;\n    padding: 0; \n    width: 35px; \n    height: 35px; \n    border: 1px solid black;\n    border-radius: 5px;\n    background: rgba(14, 165, 233, .9);\n    fill: rgba(234, 179, 8, 1);\n    cursor: pointer;\n}\n\n\n/* nav overlay dialog menu */\n#mobile-dialog {\n    display: none;\n    position: fixed; /* Position fixed to cover the whole screen  */\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(1, 36, 86, 0.4);\n    backdrop-filter: blur(7px);\n    z-index: 1000;\n    border: none;\n    outline: none;\n}\n\n#mobile-dialog > nav {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    /* border: 1px solid red; */\n    position: relative;\n}\n\n.nav-cls-btn-wrp {\n    position: absolute;\n    box-sizing: border-box;\n    top: 10px;\n    right: 10px;\n    display: flex;\n    justify-content: end;\n    /* border: 1px solid pink; */\n    /* padding: 3px; */\n    width: 100%;\n}\n\n.dialog-lnks-wrap {\n    /* border: 1px solid black; */\n    min-height: 300px;\n}\n\n.dialog-lnks-wrap > ul {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n.nav-close-btn {\n    display: inline-flex; /* Use flex to center SVG */\n    align-items: center;   /* Center vertically */\n    justify-content: center; /* Center horizontally */\n    padding: 0; /* Remove default padding */\n    width: 35px; /* Set desired width */\n    height: 35px; /* Set desired height */\n    border: 1px solid white;\n    border-radius: 5px;\n    fill: white;\n    background: rgba(1, 1, 1, .4);\n    cursor: pointer; /* Change cursor to pointer */\n}\n\n.dialog-lnks-wrap .head-link-item > .unselected,\n.dialog-lnks-wrap .head-link-item.unselected {\n    /* color: rgba(1, 36, 86, 1); */\n    color: white;\n    font-size: 28px;\n    cursor: pointer;\n}\n\n.dialog-lnks-wrap .head-link-item > .unselected:hover,\n.dialog-lnks-wrap .head-link-item > .unselected:active,\n#nav-srvc-menu .unselected:active {\n    color: rgba(219, 153, 36, 1);\n    font-size: 28px;\n}\n\n.dialog-lnks-wrap .head-link-item > .selected-link {\n    color: rgba(219, 153, 36, 1);\n    font-size: 28px;\n    background: inherit;\n}\n\n#nav-srvc-menu {\n    display: none;\n    width: 70%;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    /* border: 1px solid black; */\n}\n\n#nav-srvc-menu a {\n    color: rgba(219, 153, 36, 1);\n    /* background: rgba(1, 36, 86, .3); */\n    background: rgba(14, 165, 233, .4);\n    border-radius: 5px;\n    padding: 4px 10px;\n}\n\n\n/* CONTACT INFO AREA */\n\n.contact-info-wrap {\n    display: flex;\n}\n\nsection > .contact-info-wrap {\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n\n    /* border: 1px solid green; */\n    /* min-height: 400px; */\n    /* padding: 15px; */\n    padding-bottom: 10px;\n    \n}\n\n.info-subwrap {\n    /* display: flex;\n    flex-direction: column; */\n\n    padding-bottom: 30px;\n    padding-right: 20px;\n    padding-left: 25px;\n    /* border: 1px solid red; */\n}\n\n.cont-into-title {\n    text-align: center;\n    font-size: 26px;\n    letter-spacing: .1rem;\n    /* height: 50px; */\n    color: rgba(1, 36, 86, 1);\n    /* border: 1px solid green; */\n}\n\n/* upper divider */\n.divider-wrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    box-sizing: border-box;\n    height: 35px;\n    min-width: 100%;\n    /* border: 1px solid black; */\n}\n\n.divider-spn {\n    width: 75%;\n    height: 2.5px;\n    background: #0369a1;\n}\n\n.contact-subwrap {\n    display: flex;\n    justify-content: center;\n    min-width: 85%;\n    max-width: 700px;\n    /* border-radius: 5px; */\n    /* border: 1px solid black; */\n    /* background: #0369a1; */\n    background: rgba(14, 165, 233, .5);\n    border-left: 4px solid rgba(14, 165, 233, .9);\n    padding: 15px;\n\n}\n\n.adr-link-wrap > a {\n    color: inherit;\n    text-decoration: underline solid white;\n}\n\n.cont-into-box {\n    padding: 10px;\n}\n\n.cont-into-box > h3 {\n    margin: 0;\n    padding-bottom: 12px;\n    /* color: rgba(219, 153, 36, 1); */\n    /* color: white; */\n    /* color: rgba(14, 165, 233, 1); */\n    color: rgba(219, 153, 36, 1);\n\n    font-size: 21px;\n    width: max-content;\n    -webkit-font-smoothing: antialiased;\n}\n\n.email-num-cont {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.cont-into-box p {\n    padding: 0;\n    margin: 0;\n    /* color: #0369a1; */\n    /* color: rgba(219, 153, 36, 1); */\n    color: rgba(16, 28, 86, 1);\n    font-size: 1rem;\n    font-weight: 500;\n}\n\n.email-num-cont > p {\n    /* border: 1px solid black; */\n    border-radius: 5px;\n    padding: 6px 3px;\n    width: max-content;\n}\n\n.email-num-cont > p:hover,\n.email-num-cont > p:active {\n    border-radius: 5px;\n    /* background: #0369a1;\n    color: rgba(219, 153, 36, 1); */\n    background: rgba(219, 153, 36, 1);\n    color:rgba(16, 28, 86, 1);\n    /* padding: 6px 4px; */\n}\n\n.email-num-cont a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n    height: 100%;\n    width: 100%;\n    /* border: 1px solid black;\n    border-radius: 5px; */\n    /* padding: 5px 5px; */\n}\n\n/* divider */\n.divider-wrap-lower {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    box-sizing: border-box;\n    width: 5%;\n    /* border: 1px solid black; */\n}\n\n.divider-spn-lower {\n    width: 2.5px;\n    height: 60%;\n    /* background: rgba(1, 36, 86, 0.94); */\n    background: white;\n}\n\n\n/* MAP SECTION */\n.map-wrap {\n    display: flex;\n    justify-content: center;\n    /* padding-left: 10px;\n    padding-right: 10px; */\n    padding-top: 10px;\n    padding-bottom: 5px;\n}\n\n#goog-map {\n    width: 88%;\n    min-height: 320px;\n    border: none;\n    border-left: 4px solid rgba(14, 165, 233, .9)\n}\n\n\n/* Form */\n.form-wrap {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid black; */\n    padding-bottom: 50px;\n    padding-top: 30px;\n    gap: 5px;\n}\n\n.form-section-intro {\n    color: #0369a1;\n    text-align: center;\n    box-sizing: border-box;\n    width: 88%;\n}\n\n.form-section-title {\n    box-sizing: border-box;\n    width: 88%;\n    margin: 0;\n    /* padding: 8px;\n    padding-top: 20px; */\n    font-size: 1.3rem;\n    text-align: center;\n    /* border: 1px solid green; */\n    \n}\n\n#contact-form {\n    width: 85%;\n    /* border: 1px solid black; */\n    border-left: 4px solid rgba(14, 165, 233, .9);\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    padding: 5px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n/* .sub-input-group {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid yellow;\n    gap: 2px;\n} */\n\n.form-input-field {\n    box-sizing: border-box;\n    border: 1px solid black;\n    padding: 7px;\n    /* background-color: #fff; */\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n}\n\n.form-input-field:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n\n.name-group {\n    display: flex;\n    flex-direction: row;\n    border: 1px solid green;\n    gap: 8px;\n}\n\n#form-submit {\n    all: unset;\n    text-align: center;\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 7px 30px;\n    color: rgba(232, 123, 11, 1);\n    background: rgba(33, 80, 173, 1);\n    width: 15%;\n}\n\n#form-submit:hover {\n    background: rgba(16, 28, 86, 1);\n    /* border: 1px solid rgba(232, 123, 11, 1); */\n}\n\ntextarea.form-input-field {\n    resize: vertical;\n    min-height: 100px;\n    max-width: 100%;\n}\n\n.form-label {\n    font-size: 1rem;\n}\n\n.form-req-span {\n    color: red;\n}\n\n\n/* FOOTER SECTION */\n\n.index-footer {\n    min-height: 400px;\n    display: flex;\n    justify-content: center;\n    /* background: rgba(2, 6, 23, .8); */\n    /* background: rgba(217, 119, 6, .7); */\n    background: rgba(14, 165, 233, .9);\n}\n \n.logo-foot-wrap {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding-right: 20px;\n    padding-left: 20px;\n    width: 100%;\n}\n\n.foot-contact-left {\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 10px;\n    max-width: 400px;\n}\n\n.foot-contact-left > span {\n    font-size: .6rem;\n}\n \n.footer-logo {\n    background-image: url('../images/rwags-logo.png');\n    background-size: cover; /* or cover? */\n    background-repeat: no-repeat;\n    background-color: rgba(234, 179, 8, .9);\n\n    display: block;\n    aspect-ratio: 1.53 / 1;\n    width: 90%;\n    max-width: 400px;\n    height: auto;\n    border: 1px solid rgba(234, 179, 8, .9);\n    border-radius: 5px;\n    object-fit: contain;\n}\n\n.logo-foot-wrap > div > h2 {\n    color: rgba(240, 233, 221, 1);\n}\n\n.foot-links {\n    display: flex;\n    gap: 12px;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n#phone-number {\n    font-size: 2.5rem;\n}\n\n#phone-number > a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n}\n\n#phone-number > a:hover {\n    color: rgba(219, 153, 36, .8);\n}\n\n.foot-link > a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n    /* color: rgba(1, 36, 86, 0.94); */\n    color: rgba(219, 153, 36, 1);\n    font-size: 1rem;\n}\n\n\n\n/* works for far */\n@media screen and (width < 741px) {\n\n#landing-wrap {\n    justify-content: end;\n}\n\n.about-top-sub-cont {\n    height: 65%;\n}\n\n/* map */\n#goog-map {\n    width: 91%;\n}\n\n/* form */\n.form-label {\n    font-size: .9rem;\n}\n\n/* footer */\n.logo-foot-wrap {\n    flex-direction: column;\n    padding-top: 20px;\n    padding-bottom: 30px;\n}\n\n.foot-contact-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 30px;\n}\n\n#phone-number {\n    margin: 0;\n    padding: 5px;\n}\n\n#phone-number > a:active {\n    color: rgba(219, 153, 36, 1);\n}\n\n.foot-links {\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.footer-logo {\n    display: block;\n    aspect-ratio: 1.53 / 1;\n    width: 90%;\n    max-width: 400px;\n    height: auto;\n    border: 1px solid rgba(234, 179, 8, .9);\n    border-radius: 5px;\n    object-fit: contain;\n}\n\n    /* non-mobile-header */\n    .top-main {\n        display: none;\n    }\n\n /* MOBILE NAV MENU */\n    .mobile-header {\n        position: absolute;\n        top: 0;\n        padding-top: 20px;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        width: 100%;\n        z-index: 4;\n    }\n\n    .head-logo {\n        width: 200px;\n        height: 130px;\n    }\n}\n\n\n@media screen and (width < 650px) {\n/* contact section */\n    .contact-subwrap {\n        flex-direction: column;\n        align-items: start;\n    }\n\n    /* dividers for contact */\n    .divider-wrap-lower {\n        justify-content: center;\n        width: 100%;\n        height: 20px;\n        /* border: 1px solid black; */\n    } \n\n    .divider-spn-lower {\n        width: 45%;\n        height: 2.5px;\n        /* background: rgba(1, 36, 86, 0.94); */\n    }\n\n    .email-num-cont > p {\n        padding: 6px 0px;\n    }\n}\n\n\n@media screen and (width < 401px) { \n    /* section > .about-cont-wrap {\n        padding-right: .5rem;\n        padding-left: .5rem;\n        border: 1px solid red;\n    } */\n\n    /* map */\n    #goog-map {\n        width: 95%;\n    }\n\n    /* form */\n    .form-label {\n        font-size: .8rem;\n    }\n\n    /* footer  */\n    .foot-link > a {\n        font-size: .8rem;\n    }\n\n    #phone-number {\n        font-size: 2.1rem;\n    }\n\n    .foot-links {\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        gap: 9px;\n    }\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/contact.css":
/*!********************************!*\
  !*** ./src/styles/contact.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"contact": 0
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
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/contact.css */ "./src/styles/contact.css");
// contact.js //



console.log("from contact.js");

const elem = (prop, par) => (par || document).querySelector(prop);
// const elems = (prop, par) => (par || document).querySelectorAll(prop);

document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('#contact');
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

});




// const initMap = function() {

// }

// need google api key from google cloud to do map range overlay //
/******/ })()
;
//# sourceMappingURL=contact.bundle.js.map