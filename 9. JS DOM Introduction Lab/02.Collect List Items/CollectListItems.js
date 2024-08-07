function extractText() {
    const ulElement = document.querySelector('ul');
    const textarea = document.querySelector('#result');
    const textArray = Array.from(ulElement.childNodes).map(element => element.textContent);


    textarea.style.height = 'auto';
    textarea.style.height = (1.8 * textarea.scrollHeight) + 'px';

    textarea.value = textArray.join('');
}