function editElement(element, stringMatch, replaceText) {
    element.textContent = element.textContent.replaceAll(stringMatch, replaceText);
}