const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);


    const showImg = (block) => {
        const img = block.querySelector('img');

        img.src = `${img.src.slice(0, -4)}-1.png`;
        img.classList.add('animated', 'fadeIn');

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { // 'p:not(.sizes-hit)' - дословно, собрать
            p.style.display = 'none';                               //  все параграфы, у которых нет класса .sized-hit
        });
    };


    const hideImg = (block) => {
        const img = block.querySelector('img');

        img.src = `${img.src.slice(0, -6)}.png`;
        img.classList.remove('animated', 'fadeIn');

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    };


    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });

        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};


export default pictureSize;