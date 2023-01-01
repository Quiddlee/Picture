const modals = () => {
    function bindModal(modalSelector, triggerSelector, closeSelector, closeClickOverlay = true) {
        // const modalTimerId = showModalByTime('popup-consultation', 6000);
        const trigger = document.querySelectorAll(triggerSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const scroll = calculateScrollWidth();


        trigger.forEach(element => {
            element.addEventListener('click', (event) => {
                // if (modalTimerId) clearInterval(modalTimerId);
                if (event.target) event.preventDefault();

                windows.forEach(window => window.style.display = 'none');
                document.body.style.marginRight = `${scroll}px`;
                document.body.style.overflow = 'hidden';
                modal.style.display = 'block';
            });
        });


        close.addEventListener('click', () => {
            windows.forEach(window => window.style.display = 'none');
            // modal.classList.remove('form_faded');
            document.body.style.marginRight = '0px';
            document.body.style.overflow = '';
        });


        modal.addEventListener('click', (event) => {
            if (event.target === modal && closeClickOverlay) {
                windows.forEach(window => window.style.display = 'none');
                // modal.classList.remove('form_faded');
                document.body.style.marginRight = '0px';
                document.body.style.overflow = '';
            }
        });
    }


    bindModal('.popup-design', '.button-design', '.popup-design .popup-close');
    bindModal('.popup-consultation', '.button-consultation', '.popup-consultation .popup-close');


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
};


export default modals;