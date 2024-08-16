function addItem() {
    const inputField = document.getElementById('newItemText');
    const listElement = document.getElementById('items');

    const createListItem = (input) => {
        const newListItem = document.createElement('li');
        newListItem.textContent = input;
        return newListItem;
    }

    listElement.append(createListItem(inputField.value));
    inputField.value = '';
}