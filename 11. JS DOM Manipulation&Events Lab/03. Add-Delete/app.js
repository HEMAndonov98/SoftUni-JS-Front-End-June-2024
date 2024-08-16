function addItem() {
    const inputField = document.getElementById('newItemText');
    const listElement = document.getElementById('items');

    const createListItem = (input) => {
        const newListItem = document.createElement('li');
        newListItem.textContent = input;

        const deleteLink = document.createElement('a');
        deleteLink.textContent = '[Delete]';
        deleteLink.setAttribute('href', '#');

        newListItem.appendChild(deleteLink)
        deleteLink.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();
        })

        return newListItem;
    }

    listElement.append(createListItem(inputField.value));
    inputField.value = '';
}