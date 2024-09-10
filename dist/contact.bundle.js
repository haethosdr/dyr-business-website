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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/contact-img3.png */ "./src/images/contact-img3.png"), __webpack_require__.b);
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
    /* background: rgba(240, 233, 221, 1); */
    /* background: #99f6e4; */
    /* background: #dbeafe;
    background: #e0f2fe; */
    /* background: rgba(207, 250, 254, .3); */
    background: #ffe4e6;
    /* background: #f0f9ff; 4 */
    /* background: #a5f3fc; 5  not for contact page */
}

/* MAIN/WRAP */
#about-main-body {
    display: flex;
    flex-direction: column;
}

/* ABOUT TOP LANDING */
#landing-wrap {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover; /* or contain? */
    background-repeat: no-repeat;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100%;
}

.about-top-sub-cont {
    max-width: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;
}


.about-top-sub-cont > h1 {
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 60px;
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
    color: rgba(219, 153, 36, 1);
    font-family: Arial, Helvetica, sans-serif;
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

.head-link-item > a {
    box-sizing: border-box;
    text-decoration: none;
 }

.head-link-item > .unselected {
    color: rgba(1, 36, 86, 1);
    font-size: 20px;
}

.head-link-item > .unselected:hover {
    color: rgba(219, 153, 36, 1);
}

.head-logo {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain; /* or contain? */
    background-repeat: no-repeat;
    position: relative;

    width: 150px;
    height: 100px;
}

.head-logo a {
    position: absolute;  /* Positioning the link within the container */
    top: 0;
    left: 0;
    width: 100%; /* Ensures the link covers the full container */
    height: 100%;
    z-index: 10;
}

/* #services {
    border: 1px solid black;
} */

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

/* HEADER: SELECTED PAGE LINK */

.selected-link {
    color: rgba(219, 153, 36, 1);
    font-size: 23px;
    /* background: rgba(1, 36, 86, .3); */
    background: rgba(14, 165, 233, .4);
    border-radius: 3px;
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

    /* border: 1px solid black; */
    height: 400px;
    padding-top: 15px;
}

.info-subwrap {
    /* border: 1px solid black; */
    padding-top: 10px;
    padding-bottom: 30px;
    padding-right: 20px;
    padding-left: 25px;
}

.cont-into-title {
    font-size: 25px;
    height: 50px;
    color: rgba(1, 36, 86, 1);
}

/* upper divider */
.divider-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    height: 35px;
    min-width: 100%;
}

.divider-spn {
    width: 75%;
    height: 2.5px;
    background: #0369a1;
}
/* ---------- */

.contact-subwrap {
    display: flex;
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px; */
    /* border: 1px solid black; */
}

.cont-into-box {
    /* border: 1px solid green; */
    padding: 15px;
}

.cont-into-box > h3 {
    color: rgba(219, 153, 36, 1);
    font-size: 23px;
    /* color: rgba(1, 36, 86, .9); */
}

.email-num-cont {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    gap: 2px;

}

.cont-into-box p {
    padding: 0;
    margin: 0;
    /* color: rgba(1, 36, 86, 1); */
    color: #0369a1;
    font-size: 16px;
    font-weight: 500;
}

.email-num-cont > p {
    /* border: 1px solid black; */
    border-radius: 5px;
    padding: 6px 8px;
}

.email-num-cont > p:hover {
    border-radius: 5px;
    background: #0369a1;
    color: rgba(219, 153, 36, 1);
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
    min-width: 45px;
    /* border: 1px solid black; */
}

.divider-spn-lower {
    width: 2.5px;
    height: 60%;
    /* background: #0f172a; */
    background: rgba(1, 36, 86, 0.94);
    /* padding: 2px 5px; */
}


/* MAP SECTION */
.map-wrap {
    display: flex;
    justify-content: center;
}
/* #goog-map {

} */

.form-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    padding-bottom: 50px;
}

.form-section-title {
    font-size: 22px;
    /* border: 1px solid black; */
    text-align: center;
    padding: 13px;
}

#contact-form {
    width: 85%;
    border: 1px solid red;
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
    border: 1px solid black;
    padding: 7px;
}

.name-group {
    display: flex;
    flex-direction: row;
    border: 1px solid green;
    gap: 8px;
}

#form-submit {
    all: unset;
    border: 1px solid black;
    padding: 8px 35px;
}

#form-submit:hover {
    background: #0369a1;
    color: rgba(219, 153, 36, 1);
}

textarea.form-input-field {
    resize: vertical;
    min-height: 100px;
    max-width: 100%;
}


/* FOOTER SECTION */
.index-footer {
    height: 400px;
    display: flex;
    justify-content: end;
    /* background: rgba(2, 6, 23, .8); */
    /* background: rgba(217, 119, 6, .7); */
    background: rgba(14, 165, 233, .9);
}
 
.logo-foot-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 18px;
    padding-left: 22px;
    width: 100%;
}

.foot-contact-left {
    width: 400px;
}

.foot-contact-left > span {
    font-size: 10px;
}
 
.footer-logo {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover; /* or cover? */
    background-repeat: no-repeat;
    background-color: yellow;
    box-sizing: border-box;
    width: 460px;
    height: 300px;
    border: 1px solid black;
    /* border-radius: 125px; */
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
    font-size: 40px;
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
    font-size: 15px;
}
 
`, "",{"version":3,"sources":["webpack://./src/styles/contact.css"],"names":[],"mappings":"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","sourcesContent":["/* contact.css */\n\n:root {\n    --ffff-ffff: rgb(1, 1, 1);\n}\n\n* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    /* background: rgba(240, 233, 221, 1); */\n    /* background: #99f6e4; */\n    /* background: #dbeafe;\n    background: #e0f2fe; */\n    /* background: rgba(207, 250, 254, .3); */\n    background: #ffe4e6;\n    /* background: #f0f9ff; 4 */\n    /* background: #a5f3fc; 5  not for contact page */\n}\n\n/* MAIN/WRAP */\n#about-main-body {\n    display: flex;\n    flex-direction: column;\n}\n\n/* ABOUT TOP LANDING */\n#landing-wrap {\n    background-image: url('../images/contact-img3.png');\n    background-size: cover; /* or contain? */\n    background-repeat: no-repeat;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    height: 100vh;\n    width: 100%;\n}\n\n.about-top-sub-cont {\n    max-width: 400px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.about-top-sub-cont > h1 {\n    color: white;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 60px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin: 0;\n    /* border: 1px solid red; */\n}\n\n.about-top-sub-cont > h3 {\n    /* color: rgba(219, 153, 36, 1); */\n    /* color: rgba(234, 179, 8, .9); */\n    /* color: rgba(207, 93, 23, .9); */\n    /* color: rgba(1, 36, 86, 1); */\n    color: rgba(219, 153, 36, 1);\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n/* HEADER */\n.top-main {\n    position: absolute;\n    width: 100vw;\n    height: auto;\n    padding-top: 10px;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    /* background-color: rgba(219, 153, 36, .3); */\n}\n\n.header-links {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    gap: 5px;\n\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n.head-link-item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n   \n    padding: 8px 8px;\n    margin: 0;\n    height: min-content;\n    /* border: 1px solid black; */\n    /* links should be dark blue, with a yellow hover. font should be mild bold. */\n};\n\n.head-logo {\n    text-decoration: none;\n    color: inherit;\n}\n\n.head-link-item > a {\n    box-sizing: border-box;\n    text-decoration: none;\n }\n\n.head-link-item > .unselected {\n    color: rgba(1, 36, 86, 1);\n    font-size: 20px;\n}\n\n.head-link-item > .unselected:hover {\n    color: rgba(219, 153, 36, 1);\n}\n\n.head-logo {\n    background-image: url('../images/rwags-logo.png');\n    background-size: contain; /* or contain? */\n    background-repeat: no-repeat;\n    position: relative;\n\n    width: 150px;\n    height: 100px;\n}\n\n.head-logo a {\n    position: absolute;  /* Positioning the link within the container */\n    top: 0;\n    left: 0;\n    width: 100%; /* Ensures the link covers the full container */\n    height: 100%;\n    z-index: 10;\n}\n\n/* #services {\n    border: 1px solid black;\n} */\n\n/* DROPDOWN MENU */\n#dropdown-menu {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    box-sizing: border-box;\n    width: 200px;\n    height: auto;\n    /* background: rgba(14, 165, 233, .8); */\n    background: rgba(1, 36, 86, .9);\n    /* border: 1px solid rgba(219, 153, 36, 1); */\n    /* rgba(2, 132, 199, */\n    padding: 5px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    /* transition: opacity 0.4s ease, transform 0.4s ease; /* Transition effects */\n    /* transform: translateY(-10px); Initial transform state */\n    /* pointer-events: none; */\n    z-index: 2;\n}\n\n#dropdown-menu > a {\n    box-sizing: border-box;\n    text-decoration: none;\n    padding: 7px;\n    color: white;\n    z-index: 10;\n}\n\n#dropdown-menu > a:hover {\n    box-sizing: border-box;\n    text-decoration: none;\n    color: rgba(219, 153, 36, 1);\n}\n\n#dropdown-menu span {\n    box-sizing: border-box;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-size: 18px;\n}\n\n/* HEADER: SELECTED PAGE LINK */\n\n.selected-link {\n    color: rgba(219, 153, 36, 1);\n    font-size: 23px;\n    /* background: rgba(1, 36, 86, .3); */\n    background: rgba(14, 165, 233, .4);\n    border-radius: 3px;\n}\n\n/* CONTACT INFO AREA */\n\n.contact-info-wrap {\n    display: flex;\n}\n\nsection > .contact-info-wrap {\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n\n    /* border: 1px solid black; */\n    height: 400px;\n    padding-top: 15px;\n}\n\n.info-subwrap {\n    /* border: 1px solid black; */\n    padding-top: 10px;\n    padding-bottom: 30px;\n    padding-right: 20px;\n    padding-left: 25px;\n}\n\n.cont-into-title {\n    font-size: 25px;\n    height: 50px;\n    color: rgba(1, 36, 86, 1);\n}\n\n/* upper divider */\n.divider-wrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    box-sizing: border-box;\n    height: 35px;\n    min-width: 100%;\n}\n\n.divider-spn {\n    width: 75%;\n    height: 2.5px;\n    background: #0369a1;\n}\n/* ---------- */\n\n.contact-subwrap {\n    display: flex;\n    /* grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 150px; */\n    /* border: 1px solid black; */\n}\n\n.cont-into-box {\n    /* border: 1px solid green; */\n    padding: 15px;\n}\n\n.cont-into-box > h3 {\n    color: rgba(219, 153, 36, 1);\n    font-size: 23px;\n    /* color: rgba(1, 36, 86, .9); */\n}\n\n.email-num-cont {\n    /* border: 1px solid black; */\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n\n}\n\n.cont-into-box p {\n    padding: 0;\n    margin: 0;\n    /* color: rgba(1, 36, 86, 1); */\n    color: #0369a1;\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.email-num-cont > p {\n    /* border: 1px solid black; */\n    border-radius: 5px;\n    padding: 6px 8px;\n}\n\n.email-num-cont > p:hover {\n    border-radius: 5px;\n    background: #0369a1;\n    color: rgba(219, 153, 36, 1);\n}\n\n.email-num-cont a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n    height: 100%;\n    width: 100%;\n    /* border: 1px solid black;\n    border-radius: 5px; */\n    /* padding: 5px 5px; */\n}\n\n/* divider */\n.divider-wrap-lower {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    box-sizing: border-box;\n    min-width: 45px;\n    /* border: 1px solid black; */\n}\n\n.divider-spn-lower {\n    width: 2.5px;\n    height: 60%;\n    /* background: #0f172a; */\n    background: rgba(1, 36, 86, 0.94);\n    /* padding: 2px 5px; */\n}\n\n\n/* MAP SECTION */\n.map-wrap {\n    display: flex;\n    justify-content: center;\n}\n/* #goog-map {\n\n} */\n\n.form-wrap {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid black; */\n    padding-bottom: 50px;\n}\n\n.form-section-title {\n    font-size: 22px;\n    /* border: 1px solid black; */\n    text-align: center;\n    padding: 13px;\n}\n\n#contact-form {\n    width: 85%;\n    border: 1px solid red;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n/* .sub-input-group {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid yellow;\n    gap: 2px;\n} */\n\n.form-input-field {\n    border: 1px solid black;\n    padding: 7px;\n}\n\n.name-group {\n    display: flex;\n    flex-direction: row;\n    border: 1px solid green;\n    gap: 8px;\n}\n\n#form-submit {\n    all: unset;\n    border: 1px solid black;\n    padding: 8px 35px;\n}\n\n#form-submit:hover {\n    background: #0369a1;\n    color: rgba(219, 153, 36, 1);\n}\n\ntextarea.form-input-field {\n    resize: vertical;\n    min-height: 100px;\n    max-width: 100%;\n}\n\n\n/* FOOTER SECTION */\n.index-footer {\n    height: 400px;\n    display: flex;\n    justify-content: end;\n    /* background: rgba(2, 6, 23, .8); */\n    /* background: rgba(217, 119, 6, .7); */\n    background: rgba(14, 165, 233, .9);\n}\n \n.logo-foot-wrap {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding-right: 18px;\n    padding-left: 22px;\n    width: 100%;\n}\n\n.foot-contact-left {\n    width: 400px;\n}\n\n.foot-contact-left > span {\n    font-size: 10px;\n}\n \n.footer-logo {\n    background-image: url('../images/rwags-logo.png');\n    background-size: cover; /* or cover? */\n    background-repeat: no-repeat;\n    background-color: yellow;\n    box-sizing: border-box;\n    width: 460px;\n    height: 300px;\n    border: 1px solid black;\n    /* border-radius: 125px; */\n}\n\n.logo-foot-wrap > div > h2 {\n    color: rgba(240, 233, 221, 1);\n}\n\n.foot-links {\n    display: flex;\n    gap: 12px;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n#phone-number {\n    font-size: 40px;\n}\n\n#phone-number > a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n}\n\n#phone-number > a:hover {\n    color: rgba(219, 153, 36, .8);\n}\n\n.foot-link > a {\n    text-decoration: none; /* Removes the underline */\n    color: inherit;\n    /* color: rgba(1, 36, 86, 0.94); */\n    color: rgba(219, 153, 36, 1);\n    font-size: 15px;\n}\n \n"],"sourceRoot":""}]);
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

/***/ "./src/images/contact-img3.png":
/*!*************************************!*\
  !*** ./src/images/contact-img3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd3928000f79dff97fda.png";

/***/ }),

/***/ "./src/images/rwags-logo.png":
/*!***********************************!*\
  !*** ./src/images/rwags-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2eaa5bfc03bb51787044.png";

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
});




// const initMap = function() {

// }

// need google api key from google cloud to do map range overlay //
/******/ })()
;
//# sourceMappingURL=contact.bundle.js.map