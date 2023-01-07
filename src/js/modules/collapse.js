import animation from "../services/animation";


const collapse = (triggersSelector) => {
    const buttons = document.querySelectorAll(triggersSelector);

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sibling = this.nextElementSibling;
            this.classList.toggle('active-style');
            sibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                sibling.style.maxHeight = `${sibling.scrollHeight + 80}px`;
                animation.collapseIn(sibling);
            }
            else {
                sibling.style.maxHeight = '0px';
                animation.collapseOut(sibling);
            }
        });
    });
};


export default collapse;