import  './scss/style.scss';
import {initProductsSplide, initCertificatesSplide} from "./js/modules/splidejs";
import {initValidation} from "./js/validation/validation";

document.body.onload = () => {
    initProductsSplide('.content__products .splide');
    initCertificatesSplide('.content__certificates .splide');
    initValidation();
};