const collapse = (triggersSelector, descrSelector) => {
    const buttons = document.querySelectorAll(triggersSelector);
    const blocks = document.querySelectorAll(descrSelector);


    // blocks.forEach(block => {
    //     block.style.display = 'none';
    // });


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sibling = this.nextElementSibling;
            this.classList.toggle('active-style');
            sibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                sibling.style.maxHeight = `${sibling.scrollHeight + 80}px`;

                sibling.animate([
                    {filter: 'opacity(0%)',
                        transform: 'translateY(-120%) scale(0.5, 0.4)'},
                    {filter: 'opacity(25%)',
                        transform: 'translateY(-3%) scale(1, 1.05)'},
                    {filter: 'opacity(100%)',
                        transform: 'translateY(0%) scale(1)'}
                ], {
                    duration: 500,
                });
            }
            else {
                sibling.style.maxHeight = '0px';

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