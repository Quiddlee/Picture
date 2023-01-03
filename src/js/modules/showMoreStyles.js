import {getResource} from "../services/requests";


const showMoreStyles = (triggerSelector, wrapperSelector) => {
    const loadButton = document.querySelector(triggerSelector);


    //                                                       w/o database

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeIn');
    // });
    //
    //
    // loadButton.addEventListener('click', () => {
    //     loadButton.remove();
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    // });


    //                                                       w/ database

    loadButton.addEventListener('click', function() {
        getResource(  'http://localhost:3000/styles')
            .then(data => createCards(data))
            .catch(error => console.log(error));

        this.remove();
    });


    const createCards = (response) => {
        response.forEach(({src, title, link}, i) => {
            const card = document.createElement('div');

            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
            document.querySelector(wrapperSelector).appendChild(card);

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="style ${i}">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;
        });
    };
};


export default showMoreStyles;