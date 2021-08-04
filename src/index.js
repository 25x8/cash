import  './scss/style.scss';
import {initProductsSplide, initCertificatesSplide} from "./js/modules/splidejs";
import {initValidation} from "./js/validation/validation";
import {bindShowAnimationOnHover} from "./js/effects/effects";

document.body.onload = () => {
    initProductsSplide('.content__products .splide');
    initCertificatesSplide('.content__certificates .splide');
    initValidation();
    bindShowAnimationOnHover();
};