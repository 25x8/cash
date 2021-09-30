import  './scss/style.scss';
import {initProductsSplide, initCertificatesSplide} from "./js/modules/splidejs";
import {initValidation} from "./js/validation/validation";
import {bindShowAnimationOnHover} from "./js/effects/effects";
import {initSwiper} from "./js/modules/swiperjs";

document.body.onload = () => {
    initSwiper();
    initValidation();
    bindShowAnimationOnHover();
};