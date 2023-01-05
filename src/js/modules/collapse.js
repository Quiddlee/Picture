const collapse = (triggersSelector, descrSelector) => {
    const buttons = document.querySelectorAll(triggersSelector);
    const blocks = document.querySelectorAll(descrSelector);


    blocks.forEach(block => {
        block.style.display = 'none';
    });


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                // buttons.forEach(button => {
                //     button.classList.remove('active', 'active-style');
                // });

                this.classList.add('active', 'active-style');
            }
            else {
                this.classList.remove('active', 'active-style');
            }

            const sibling = button.nextElementSibling;

            if (sibling.style.display === 'none') {
                sibling.style.display = 'block';

                sibling.animate([
                    {filter: 'opacity(0%)',
                        transform: 'translateY(-45%) scale(0.5, 0.4)'},
                    {filter: 'opacity(25%)',
                        transform: 'translateY(-3%)'},
                    {filter: 'opacity(100%)',
                        transform: 'translateY(0%) scale(1)'}
                ], {
                    duration: 500,
                });
            }
            else {
                setTimeout(() => sibling.style.display = 'none', 300);

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