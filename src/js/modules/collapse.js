const collapse = (triggersSelector, descrSelector) => {
    const buttons = document.querySelectorAll(triggersSelector);
    const blocks = document.querySelectorAll(descrSelector);


    blocks.forEach(block => {
        block.style.display = 'none';
    });


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sibling = button.nextElementSibling;

            if (sibling.style.display === 'none') {
                sibling.style.display = 'block';

                sibling.animate([
                    {filter: 'opacity(0%)',
                        transform: 'translateY(-45%) scale(0.5, 0.4)'},
                    {filter: 'opacity(25%)',
                        transform: 'translateY(-2%)'},
                    {filter: 'opacity(100%)',
                        transform: 'translateY(0%) scale(1)'}
                ], {
                    duration: 500,
                });
            }
            else {
                setTimeout(() => sibling.style.display = 'none', 250);

                sibling.animate([
                    {filter: 'opacity(100%)',
                    transform: 'translateY(0) scale(1)'},
                    {filter: 'opacity(25%)',
                    transform: 'translateY(-45%) scale(0.5, 0.4)'},
                ], {
                    duration: 250,
                });
            }
        });
    });
};


export default collapse;