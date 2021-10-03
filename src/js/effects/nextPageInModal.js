export function initNextPageAction({button, curPage, nextPage, background}) {
    const body = document.querySelector('.modal__body');
    button.onclick = function () {

        body.classList.add('loading');

        setTimeout(function (){

            body.classList.remove('loading');
            body.classList.remove(curPage);
            body.classList.add(nextPage);


            background.style.display = nextPage === 'rate' ? 'none' : 'inherit';
        }, 500);



    }
}