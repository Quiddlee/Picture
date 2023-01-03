import showMoreStyles from "./modules/showMoreStyles";
import sliders from "./modules/sliders";
import modals from "./modules/modals";
import forms from "./modules/forms";
import mask from "./modules/mask";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', '.main-prev-btn');
    sliders('.main-slider-item','vertical');
    showMoreStyles('.button-styles','#styles .row');
    mask('[name="phone"]');
    modals();
    forms();
});