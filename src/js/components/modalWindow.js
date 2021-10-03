const body = document.querySelector('body');
const modalFade = document.createElement('div');
modalFade.classList.add('modal-fade');


export function initModals(){

    document.querySelectorAll('.modal-window').forEach(modal =>{
        modal.onclick = e => {
            e.preventDefault();
        }

    })

    document.querySelector('.welcome-background').style.display = 'inherit';

    initModal({
        container: document.querySelector('.modal-demo'),
        initBtns: document.querySelectorAll('[btn-modal="demo"]')
    });

}

function initModal({container, initBtns}) {
    const modalWrapper = container.querySelector('.modal-wrapper');
    const closeBtn = container.querySelector('.modal-wrapper__close-btn');
    const contentContainer = container.querySelector('.modal__body');
    const modalBody = modalWrapper.querySelector('.modal__body')

    modalWrapper.addEventListener('click', function (e) {
        e.stopPropagation();
    })

    initBtns.forEach(btn => {
        btn.onclick = function () {
            openModal(container);
        };

        closeBtn.onclick = function () {
            closeModal(container, contentContainer);
        };

        container.onclick = function () {
            closeModal(container, modalBody);
        }
    });

    return contentContainer;
}


function openModal(modal) {
    body.prepend(modalFade);
    body.classList.add('open-modal');
    setTimeout(() => {
        modalFade.classList.add('show');
        modal.classList.add('opened');
    }, 300);
}

function closeModal(modal, modalBody) {
    const oneModal = document.querySelectorAll('.opened').length < 2;
    if(oneModal) {
        modalFade.classList.remove('show');
        body.classList.remove('open-modal');
    }

    modal.classList.remove('opened');
    document.querySelector('.welcome-background').style.display = 'inherit';
    document.querySelector('.bye-background').style.display = 'none';

    modalBody.classList.remove('rate');
    modalBody.classList.remove('good-bye');
    modalBody.classList.add('welcome');

    if(oneModal) {
        setTimeout(() => {
            modalFade.remove();
        }, 300);
    }
}





