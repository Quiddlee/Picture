const sliders = (slidesSelector, direction, prev, next) => {
    const slides = document.querySelectorAll(slidesSelector);
    let paused = null;
    let slideIndex = 1;


    const showSlides = (whichSlide) => {
        if (whichSlide > slides.length) slideIndex = 1;
        if (whichSlide < 1) slideIndex = slides.length;

        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[slideIndex - 1].style.display = 'block';

    }
    showSlides(slideIndex);


    const plusSlides = (whichSlide) => {
        showSlides(slideIndex += whichSlide);
    }


    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);


        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            slides[slideIndex - 1].classList.remove('slideLeft');
            slides[slideIndex - 1].classList.add('slideRight');
            document.body.overflow = 'hidden';
        });


        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            document.body.overflow = 'hidden';
            slides[slideIndex - 1].classList.remove('slideRight');
            slides[slideIndex - 1].classList.add('slideLeft');
        });
    }
    catch(error) {}


    const activateAnimation = () => {
        if (direction === 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                slides[slideIndex - 1].classList.add('slideUp');
            }, 3000);
        }
        else {
            paused = setInterval(() => {
                plusSlides(1);
                slides[slideIndex - 1].classList.remove('slideRight');
                slides[slideIndex - 1].classList.add('slideLeft');
            }, 3000);
        }
    }
    activateAnimation();


    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });


    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
}


export default sliders;