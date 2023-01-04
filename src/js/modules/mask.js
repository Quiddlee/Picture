const mask = (selector) => {
    const setCursorPosition = (position, element) => {
        element.focus();


        if (element.setSelectionRange) {
            element.setSelectionRange(position, position);
        }
        if (element.createTextRange) {
            const range = element.createTextRange();
            range.collapse(true);
            range.moveEnd('character', position);
            range.moveStart('character', position);
            range.select();
        }
    };


    function createMask(event) {
        const matrix = '+38 (0__) ___ __ __';
        const deffault = matrix.replace(/\D/g, '');
        let value = this.value.replace(/\D/g, '');
        let i = 0;


        if (deffault.length >= value.length || +value[0] !== 3 || +value[1] !== 8) value = deffault;


        this.value = matrix.replace(/./g, function(number) {
            return /[_\d]/.test(number) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : number;
        });


        if (event.type === 'blur') {
            if (this.value.length === 2) this.value = '';
        }
        if (event.type === 'focus') {
            setCursorPosition(this.value.length, this);
        }
    }


    const inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
}


export default mask;