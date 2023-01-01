/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let isModalActive = false;
  function bindModal(modalSelector, triggerSelector, closeSelector) {
    let deleteTrigger = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // const modalTimerId = showModalByTime('popup-consultation', 6000);
    const trigger = document.querySelectorAll(triggerSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const gift = document.querySelector('.fixed-gift');
    const scroll = calculateScrollWidth();
    trigger.forEach(element => {
      element.addEventListener('click', event => {
        // if (modalTimerId) clearInterval(modalTimerId);
        if (gift) gift.style.right = `${scroll * 2}px`;
        if (event.target) event.preventDefault();
        if (deleteTrigger) element.remove();
        isModalActive = true;
        windows.forEach(window => {
          window.style.display = 'none';
          window.classList.add('animated', 'fadeIn');
        });
        document.body.style.marginRight = `${scroll}px`;
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
      });
    });
    close.addEventListener('click', () => {
      if (gift) gift.style.right = `2rem`;
      windows.forEach(window => window.style.display = 'none');
      // modal.classList.remove('form_faded');
      document.body.style.marginRight = '0px';
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        if (gift) gift.style.right = `2rem`;
        windows.forEach(window => window.style.display = 'none');
        // modal.classList.remove('form_faded');
        document.body.style.marginRight = '0px';
        document.body.style.overflow = '';
      }
    });
  }
  function calculateScrollWidth() {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflowY = 'scroll';
    div.style.height = '50px';
    div.style.width = '50px';
    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  // function showModalByTime(selector, delay) {
  //     return setTimeout(() => {
  //         const modal = document.querySelector('.popup-consultation');
  //         document.body.style.overflow = 'hidden';
  //         modal.style.display = 'block';
  //     }, delay);
  // }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 && !isModalActive) {
        window.removeEventListener('scroll', openByScroll);
        document.querySelector(selector).click(); // click() - ручной вызов события
      }
    });
  }

  bindModal('.popup-consultation', '.button-consultation', '.popup-consultation .popup-close');
  bindModal('.popup-gift', '.fixed-gift', '.popup-gift .popup-close', true);
  bindModal('.popup-design', '.button-design', '.popup-design .popup-close');
  openByScroll('.fixed-gift');
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map