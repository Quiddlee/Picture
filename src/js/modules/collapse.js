const collapse = (triggersSelector, descrSelector) => {
    const buttons = document.querySelectorAll(triggersSelector);
    const blocks = document.querySelectorAll(descrSelector);


    blocks.forEach(block => {
        block.style.display = 'none';
    });


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active-style');

            const sibling = button.nextElementSibling;

            if (sibling.style.display === 'none') {
                sibling.style.display = 'block';

                sibling.animate([
                    {filter: 'opacity(0%)',
                        transform: 'translateY(-75%) scale(0.5, 0.4)'},
                    {filter: 'opacity(25%)',
                        transform: 'translateY(-3%) scale(1)'},
                    {filter: 'opacity(100%)',
                        transform: 'translateY(0%) '}
                ], {
                    duration: 500,
                });
            }
            else {
                setTimeout(() => {
                    sibling.style.display = 'none'
                }, 300);

                sibling.animate([
                    {filter: 'opacity(100%)',
                        transform: 'translateY(0) scale(1)'},
                    {filter: 'opacity(25%)',
                        transform: 'translateY(30%) scale(0.5, 0.4)'},
                    {filter: 'opacity(20%)',
                        transform: 'translateY(-75%) scale(0)'}
                ], {
                    duration: 300,
                });
            }
        });
    });
};


export default collapse;