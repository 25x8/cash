import  './scss/style.scss';
import {initProductsSplide, initCertificatesSplide} from "./js/modules/splidejs";

document.body.onload = () => {
    initProductsSplide('.content__products .splide');
    initCertificatesSplide('.content__certificates .splide')
};