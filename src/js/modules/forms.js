import validateInputs from "../services/validateInputs";
import showStatusMessage from "../services/showStatusMessage";
import postData from "../services/cervices";


const forms = () => {
    const allForms = document.querySelectorAll('form');
    const upload = document.querySelectorAll('[name="upload"]');


    // checkNumInputs('input[name="user_phone"]')
    validateInputs('textarea[name="message"]', /[a-z]/gi);
    validateInputs('input[name="name"]', /[a-z]/gi);
    validateInputs('input[name="phone"]', /\D/g);


    const messages = {
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        loading: 'Загрузка...',
        ok: 'assets/img/ok.gif',
        notOk: 'assets/img/fail.png',
        spinner: 'assets/img/spinner.gif'
    }


    const paths = {
        designer: 'assets/server.php',
        question: 'assets/questions.php'
    }


    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();


            const load = document.createElement('img');
            load.style.scale = '0.2';
            load.src = messages.spinner;
            form.parentNode.append(load);


            const formData = new FormData(form);
            let api;
            form.closest('.popup-design') || form.classList.contains('calc_form')
                ? api = paths.designer
                : api = paths.question;


            postData(api, formData)
                .then(data => {
                    console.log(data);
                    showStatusMessage({
                        message: messages.success,
                        statusImage: messages.ok,
                        appendElement: form,
                        oldElement: load,
                        delay: 1700
                    });
                })
                .catch(() => {
                    showStatusMessage({
                        statusImage: messages.notOk,
                        message: messages.failure,
                        appendElement: form,
                        oldElement: load,
                        delay: 2000
                    });
                })
                .finally(() => {
                    allForms.forEach(form => form.reset());
                    upload.forEach(elem => elem.previousElementSibling.textContent = 'Файл не выбран');
                });
        });
    }


    upload.forEach(elem => {
        elem.addEventListener('input', () => {
            let dots;
            const filesArr = elem.files[0].name.split('.');
            filesArr[0].length > 6 ? dots = '...' : dots = '.';
            elem.previousElementSibling.textContent = `${filesArr[0].substring(0, 6)}${dots}${filesArr[1]}`;
        });
    });


    allForms.forEach(form => {
        bindPostData(form);
    });
}


export default forms;