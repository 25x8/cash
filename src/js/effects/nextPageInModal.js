export function initNextPageAction({button, curPage, nextPage, background}) {
    button.onclick = function () {
        curPage.style.display = 'none';
        nextPage.style.display = 'flex';
        background.style.display = 'none';
    }
}