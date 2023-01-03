const validateInputs = (selector, replace) => {
    const inputs = document.querySelectorAll(selector);


    inputs.forEach(e => {
        e.addEventListener('input', () => {
            e.value = e.value.replace(replace, '');
        });
    });
};


export default validateInputs;