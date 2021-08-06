export function bindShowAnimationOnHover() {

    const productCards = document.querySelectorAll('.content__products .splide__slide');
    productCards.forEach(el => {
        const btnText = el.querySelector('.btn--text');

        el.addEventListener('mouseenter', function () {
            btnText.classList.add('element-hovered');
        })

        el.addEventListener('mouseleave', function () {
            btnText.classList.remove('element-hovered');
        })
    });

    bindShowDescriptionOnHover();

}

export function bindShowDescriptionOnHover() {

    const container = document.querySelector('.content__products .splide__content');
    const cards = document.querySelectorAll('.content__products .card.card__product');

    cards.forEach(card => {

        const description = card.querySelector('.card__product--description');

        card.addEventListener('mouseenter', (e) => {

            if (description.getBoundingClientRect().left - container.getBoundingClientRect().left < 0) {
                description.style.left = '0';
            } else if (container.getBoundingClientRect().right - description.getBoundingClientRect().right <= 0) {
                description.style.right = '0';
            }

            console.log('description', description.getBoundingClientRect())
            console.log('container', container.getBoundingClientRect())


        });

        card.addEventListener('mouseleave', () => {
            description.style.left = 'auto';
            description.style.right = 'auto';
        });
    })
}