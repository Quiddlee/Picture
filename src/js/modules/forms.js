import createOrDeleteStatusMessage from "../services/createOrDeleteStatusMessage";
import checkCyrillicInput from "../services/checkCyrillicInput";
import {postData} from "../services/cervices";


const forms = () => {
    const allForms = document.querySelectorAll('form');


    // checkNumInputs('input[name="user_phone"]')
    checkCyrillicInput('textarea[name="message"]', /[a-z]/gi);
    checkCyrillicInput('input[name="name"]', /[a-z]/gi);
    checkCyrillicInput('input[name="phone"]', /\D/g);


    const messages = {
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        loading: 'Загрузка...',
        ok: 'assets/img/ok.gif',
        notOk: 'assets/img/fail.png',
        spinner: 'assets/img/spinner.gif'
    }


    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();


            const load = document.createElement('img');
            load.style.scale = '0.2';
            load.src = messages.spinner;
            form.parentNode.append(load);


            // const statusMessage = createOrDeleteStatusMessage({
            //     statusImage: messages.spinner,
            //     appendElement: form,
            //     delay: 3000,
            //     scale: 0.5
            // });
            const formData = new FormData(form);


            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    createOrDeleteStatusMessage({
                        message: messages.success,
                        statusImage: messages.ok,
                        appendElement: form,
                        oldElement: load,
                        animate: true,
                        delay: 1700,
                        scale: 1
                    });
                })
                .catch(() => {
                    createOrDeleteStatusMessage({
                        statusImage: messages.notOk,
                        message: messages.failure,
                        appendElement: form,
                        oldElement: load,
                        animate: true,
                        delay: 2000,
                        scale: 1
                    });
                })
                .finally(() => {
                    allForms.forEach(form => form.reset());
                });
        });
    }


    allForms.forEach(form => {
        bindPostData(form);
    });
}


export default forms;