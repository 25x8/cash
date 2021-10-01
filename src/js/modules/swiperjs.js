import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export function initSwiper() {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
    });

    new Swiper('.swiper-card-account', {
        slidesPerView: 'auto',

    });

    new Swiper('.swiper-card-compact', {
        slidesPerView: 'auto',
    });

    new Swiper('.swiper-settings', {
        slidesPerView: 'auto',
    });
}