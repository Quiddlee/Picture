import showMoreStyles from "./modules/showMoreStyles";
import pictureSize from "./modules/pictureSize";
import calculator from "./modules/calculator";
import collapse from "./modules/collapse";
import sliders from "./modules/sliders";
import modals from "./modules/modals";
import filter from "./modules/filter";
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
    pictureSize('.sizes-block');
    mask('[name="phone"]');
    forms(state);
    modals();
    filter();
});