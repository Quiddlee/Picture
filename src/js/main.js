import showMoreStyles from "./modules/showMoreStyles";
import pictureSize from "./modules/pictureSize";
import dragAndDrop from "./modules/dragAndDrop";
import calculator from "./modules/calculator";
import scrolling from "./modules/scrolling";
import collapse from "./modules/collapse";
import sliders from "./modules/sliders";
import modals from "./modules/modals";
import filter from "./modules/filter";
import burger from "./modules/burger";
import forms from "./modules/forms";
import mask from "./modules/mask";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const state = {};

    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', '.main-prev-btn');
    calculator('#size', '#material', '#options', '.promocode', '.calc-price', state);
    collapse('.accordion-heading', '.accordion-block');
    showMoreStyles('.button-styles','#styles .row');
    sliders('.main-slider-item','vertical');
    burger('.burger-menu', '.burger');
    pictureSize('.sizes-block');
    mask('[name="phone"]');
    scrolling('.pageup');
    forms(state);
    dragAndDrop();
    modals();
    filter();
});