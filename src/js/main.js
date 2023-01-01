import sliders from "./modules/sliders";
import modals from "./modules/modals";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn', '.main-prev-btn');
    sliders('.main-slider-item','vertical');
    modals();
});