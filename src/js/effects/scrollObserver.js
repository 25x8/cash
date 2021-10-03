export function initScrollObserver() {


    let observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.50 && entry.boundingClientRect.y > 120) {
                const lastActive = document.querySelector('li.active');
                lastActive && lastActive.classList.remove('active')
                entry.target.classList.add('active');
            }
        })

    }, {
        threshold: [0, 1],
        rootMargin: '0px 0px -50% 0px',
    })

    document.querySelectorAll('.simple__list--ul .list-content li').forEach(circle => {
        observer.observe(circle);
    })


}