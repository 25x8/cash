import  './scss/style.scss';
import {initDropdown} from "./js/components/dropdown";
import {initValidation} from "./js/validation/validation";
import {bindShowAnimationOnHover} from "./js/effects/effects";
import {initSwiper} from "./js/modules/swiperjs";
import {initModals} from "./js/components/modalWindow";
import {initNextPageAction} from "./js/effects/nextPageInModal";
import {initTipButtons} from "./js/components/tipButtons";

document.body.onload = () => {
    initSwiper();
    bindShowAnimationOnHover();
    initModals();
    initDropdown();
    initNextPageAction({
        button: document.querySelector('[btn-action="continue"]'),
        curPage: document.querySelector('.welcome-block'),
        nextPage: document.querySelector('.rate-block'),
        background: document.querySelector('.modal-wrapper__background')
    });
    initTipButtons();
};