const scrolling = (upSelector) => {
    const upElement = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElement.classList.remove('fadeOut');
            upElement.classList.add('animated', 'fadeIn');
        }
        else {
            upElement.classList.remove('fadeIn');
            upElement.classList.add('fadeOut');
        }
    });

    //                                    requestAnimationFrame scrolling

    const links = document.querySelectorAll('[href^="#"]');
    const speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const widthTop = document.documentElement.scrollTop;
            const hash = this.hash;
            const toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) start = time;

                const progress = time - start;
                let numberOfPixelsToScroll = (toBlock < 0
                    ? Math.max(widthTop - progress / speed, widthTop + toBlock)
                    : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, numberOfPixelsToScroll);

                if (numberOfPixelsToScroll !== widthTop + toBlock) {
                    requestAnimationFrame(step);
                }
                else location.hash = hash;
            }
        });
    });

    //                                          Native js scrolling

    // const element = document.documentElement;
    // const body = document.body;
    //
    // const calculateScroll = () => {
    //     upElement.addEventListener('click', function(event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //
    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashElement = document.querySelector(this.hash);
    //             let hashElementTop = 0;
    //
    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }
    //
    //             hashElementTop = Math.round(hashElementTop);
    //
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };
    //
    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1;
    //     let prevScrollTop;
    //     let speed;
    //
    //     if (to > from) speed = 30;
    //     else speed = -30;
    //
    //     const move = setInterval(() => {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //
    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         }
    //         else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };
    //
    // calculateScroll();
};


export default scrolling;