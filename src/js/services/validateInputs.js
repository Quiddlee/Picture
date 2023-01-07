const validateInputs = (selector) => {
    const inputs = document.querySelectorAll(selector);
    let status;


    inputs.forEach(e => {
        e.addEventListener('input', () => {
            if (status) status.remove();

            if (e.value.match(/[a-z]/g)) {
                status = statusMessage(e);
            }

            e.value = e.value.replace(/[a-z]/gi, '');
        });
    });


    const statusMessage = (element) => {
        const message = document.createElement('div');
        message.textContent = 'Пожалуйста, введите данные кириллицей';
        element.parentNode.append(message);

        setTimeout(() => {
            message.remove();
        }, 1000);

        return message;
    };
};




export default validateInputs;