export function bindShowAnimationOnHover(el) {

    const productCards = document.querySelectorAll('.content__products .splide__slide');
    productCards.forEach(el => {
        const btnText = el.querySelector('.btn--text');

        el.addEventListener('mouseenter', function () {
            btnText.classList.add('element-hovered');
        })

        el.addEventListener('mouseleave', function (){
            btnText.classList.remove('element-hovered');
        })
    })


}