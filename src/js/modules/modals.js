import animation from "../services/animation";


const modals = () => {
    let isModalActive = false;
    function bindModal(modalSelector, triggerSelector, closeSelector, deleteTrigger = false) {
        // const modalTimerId = showModalByTime('popup-consultation', 6000);
        const modalDialogs = document.querySelectorAll('.popup-content');
        const trigger = document.querySelectorAll(triggerSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const gift = document.querySelector('.fixed-gift');
        const scroll = calculateScrollWidth();


        trigger.forEach(element => {
            element.addEventListener('click', (event) => {
                // if (modalTimerId) clearInterval(modalTimerId);
                if (gift) gift.style.right = `${scroll * 2}px`;
                if (event.target) event.preventDefault();
                if (deleteTrigger) element.remove();
                isModalActive = true;


                modalDialogs.forEach(elem => {
                    animation.modalIn(elem);
                });


                windows.forEach(window => {
                    window.style.display = 'none'
                });


                document.body.style.marginRight = `${scroll}px`;
                document.body.style.overflow = 'hidden';
                modal.style.display = 'block';
            });
        });


        close.addEventListener('click', () => {
            if (gift) gift.style.right = `2rem`;

            modalDialogs.forEach(elem => {
                animation.modalOut(elem);
            });

            setTimeout(() => {
                windows.forEach(window => window.style.display = 'none');
                document.body.style.marginRight = '0px';
                document.body.style.overflow = '';
            },300)
        });


        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                if (gift) gift.style.right = `2rem`;

                modalDialogs.forEach(elem => {
                    animation.modalOut(elem);
                });

                setTimeout(() => {
                    windows.forEach(window => window.style.display = 'none');
                    document.body.style.marginRight = '0px';
                    document.body.style.overflow = '';
                },300)
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
            if ((window.scrollY + document.documentElement.clientHeight
                >= document.documentElement.scrollHeight - 1) && !isModalActive) {
                window.removeEventListener('scroll', openByScroll);
                document.querySelector(selector).click();                         // click() - ???????????? ?????????? ??????????????
            }
        });
    }


    bindModal('.popup-consultation', '.button-consultation', '.popup-consultation .popup-close');
    bindModal('.popup-design', '.button-design', '.popup-design .popup-close');
    bindModal('.popup-gift', '.fixed-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
};


export default modals;