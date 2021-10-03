export function initDropdown() {
    const dropdownItems = document.querySelectorAll('.dropdown .dropdown-item--header');

    dropdownItems.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.target.classList.toggle('item-opened');
        });
    });
}