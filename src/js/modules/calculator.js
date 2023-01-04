import {getResource} from "../services/requests";


const calculator = (size, material, options, promocode, result, state) => {
    const promocodeBlock = document.querySelector(promocode);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const resultBlock = document.querySelector(result);
    const sizeBlock = document.querySelector(size);
    let sum = 0;


    const setPrice = async (element) => {
        let priceList;
        let promo;
        await getResource('http://localhost:3000/PriceList')
            .then(data => priceList = data);


        priceList.forEach(obj => {
            for (const key in obj) {
                try {
                    if (key === element.options[element.selectedIndex].innerText) {
                        element.options[element.selectedIndex].value = obj[key];
                    }

                    if (key === 'promocode') {
                        promo = obj[key];
                    }
                } catch(e){}
            }
        });

        return promo;
    }


    const calcFunction = async (element, property) => {
        const promo = await setPrice(element);

        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        }
        else if (promocodeBlock.value === promo) {
            resultBlock.textContent = Math.round(sum * 0.7);
            state['promocode'] = 'true';
            state['price'] = resultBlock.textContent;
        }
        else {
            resultBlock.textContent = sum;
            state['promocode'] = 'false';
        }

        try {
            if (element.options.selectedIndex === 0) {
                delete state[property];
                state['price'] = resultBlock.textContent;
            }

            if (element.options.selectedIndex !== 0) {
                state[property] = element.options[element.selectedIndex].textContent;
                state['price'] = resultBlock.textContent;
            }
        }catch(e) {}

        console.log(state);
    };


    materialBlock.addEventListener('change', () => calcFunction(materialBlock, 'material'));
    optionsBlock.addEventListener('change', () => calcFunction(optionsBlock, 'options'));
    sizeBlock.addEventListener('change', () => calcFunction(sizeBlock, 'size'));
    promocodeBlock.addEventListener('input', calcFunction, promocodeBlock, 'promocode');
};


export default calculator;