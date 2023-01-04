import showMoreStyles from "./modules/showMoreStyles";
import calculator from "./modules/calculator";
import sliders from "./modules/sliders";
import modals from "./modules/modals";
import forms from "./modules/forms";
import mask from "./modules/mask";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', '.main-prev-btn');
    calculator('#size', '#material', '#options', '.promocode', '.calc-price');
    showMoreStyles('.button-styles','#styles .row');
    sliders('.main-slider-item','vertical');
    mask('[name="phone"]');
    modals();
    forms();
});