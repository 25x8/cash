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
    const splide = new Splide(selector, {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        easing: 'linear',
        pagination: false,
        updateOnMove: true,
        focus: 1,
        trimSpace: false,
        gap: '1rem',
        breakpoints: {
            1440: {
                perPage: 3
            },
            1024: {
                perPage: 2
            },
            768: {
                perPage: 1,
                padding: '2rem'
            },
        }

    });

    splide.on('mounted', function () {
        setTimeout(() => splide.go( '+' ), 300)

    });

    splide.on( 'move', function() {
        console.log(1111)
    } );

    splide.mount();
}

export function initCertificatesSplide(selector) {
    new Splide(selector, {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        focus: 'center',
        height: '240px',
        gap: '2rem',
        arrows: false,
        clones: 3
    }).mount();
}