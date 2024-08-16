function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', (e) => {
        const inputValue = e.currentTarget.value;
        const pattern = /[a-z]+@[a-z]+.[a-z]+/;

        if (inputValue.match(pattern) === null) {
            e.currentTarget.classList.add('error');
        } else {
            e.currentTarget.classList.remove('error');
        }
    })
}