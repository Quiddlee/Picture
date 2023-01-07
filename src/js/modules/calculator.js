import {getResource} from "../services/requests";


const calculator = (size, material, options, promocode, result, state) => {
    const promocodeBlock = document.querySelector(promocode);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const resultBlock = document.querySelector(result);
    const sizeBlock = document.querySelector(size);
    let sum = 0;


    //                                                  w/ database

    // const setPrice = async (element) => {
    //     let priceList;
    //     let promo;
    //     await getResource('http://localhost:3000/PriceList')
    //         .then(data => priceList = data);
    //
    //
    //     priceList.forEach(obj => {
    //         for (const key in obj) {
    //             try {
    //                 if (key === 'promocode') {
    //                     promo = obj[key];
    //                 }
    //
    //                 if (key === element.options[element.selectedIndex].innerText) {
    //                     element.options[element.selectedIndex].value = obj[key];
    //                 }
    //             } catch(e){}
    //         }
    //     });
    //
    //     return promo;
    // }
    //
    //
    // const calcFunction = async (element, property) => {
    //     const promo = await setPrice(element);
    //
    //     sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
    //
    //     if (sizeBlock.value === '' || materialBlock.value === '') {
    //         resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
    //     }
    //     else if (promocodeBlock.value === promo) {
    //         resultBlock.textContent = Math.round(sum * 0.7);
    //         state['promocode'] = 'true';
    //     }
    //     else {
    //         resultBlock.textContent = sum;
    //         state['promocode'] = 'false';
    //     }
    //
    //     try {
    //         if (element.options.selectedIndex === 0) {
    //             delete state[property];
    //         }
    //
    //         if (element.options.selectedIndex !== 0) {
    //             state[property] = element.options[element.selectedIndex].textContent;
    //         }
    //     }catch(e) {}
    //     state['price'] = resultBlock.textContent;
    //     console.log(state);
    // };


    //                                                  w/o database

    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };


    promocodeBlock.addEventListener('input', () => calcFunction(promocodeBlock, 'promocode'));
    materialBlock.addEventListener('change', () => calcFunction(materialBlock, 'material'));
    optionsBlock.addEventListener('change', () => calcFunction(optionsBlock, 'options'));
    sizeBlock.addEventListener('change', () => calcFunction(sizeBlock, 'size'));
};


export default calculator;