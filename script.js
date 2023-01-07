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
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_dragAndDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dragAndDrop */ "./src/js/modules/dragAndDrop.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/collapse */ "./src/js/modules/collapse.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");












window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const state = {};
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_6__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', '.main-prev-btn');
  Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_3__["default"])('#size', '#material', '#options', '.promocode', '.calc-price', state);
  Object(_modules_collapse__WEBPACK_IMPORTED_MODULE_5__["default"])('.accordion-heading', '.accordion-block');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-styles', '.styles-2');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_6__["default"])('.main-slider-item', 'vertical');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_9__["default"])('.burger-menu', '.burger');
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_1__["default"])('.sizes-block');
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_11__["default"])('[name="phone"]');
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_4__["default"])('.pageup');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_10__["default"])(state);
  Object(_modules_dragAndDrop__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_8__["default"])();
});

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector) => {
  const menu = document.querySelector(menuSelector);
  const burger = document.querySelector(burgerSelector);
  menu.style.display = 'none';
  burger.addEventListener('click', () => {
    if (menu.style.display === 'none' && window.screen.availWidth <= 992) {
      menu.style.display = 'block';
    } else menu.style.display = 'none';
    window.addEventListener('resize', () => {
      if (window.screen.availWidth > 992) {
        menu.style.display = 'none';
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const calculator = (size, material, options, promocode, result, state) => {
  const promocodeBlock = document.querySelector(promocode);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const resultBlock = document.querySelector(result);
  const sizeBlock = document.querySelector(size);
  let sum = 0;

  //                                                  w/ database

  // const setPrice = async (element) => {
  //     let priceList;
  //     let promo;
  //     await getResource('http://localhost:3000/PriceList')
  //         .then(data => priceList = data);
  //
  //
  //     priceList.forEach(obj => {
  //         for (const key in obj) {
  //             try {
  //                 if (key === 'promocode') {
  //                     promo = obj[key];
  //                 }
  //
  //                 if (key === element.options[element.selectedIndex].innerText) {
  //                     element.options[element.selectedIndex].value = obj[key];
  //                 }
  //             } catch(e){}
  //         }
  //     });
  //
  //     return promo;
  // }
  //
  //
  // const calcFunction = async (element, property) => {
  //     const promo = await setPrice(element);
  //
  //     sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
  //
  //     if (sizeBlock.value === '' || materialBlock.value === '') {
  //         resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
  //     }
  //     else if (promocodeBlock.value === promo) {
  //         resultBlock.textContent = Math.round(sum * 0.7);
  //         state['promocode'] = 'true';
  //     }
  //     else {
  //         resultBlock.textContent = sum;
  //         state['promocode'] = 'false';
  //     }
  //
  //     try {
  //         if (element.options.selectedIndex === 0) {
  //             delete state[property];
  //         }
  //
  //         if (element.options.selectedIndex !== 0) {
  //             state[property] = element.options[element.selectedIndex].textContent;
  //         }
  //     }catch(e) {}
  //     state['price'] = resultBlock.textContent;
  //     console.log(state);
  // };

  //                                                  w/o database

  const calcFunction = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value === '' || materialBlock.value === '') {
      resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };
  promocodeBlock.addEventListener('input', () => calcFunction(promocodeBlock, 'promocode'));
  materialBlock.addEventListener('change', () => calcFunction(materialBlock, 'material'));
  optionsBlock.addEventListener('change', () => calcFunction(optionsBlock, 'options'));
  sizeBlock.addEventListener('change', () => calcFunction(sizeBlock, 'size'));
};
/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/collapse.js":
/*!************************************!*\
  !*** ./src/js/modules/collapse.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/animation */ "./src/js/services/animation.js");

const collapse = triggersSelector => {
  const buttons = document.querySelectorAll(triggersSelector);
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const sibling = this.nextElementSibling;
      this.classList.toggle('active-style');
      sibling.classList.toggle('active-content');
      if (this.classList.contains('active-style')) {
        sibling.style.maxHeight = `${sibling.scrollHeight + 80}px`;
        _services_animation__WEBPACK_IMPORTED_MODULE_0__["default"].collapseIn(sibling);
      } else {
        sibling.style.maxHeight = '0px';
        _services_animation__WEBPACK_IMPORTED_MODULE_0__["default"].collapseOut(sibling);
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (collapse);

/***/ }),

/***/ "./src/js/modules/dragAndDrop.js":
/*!***************************************!*\
  !*** ./src/js/modules/dragAndDrop.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const dragAndDrop = () => {
  // drag *
  // dragend *
  // dragenter - срабатывает, когда перетаскиваемый объект находится над dropArea
  // dragexit *
  // dragleave - срабатывает, когда объект перетащили за пределы dropArea
  // dragover - срабатывает каждые несколько миллисекунд, когда объект находится над dropArea
  // dragstart *
  // drop - срабатывает, когда наш объект отправлен в dropArea

  const fileInputs = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefault, false);
    });
  });
  function preventDefault(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  function highlight(element) {
    element.closest('.file_upload').style.border = '1px solid #c51abb';
    element.closest('.file_upload').style.borderRadius = '5%';
    element.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  }
  function unHighlight(element) {
    element.closest('.file_upload').style.border = 'none';
    if (element.closest('.calc_form')) {
      element.closest('.file_upload').style.backgroundColor = '#fff';
    } else if (element.closest('.main-form')) {
      element.closest('.file_upload').style.backgroundColor = '#ededed';
    } else {
      element.closest('.file_upload').style.backgroundColor = '#f7e7e6';
    }
  }
  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unHighlight(input), false);
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener('drop', event => {
      input.files = event.dataTransfer.files;
      if (input.closest('.hidden-xs')) {
        const file = input.files;
        const formData = new FormData();
        for (const key in file) {
          formData.append(key, file[key]);
        }
        Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])('assets/server.php', formData).then(data => {
          input.previousElementSibling.textContent = 'Файл успешно отправлен!';
          console.log(data);
        }).catch(data => {
          input.previousElementSibling.textContent = 'Произошла ошибка';
          console.log(data);
        }).finally(() => {
          setTimeout(() => {
            input.previousElementSibling.textContent = 'Файл не выбран';
          }, 5000);
        });
      }
      let dots;
      const filesArr = input.files[0].name.split('.');
      filesArr[0].length > 6 ? dots = '...' : dots = '.';
      input.previousElementSibling.textContent = `${filesArr[0].substring(0, 6)}${dots}${filesArr[1]}`;
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (dragAndDrop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const wrapper = document.querySelector('.portfolio-wrapper');
  const menu = document.querySelector('.portfolio-menu');
  const no = document.querySelector('.portfolio-no');
  const markAll = wrapper.querySelectorAll('.all');
  const items = menu.querySelectorAll('li');
  const typeFilter = markType => {
    no.classList.remove('animated', 'fadeIn');
    no.style.display = 'none';
    markAll.forEach(item => {
      item.classList.remove('animated', 'fadeIn');
      item.style.display = 'none';
    });
    if (markType.length) {
      markType.forEach(type => {
        type.classList.add('animated', 'fadeIn');
        type.style.display = 'block';
      });
    } else {
      no.classList.add('animated', 'fadeIn');
      no.style.display = 'block';
    }
  };
  menu.addEventListener('click', event => {
    const target = event.target;
    if (target && target.tagName === 'LI') {
      typeFilter(wrapper.querySelectorAll(`.${target.className.replace('active', '')}`));
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

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



const forms = state => {
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
      if (form.getAttribute('data-calc') === 'end') {
        for (const key in state) {
          formData.append(key, state[key]);
          delete state[key];
        }
      }
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
          message: messages.success,
          statusImage: messages.ok,
          appendElement: form,
          oldElement: load,
          delay: 1700
        });
        // showStatusMessage({
        //     statusImage: messages.notOk,
        //     message: messages.failure,
        //     appendElement: form,
        //     oldElement: load,
        //     delay: 2000
        // });
      }).finally(() => {
        document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        upload.forEach(elem => elem.previousElementSibling.textContent = 'Файл не выбран');
        allForms.forEach(form => form.reset());
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
    const matrix = '+38 (0__) ___ __ __';
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
/* harmony import */ var _services_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/animation */ "./src/js/services/animation.js");

const modals = () => {
  let isModalActive = false;
  function bindModal(modalSelector, triggerSelector, closeSelector) {
    let deleteTrigger = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // const modalTimerId = showModalByTime('popup-consultation', 6000);
    const modalDialogs = document.querySelectorAll('.popup-content');
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
        modalDialogs.forEach(elem => {
          _services_animation__WEBPACK_IMPORTED_MODULE_0__["default"].modalIn(elem);
        });
        windows.forEach(window => {
          window.style.display = 'none';
        });
        document.body.style.marginRight = `${scroll}px`;
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
      });
    });
    close.addEventListener('click', () => {
      if (gift) gift.style.right = `2rem`;
      modalDialogs.forEach(elem => {
        _services_animation__WEBPACK_IMPORTED_MODULE_0__["default"].modalOut(elem);
      });
      setTimeout(() => {
        windows.forEach(window => window.style.display = 'none');
        document.body.style.marginRight = '0px';
        document.body.style.overflow = '';
      }, 300);
    });
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        if (gift) gift.style.right = `2rem`;
        modalDialogs.forEach(elem => {
          _services_animation__WEBPACK_IMPORTED_MODULE_0__["default"].modalOut(elem);
        });
        setTimeout(() => {
          windows.forEach(window => window.style.display = 'none');
          document.body.style.marginRight = '0px';
          document.body.style.overflow = '';
        }, 300);
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
  bindModal('.popup-design', '.button-design', '.popup-design .popup-close');
  bindModal('.popup-gift', '.fixed-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  const showImg = block => {
    const img = block.querySelector('img');
    img.src = `${img.src.slice(0, -4)}-1.png`;
    img.classList.add('animated', 'fadeIn');
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      // 'p:not(.sizes-hit)' - дословно, собрать
      p.style.display = 'none'; //  все параграфы, у которых нет класса .sized-hit
    });
  };

  const hideImg = block => {
    const img = block.querySelector('img');
    img.src = `${img.src.slice(0, -6)}.png`;
    img.classList.remove('animated', 'fadeIn');
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  };
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElement = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElement.classList.add('animated', 'fadeIn');
      upElement.classList.remove('fadeOut');
    } else {
      upElement.classList.remove('fadeIn');
      upElement.classList.add('fadeOut');
    }
  });

  //                                    requestAnimationFrame scrolling

  const links = document.querySelectorAll('[href^="#"]');
  let speed = 0.2;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const widthTop = document.documentElement.scrollTop;
      const hash = this.hash;
      const toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        const progress = time - start;
        let numberOfPixelsToScroll = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, numberOfPixelsToScroll);
        if (numberOfPixelsToScroll !== widthTop + toBlock) {
          requestAnimationFrame(step);
        } else location.hash = hash;
      }
    });
  });

  //                                          Native js scrolling

  // const element = document.documentElement;
  // const body = document.body;
  //
  // const calculateScroll = () => {
  //     upElement.addEventListener('click', function(event) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //
  //         if (this.hash !== '') {
  //             event.preventDefault();
  //             let hashElement = document.querySelector(this.hash);
  //             let hashElementTop = 0;
  //
  //             while (hashElement.offsetParent) {
  //                 hashElementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }
  //
  //             hashElementTop = Math.round(hashElementTop);
  //
  //             smoothScroll(scrollTop, hashElementTop, this.hash);
  //         }
  //     });
  // };
  //
  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1;
  //     let prevScrollTop;
  //     let speed;
  //
  //     if (to > from) speed = 30;
  //     else speed = -30;
  //
  //     const move = setInterval(() => {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //
  //         if (
  //             prevScrollTop === scrollTop ||
  //             (to > from && scrollTop >= to) ||
  //             (to < from && scrollTop <= to)
  //         ) {
  //             clearInterval(move);
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //         }
  //         else {
  //             body.scrollTop += speed;
  //             element.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     }, timeInterval);
  // };
  //
  // calculateScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import {getResource} from "../services/requests";

const showMoreStyles = (triggerSelector, wrapperSelector) => {
  const loadButton = document.querySelector(triggerSelector);
  const cards = document.querySelectorAll(wrapperSelector);

  //                                                       w/o database

  cards.forEach(card => {
    card.classList.add('animated', 'fadeIn');
  });
  loadButton.addEventListener('click', () => {
    loadButton.remove();
    cards.forEach(card => {
      card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    });
  });

  //                                                       w/ database

  // loadButton.addEventListener('click', function() {
  //     getResource(  'http://localhost:3000/styles')
  //         .then(data => createCards(data))
  //         .catch(error => console.log(error));
  //
  //     this.remove();
  // });
  //
  //
  // const createCards = (response) => {
  //     response.forEach(({src, title, link}, i) => {
  //         const card = document.createElement('div');
  //
  //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
  //         document.querySelector(wrapperSelector).appendChild(card);
  //
  //         card.innerHTML = `
  //             <div class=styles-block>
  //                 <img src=${src} alt="style ${i}">
  //                 <h4>${title}</h4>
  //                 <a href="${link}">Подробнее</a>
  //             </div>
  //         `;
  //     });
  // };
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
      slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
  };
  showSlides(slideIndex);
  const plusSlides = whichSlide => {
    showSlides(slideIndex += whichSlide);
  };
  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      slides[slideIndex - 1].classList.remove('slideLeft');
      slides[slideIndex - 1].classList.add('slideRight');
      document.body.overflow = 'hidden';
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      document.body.overflow = 'hidden';
      slides[slideIndex - 1].classList.remove('slideRight');
      slides[slideIndex - 1].classList.add('slideLeft');
    });
  } catch (error) {}
  const activateAnimation = () => {
    if (direction === 'vertical') {
      paused = setInterval(() => {
        plusSlides(1);
        slides[slideIndex - 1].classList.add('slideUp');
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        slides[slideIndex - 1].classList.remove('slideRight');
        slides[slideIndex - 1].classList.add('slideLeft');
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

/***/ "./src/js/services/animation.js":
/*!**************************************!*\
  !*** ./src/js/services/animation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const animation = {
  modalIn: element => {
    element.animate([{
      filter: 'opacity(0)',
      scale: '1 0.1',
      left: '52%'
    }, {
      filter: 'opacity(10%)',
      scale: '1.2 0.1'
    }, {
      filter: 'opacity(40%)',
      scale: '1 1.1',
      left: '50%'
    }, {
      filter: 'opacity(100%) blur(0.6px)',
      scale: '1.01 0.98'
    }, {
      filter: 'blur(0)',
      scale: 1
    }], {
      duration: 500
    });
  },
  modalOut: element => {
    element.animate([{
      filter: 'opacity(100%) blur(0.6px)',
      scale: 1
    }, {
      filter: 'blur(0.7px)',
      scale: '1.2 1.25'
    }, {
      filter: 'opacity(100%) blur(0px)',
      scale: '1.4 1.3',
      left: '53.5%'
    }, {
      filter: 'opacity(20%)',
      scale: '1 0.8'
    }, {
      filter: 'opacity(5%) blur(0)',
      left: '46%',
      scale: 0
    }], {
      duration: 315
    });
  },
  collapseIn: element => {
    element.animate([{
      filter: 'opacity(0%)',
      transform: 'translateY(-120%) scale(0.5, 0.4)'
    }, {
      filter: 'opacity(25%)',
      transform: 'translateY(-3%) scale(1, 1.05)'
    }, {
      filter: 'opacity(100%)',
      transform: 'translateY(0%) scale(1, 0.98)'
    }, {
      transform: 'translateY(0%) scale(1)'
    }], {
      duration: 500
    });
  },
  collapseOut: element => {
    element.animate([{
      filter: 'opacity(100%)',
      transform: 'translateY(0) scale(1)'
    }, {
      filter: 'opacity(25%)',
      transform: 'translateY(30%) scale(0.5, 0.4)'
    }, {
      filter: 'opacity(20%)',
      transform: 'translateY(-75%) scale(0)'
    }], {
      duration: 300
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animation);

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
        max-height: 20rem;
        max-width: 20rem;
        margin: 0 auto 
        display: none;
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
  let status;
  inputs.forEach(e => {
    e.addEventListener('input', () => {
      if (status) status.remove();
      if (e.value.match(/[a-z]/g)) {
        status = statusMessage(e);
      }
      e.value = e.value.replace(/[a-z]/gi, '');
    });
  });
  const statusMessage = element => {
    const message = document.createElement('div');
    message.textContent = 'Пожалуйста, введите данные кириллицей';
    element.parentNode.append(message);
    setTimeout(() => {
      message.remove();
    }, 1000);
    return message;
  };
};
/* harmony default export */ __webpack_exports__["default"] = (validateInputs);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map