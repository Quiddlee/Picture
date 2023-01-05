const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const grandmotherButton = menu.querySelector('.grandmother');
    const granddadButton = menu.querySelector('.granddad');
    const loversButton = menu.querySelector('.lovers');
    const girlButton = menu.querySelector('.girl');
    const chefButton = menu.querySelector('.chef');
    const guyButton = menu.querySelector('.guy');
    const buttonAll = menu.querySelector('.all');
    const items = menu.querySelectorAll('li');

    const wrapper = document.querySelector('.portfolio-wrapper');
    const markLovers = wrapper.querySelectorAll('.lovers');
    const no = document.querySelector('.portfolio-no');
    const markChef = wrapper.querySelectorAll('.chef');
    const markGirl = wrapper.querySelectorAll('.girl');
    const markAll = wrapper.querySelectorAll('.all');
    const markGuy = wrapper.querySelectorAll('.guy');


    const typeFilter = (markType) => {
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
        }
        else {
            no.classList.add('animated', 'fadeIn');
            no.style.display = 'block';
        }
    };


    menu.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.tagName === 'LI') {
            typeFilter(wrapper.querySelectorAll(`.${target.className.replace('active', '')}`));
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};


export default filter;