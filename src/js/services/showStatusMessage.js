const showStatusMessage = ({statusImage, appendElement, delay, message, oldElement}) => {
    try {
        oldElement.remove();
    } catch(e) {}


    const caption = document.querySelector('.popup-consultation h4');
    try {
        caption.classList.add('animated', 'fadeOutUp');
        setTimeout(() => caption.style.display = 'none', 200);
    } catch(e) {}


    appendElement.classList.add('animated', 'fadeOutUp');
    setTimeout(() => {
        appendElement.style.display = 'none';
        statusMessage.classList.add('animated', 'fadeInUp');
        textMessage.classList.add('animated', 'fadeIn');
        appendElement.parentNode.append(statusMessage);
        appendElement.parentNode.append(textMessage);
        statusMessage.append(imageMessage);
    }, 200);


    const statusMessage = document.createElement('div');
    const imageMessage = document.createElement('img');
    const textMessage = document.createElement('div');
    statusMessage.classList.add('status');
    imageMessage.src = statusImage;
    imageMessage.style.cssText = `
        border-radius: 4px;
        margin: 0 auto 
        display: none;
        max-height: 20rem;
        max-width: 20rem;
        z-index: 3;
    `;


    try {
        textMessage.innerHTML = message;
        textMessage.style.cssText = `
            transform: translateX(50%);
            background-color: white;
            border-radius: 4px;
            font-size: 23px;
            position: fixed;
            z-index: 5;
            right: 50%;
            top: 98%;
            width: 100%
        `;
    } catch(e) {}


    setTimeout(() => {
        appendElement.classList.remove('fadeOutUp');
        statusMessage.classList.remove('fadeInUp');
        statusMessage.classList.add('fadeOut');
        appendElement.classList.add('fadeIn');
        textMessage.classList.add('fadeOut');


        try {
            caption.classList.remove('fadeOutUp');
            caption.classList.add('fadeIn');
        } catch(e) {}


        setTimeout(() => {
            try {
                caption.style.display = '';
            } catch(e){}


            statusMessage.classList.remove('fadeOut');
            appendElement.classList.remove('fadeIn');
            textMessage.classList.remove('fadeOut');
            appendElement.style.display = 'block';
            statusMessage.remove();
            textMessage.remove();
        }, 430);
    }, delay);
}


export default showStatusMessage;