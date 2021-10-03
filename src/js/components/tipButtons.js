export function initTipButtons() {
    const totalEl = document.querySelector('.rate__amount--text span');
    const showingTipEl = document.querySelector('.calc--val');
    const tipButtons = document.querySelectorAll('.btn__tip');
    let lastActiveBtn = null

    tipButtons.forEach(btn => {
        btn.onclick = function () {
            if(lastActiveBtn) {
                lastActiveBtn.classList.remove('active-btn');
            }

            lastActiveBtn = this;
            this.classList.add('active-btn');

            const tipValPercent = +this.getAttribute('val');
            const tipValMoney = +totalEl.textContent * (tipValPercent / 100);
            showingTipEl.textContent = Math.round(tipValMoney) + ' р.';
        }
    });

    tipButtons[0].click();

    initRateStars();
}

function initRateStars() {

    const starsGroup = document.querySelector('.stars__group');
    const starBtns = starsGroup.querySelectorAll('.stars__group--star');

    starBtns.forEach(star => {
        star.onclick = function () {
            starBtns.forEach(star => star.classList.remove('active-star'));
            const rateVal = +this.getAttribute('val');

            for (let i = 1; i <= rateVal; i++) {
                starsGroup.querySelector(`[val="${i}"]`).classList.add('active-star')
            }

        }
    })

}