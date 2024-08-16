function focused() {
    const inputEls = [...document.querySelectorAll('input')];

    const clearClasses = (inputElsArray) => {
        for (const inputEl of inputElsArray) {
            inputEl.parentNode.classList.remove('focused');
        }
    }

    inputEls.map((inputEl) => {
        inputEl.addEventListener('focus', (el) => {

            clearClasses(inputEls);
            el.currentTarget.parentNode.classList.add('focused');

        });
    })
}