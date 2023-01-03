const createOrDeleteStatusMessage = ({statusImage, appendElement, delay, scale, message, oldElement, animate}) => {
    try {
        oldElement.remove();
        oldElement.statusMessage.remove();
        oldElement.textMessage.remove();
    } catch (e) {}


    appendElement.classList.add('animated', 'fadeOutUp');
    setTimeout(() => {
        appendElement.style.display = 'none';
        statusMessage.classList.add('animated', 'fadeInUp');
        appendElement.parentNode.append(statusMessage);
        textMessage.classList.add('animated', 'fadeIn');
        appendElement.parentNode.append(textMessage);
    }, 200);


    const statusMessage = document.createElement('img');
    const textMessage = document.createElement('div');
    statusMessage.src = statusImage;
    statusMessage.style.cssText = `
        margin: 0 auto
        display: none;
        transform: scale(${scale});
        border-radius: 4px;
        height: 100%;
        width: 100%;
        z-index: 3;
    `;


    if (message) {
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

    }


    setTimeout(() => {
        appendElement.classList.add('fadeIn');
        appendElement.classList.remove('fadeOutUp');
        statusMessage.classList.remove('fadeInUp');
        statusMessage.classList.add('fadeOut');
        textMessage.classList.add('fadeOut');
        setTimeout(() => {
            appendElement.style.display = 'block';
            statusMessage.remove();
            textMessage.remove();
        }, 750);
    }, delay);
    statusMessage.classList.remove('fadeOut');
    appendElement.classList.remove('fadeIn');


    return {
        statusMessage,
        textMessage
    }
}


export default createOrDeleteStatusMessage;