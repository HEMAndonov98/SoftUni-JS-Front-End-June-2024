function extract(content) {
    const regex = /\(([\w\s]*)\)/gm;

    const contentText = document.querySelector(`#${content}`).textContent;
    const matches = contentText.matchAll(regex);


    const arr = Array.from(matches, (match) => match[1]);
    const result = arr.join('; ');

    return result;
}