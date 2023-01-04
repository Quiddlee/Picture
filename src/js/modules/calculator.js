const calculator = (size, material, options, promocode, result) => {
    const promocodeBlock = document.querySelector(promocode);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const resultBlock = document.querySelector(result);
    const sizeBlock = document.querySelector(size);
    let sum = 0;


    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        }
        else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        }
        else {
            resultBlock.textContent = sum;
        }
    };


    materialBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    sizeBlock.addEventListener('change', calcFunction);
};


export default calculator;