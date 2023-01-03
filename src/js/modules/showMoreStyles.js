const showMoreStyles = (triggerSelector, stylesSelector) => {
    const loadButton = document.querySelector(triggerSelector);
    const cards = document.querySelectorAll(stylesSelector);


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
};


export default showMoreStyles;