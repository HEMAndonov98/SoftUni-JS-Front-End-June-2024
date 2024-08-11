function toggle() {
    const buttonElement = document.getElementsByClassName('button')[0];
    const hiddenElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        hiddenElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        hiddenElement.style.display = 'none';
    }
}