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
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");





window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', '.main-prev-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-styles', '#styles .row');
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="phone"]');
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
/* harmony import */ var _services_showStatusMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/showStatusMessage */ "./src/js/services/showStatusMessage.js");
/* harmony import */ var _services_validateInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/validateInputs */ "./src/js/services/validateInputs.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");



const forms = () => {
  const upload = document.querySelectorAll('[name="upload"]');
  const allForms = document.querySelectorAll('form');
  Object(_services_validateInputs__WEBPACK_IMPORTED_MODULE_1__["default"])('textarea[name="message"]');
  Object(_services_validateInputs__WEBPACK_IMPORTED_MODULE_1__["default"])('input[name="message"]');
  Object(_services_validateInputs__WEBPACK_IMPORTED_MODULE_1__["default"])('input[name="name"]');
  const messages = {
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    loading: 'Загрузка...',
    ok: 'assets/img/ok.gif',
    notOk: 'assets/img/fail.png',
    spinner: 'assets/img/spinner.gif'
  };
  const paths = {
    designer: 'assets/server.php',
    question: 'assets/questions.php'
  };
  function bindPostData(form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const load = document.createElement('img');
      load.style.scale = '0.2';
      load.src = messages.spinner;
      form.parentNode.append(load);
      const formData = new FormData(form);
      let api;
      form.closest('.popup-design') || form.classList.contains('calc_form') ? api = paths.designer : api = paths.question;
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_2__["postData"])(api, formData).then(data => {
        console.log(data);
        Object(_services_showStatusMessage__WEBPACK_IMPORTED_MODULE_0__["default"])({
          message: messages.success,
          statusImage: messages.ok,
          appendElement: form,
          oldElement: load,
          delay: 1700
        });
      }).catch(() => {
        Object(_services_showStatusMessage__WEBPACK_IMPORTED_MODULE_0__["default"])({
          statusImage: messages.notOk,
          message: messages.failure,
          appendElement: form,
          oldElement: load,
          delay: 2000
        });
      }).finally(() => {
        allForms.forEach(form => form.reset());
        upload.forEach(elem => elem.previousElementSibling.textContent = 'Файл не выбран');
      });
    });
  }
  upload.forEach(elem => {
    elem.addEventListener('input', () => {
      let dots;
      const filesArr = elem.files[0].name.split('.');
      filesArr[0].length > 6 ? dots = '...' : dots = '.';
      elem.previousElementSibling.textContent = `${filesArr[0].substring(0, 6)}${dots}${filesArr[1]}`;
    });
  });
  allForms.forEach(form => {
    bindPostData(form);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  const setCursorPosition = (position, element) => {
    element.focus();
    if (element.setSelectionRange) {
      element.setSelectionRange(position, position);
    }
    if (element.createTextRange) {
      const range = element.createTextRange();
      range.collapse(true);
      range.moveEnd('character', position);
      range.moveStart('character', position);
      range.select();
    }
  };
  function createMask(event) {
    const matrix = '+38 (___) ___ __ __';
    const deffault = matrix.replace(/\D/g, '');
    let value = this.value.replace(/\D/g, '');
    let i = 0;
    if (deffault.length >= value.length || +value[0] !== 3 || +value[1] !== 8) value = deffault;
    this.value = matrix.replace(/./g, function (number) {
      return /[_\d]/.test(number) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : number;
    });
    if (event.type === 'blur') {
      if (this.value.length === 2) this.value = '';
    }
    if (event.type === 'focus') {
      setCursorPosition(this.value.length, this);
    }
  }
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

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

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMoreStyles = (triggerSelector, wrapperSelector) => {
  const loadButton = document.querySelector(triggerSelector);

  //                                                       w/o database

  // cards.forEach(card => {
  //     card.classList.add('animated', 'fadeIn');
  // });
  //
  //
  // loadButton.addEventListener('click', () => {
  //     loadButton.remove();
  //     cards.forEach(card => {
  //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
  //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //     });
  // });

  //                                                       w/ database

  loadButton.addEventListener('click', function () {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/styles').then(data => createCards(data)).catch(error => console.log(error));
    this.remove();
  });
  const createCards = response => {
    response.forEach((_ref, i) => {
      let {
        src,
        title,
        link
      } = _ref;
      const card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
      document.querySelector(wrapperSelector).appendChild(card);
      card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="style ${i}">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

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

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.text();
};
const getResource = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ }),

/***/ "./src/js/services/showStatusMessage.js":
/*!**********************************************!*\
  !*** ./src/js/services/showStatusMessage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showStatusMessage = _ref => {
  let {
    statusImage,
    appendElement,
    delay,
    message,
    oldElement
  } = _ref;
  try {
    oldElement.remove();
  } catch (e) {}
  const caption = document.querySelector('.popup-consultation h4');
  try {
    caption.classList.add('animated', 'fadeOutUp');
    setTimeout(() => caption.style.display = 'none', 200);
  } catch (e) {}
  appendElement.classList.add('animated', 'fadeOutUp');
  setTimeout(() => {
    appendElement.style.display = 'none';
    statusMessage.classList.add('animated', 'fadeInUp');
    textMessage.classList.add('animated', 'fadeIn');
    appendElement.parentNode.append(statusMessage);
    appendElement.parentNode.append(textMessage);
    statusMessage.append(imageMessage);
  }, 200);
  const statusMessage = document.createElement('div');
  const imageMessage = document.createElement('img');
  const textMessage = document.createElement('div');
  statusMessage.classList.add('status');
  imageMessage.src = statusImage;
  imageMessage.style.cssText = `
        border-radius: 4px;
        margin: 0 auto 
        display: none;
        max-height: 20rem;
        max-width: 20rem;
        z-index: 3;
    `;
  try {
    textMessage.innerHTML = message;
    textMessage.style.cssText = `
            transform: translateX(50%);
            background-color: white;
            border-radius: 4px;
            font-size: 23px;
            position: fixed;
            width: 100%;
            right: 50%;
            z-index: 5;
            top: 98%;
        `;
  } catch (e) {}
  setTimeout(() => {
    appendElement.classList.remove('fadeOutUp');
    statusMessage.classList.remove('fadeInUp');
    statusMessage.classList.add('fadeOut');
    appendElement.classList.add('fadeIn');
    textMessage.classList.add('fadeOut');
    try {
      caption.classList.remove('fadeOutUp');
      caption.classList.add('fadeIn');
    } catch (e) {}
    setTimeout(() => {
      try {
        caption.style.display = '';
      } catch (e) {}
      appendElement.style.display = 'block';
      statusMessage.remove();
      textMessage.remove();
    }, 430);
  }, delay);
};
/* harmony default export */ __webpack_exports__["default"] = (showStatusMessage);

/***/ }),

/***/ "./src/js/services/validateInputs.js":
/*!*******************************************!*\
  !*** ./src/js/services/validateInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const validateInputs = selector => {
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(e => {
    e.addEventListener('input', () => {
      e.value = e.value.replace(/[a-z]/gi, '');
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (validateInputs);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map