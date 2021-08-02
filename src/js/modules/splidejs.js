import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";

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


export function initProductsSplide(selector) {
     new Splide(selector, {
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
}

export function initCertificatesSplide(selector) {
    new Splide(selector, {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        focus: 'center',
        height: '240px',
        gap: '2rem',
        clones: 3
    }).mount();
}