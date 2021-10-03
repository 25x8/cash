import  './scss/style.scss';
import {initDropdown} from "./js/components/dropdown";
import {initValidation} from "./js/validation/validation";
import {bindShowAnimationOnHover} from "./js/effects/effects";
import {initSwiper} from "./js/modules/swiperjs";

document.body.onload = () => {
    initSwiper();
    bindShowAnimationOnHover();
    initDropdown()
};