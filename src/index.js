import  './scss/style.scss';
import {initDropdown} from "./js/components/dropdown";
import {initSwiper} from "./js/modules/swiperjs";
import {initModals} from "./js/components/modalWindow";
import {initNextPageAction} from "./js/effects/nextPageInModal";
import {initTipButtons} from "./js/components/tipButtons";
import {initScrollObserver} from "./js/effects/scrollObserver";

document.body.onload = () => {
    initSwiper();
    initScrollObserver();
    initModals();
    initDropdown();
    initNextPageAction({
        button: document.querySelector('[btn-action="continue"]'),
        curPage: 'welcome',
        nextPage: 'rate',
        background: document.querySelector('.welcome-background')
    });

    initNextPageAction({
        button: document.querySelector('[btn-action="bye"]'),
        curPage: 'rate',
        nextPage: 'good-bye',
        background: document.querySelector('.bye-background')
    });
    initTipButtons();
};