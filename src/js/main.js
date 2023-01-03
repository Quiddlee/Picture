import sliders from "./modules/sliders";
import modals from "./modules/modals";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', '.main-prev-btn');
    sliders('.main-slider-item','vertical');
    modals();
    forms()
});