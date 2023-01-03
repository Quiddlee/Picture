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
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', '.main-prev-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"])('.main-slider-item', 'vertical');
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_createOrDeleteStatusMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/createOrDeleteStatusMessage */ "./src/js/services/createOrDeleteStatusMessage.js");
/* harmony import */ var _services_checkCyrillicInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/checkCyrillicInput */ "./src/js/services/checkCyrillicInput.js");
/* harmony import */ var _services_cervices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cervices */ "./src/js/services/cervices.js");



const forms = () => {
  const allForms = document.querySelectorAll('form');

  // checkNumInputs('input[name="user_phone"]')
  Object(_services_checkCyrillicInput__WEBPACK_IMPORTED_MODULE_1__["default"])('textarea[name="message"]', /[a-z]/gi);
  Object(_services_checkCyrillicInput__WEBPACK_IMPORTED_MODULE_1__["default"])('input[name="name"]', /[a-z]/gi);
  Object(_services_checkCyrillicInput__WEBPACK_IMPORTED_MODULE_1__["default"])('input[name="phone"]', /\D/g);
  const messages = {
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    loading: 'Загрузка...',
    ok: 'assets/img/ok.gif',
    notOk: 'assets/img/fail.png',
    spinner: 'assets/img/spinner.gif'
  };
  function bindPostData(form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const load = document.createElement('img');
      load.style.scale = '0.2';
      load.src = messages.spinner;
      form.parentNode.append(load);

      // const statusMessage = createOrDeleteStatusMessage({
      //     statusImage: messages.spinner,
      //     appendElement: form,
      //     delay: 3000,
      //     scale: 0.5
      // });
      const formData = new FormData(form);
      Object(_services_cervices__WEBPACK_IMPORTED_MODULE_2__["postData"])('assets/server.php', formData).then(data => {
        console.log(data);
        Object(_services_createOrDeleteStatusMessage__WEBPACK_IMPORTED_MODULE_0__["default"])({
          message: messages.success,
          statusImage: messages.ok,
          appendElement: form,
          oldElement: load,
          animate: true,
          delay: 1700,
          scale: 1
        });
      }).catch(() => {
        Object(_services_createOrDeleteStatusMessage__WEBPACK_IMPORTED_MODULE_0__["default"])({
          statusImage: messages.notOk,
          message: messages.failure,
          appendElement: form,
          oldElement: load,
          animate: true,
          delay: 2000,
          scale: 1
        });
      }).finally(() => {
        allForms.forEach(form => form.reset());
      });
    });
  }
  allForms.forEach(form => {
    bindPostData(form);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

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

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slidesSelector, direction, prev, next) => {
  const slides = document.querySelectorAll(slidesSelector);
  let paused = null;
  let slideIndex = 1;
  const showSlides = whichSlide => {
    if (whichSlide > slides.length) slideIndex = 1;
    if (whichSlide < 1) slideIndex = slides.length;
    slides.forEach(slide => {
      slide.classList.add('animated');
      slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
  };
  showSlides(slideIndex);
  const plusSlides = howManySlides => {
    showSlides(slideIndex += howManySlides);
  };
  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      slides[slideIndex - 1].classList.remove('slideInLeft');
      slides[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      slides[slideIndex - 1].classList.remove('slideInRight');
      slides[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (error) {}
  const activateAnimation = () => {
    if (direction === 'vertical') {
      paused = setInterval(() => {
        plusSlides(1);
        slides[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        slides[slideIndex - 1].classList.remove('slideInRight');
        slides[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  };
  activateAnimation();
  slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/cervices.js":
/*!*************************************!*\
  !*** ./src/js/services/cervices.js ***!
  \*************************************/
/*! exports provided: postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  });
  const errorMessage = `Could not fetch ${url}, status: ${res.status}`;
  if (!res.ok) throw new Error(errorMessage);
  return await res.text();
};


/***/ }),

/***/ "./src/js/services/checkCyrillicInput.js":
/*!***********************************************!*\
  !*** ./src/js/services/checkCyrillicInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkCyrillicInput = (selector, replace) => {
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(e => {
    e.addEventListener('input', () => {
      e.value = e.value.replace(replace, '');
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkCyrillicInput);

/***/ }),

/***/ "./src/js/services/createOrDeleteStatusMessage.js":
/*!********************************************************!*\
  !*** ./src/js/services/createOrDeleteStatusMessage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createOrDeleteStatusMessage = _ref => {
  let {
    statusImage,
    appendElement,
    delay,
    scale,
    message,
    oldElement,
    animate
  } = _ref;
  try {
    oldElement.remove();
    oldElement.statusMessage.remove();
    oldElement.textMessage.remove();
  } catch (e) {}
  appendElement.classList.add('animated', 'fadeOutUp');
  setTimeout(() => {
    appendElement.style.display = 'none';
    statusMessage.classList.add('animated', 'fadeInUp');
    appendElement.parentNode.append(statusMessage);
    textMessage.classList.add('animated', 'fadeIn');
    appendElement.parentNode.append(textMessage);
  }, 200);
  const statusMessage = document.createElement('img');
  const textMessage = document.createElement('div');
  statusMessage.src = statusImage;
  statusMessage.style.cssText = `
        margin: 0 auto
        display: none;
        transform: scale(${scale});
        border-radius: 4px;
        height: 100%;
        width: 100%;
        z-index: 3;
    `;
  if (message) {
    textMessage.innerHTML = message;
    textMessage.style.cssText = `
            transform: translateX(50%);
            background-color: white;
            border-radius: 4px;
            font-size: 23px;
            position: fixed;
            z-index: 5;
            right: 50%;
            top: 98%;
            width: 100%
        `;
  }
  setTimeout(() => {
    appendElement.classList.add('fadeIn');
    appendElement.classList.remove('fadeOutUp');
    statusMessage.classList.remove('fadeInUp');
    statusMessage.classList.add('fadeOut');
    textMessage.classList.add('fadeOut');
    setTimeout(() => {
      appendElement.style.display = 'block';
      statusMessage.remove();
      textMessage.remove();
    }, 750);
  }, delay);
  statusMessage.classList.remove('fadeOut');
  appendElement.classList.remove('fadeIn');
  return {
    statusMessage,
    textMessage
  };
};
/* harmony default export */ __webpack_exports__["default"] = (createOrDeleteStatusMessage);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map