const dragAndDrop = () => {
    // drag *
    // dragend *
    // dragenter - срабатывает, когда перетаскиваемый объект находится над dropArea
    // dragexit *
    // dragleave - срабатывает, когда объект перетащили за пределы dropArea
    // dragover - срабатывает каждые несколько миллисекунд, когда объект находится над dropArea
    // dragstart *
    // drop - срабатывает, когда наш объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    });

    function preventDefault(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    function highlight(element) {
        element.closest('.file_upload').style.border = '5px solid yellow';
        element.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }

    function unHighlight(element) {
        element.closest('.file_upload').style.border = 'none';
        if (element.closest('.calc_form')) {
            element.closest('.file_upload').style.backgroundColor = '#fff';
        }
        else {
            element.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (event) => {
            input.files = event.dataTransfer.files;

            const filesArr = input.files[0].name.split('.');
            let dots;
            filesArr[0].length > 6 ? dots = '...' : dots = '.';
            input.previousElementSibling.textContent = `${filesArr[0].substring(0, 6)}${dots}${filesArr[1]}`;
        });
    });
};


export default dragAndDrop;