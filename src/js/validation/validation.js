import IMask from "imask";

const PHONE_MASK = '+{7} (000) 000-00-00';

export function initValidation() {
    const nameField = document.getElementById('field--name');
    const phoneField = document.getElementById('field--phone');
    const textField = document.getElementById('field--message');
    const invalidMessage = document.getElementById('invalid-message');

    initInputValidation(nameField, invalidMessage);
    initInputValidation(phoneField, invalidMessage);
    initInputValidation(textField, invalidMessage);

    IMask(phoneField, {mask: PHONE_MASK});
}

function initInputValidation(element, messageEl) {

    element.addEventListener('invalid', function (event) {
        if (!event.target.validity.valid) {
            event.preventDefault()
            event.stopPropagation()
            element.parentNode.classList.add('fields--validated');
            messageEl.style.display = 'inherit';
        }
    });

    element.addEventListener('input', function () {
        messageEl.style.display = 'none'
    })

}