import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";

const ACTIVE_BULLET_SELECTOR = 'glide__bullet--active';

const lemonadeList = [
    {
        title: 'Классический'
    },
    {
        title: 'Буратино'
    },
    {
        title: 'Барбарис',
    },
    {
        title: 'Грушевый'
    }
]


export function initSplide(selector) {
    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        direction: 'ttb',
        heightRatio: 0.6,
        focus: 'center',
        easing: 'linear',
        pagination: false,
        clones: 3,
        updateOnMove: true

    }).mount();

    splide.on('move', function (s, i) {

        // document.querySelector('.splide__slide.is-active').style.transform = 'translateX(0)!important';
        // document.querySelector('.splide__slide.is-active').classList.add('in-translate')
    })

    splide.on('active', function ({slide}) {
        // document.querySelector('.in-translate').classList.remove('in-translate')
    })
}