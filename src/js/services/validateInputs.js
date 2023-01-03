const validateInputs = (selector) => {
    const inputs = document.querySelectorAll(selector);


    inputs.forEach(e => {
        e.addEventListener('input', () => {
            e.value = e.value.replace(/[a-z]/gi, '');
        });
    });
};


export default validateInputs;