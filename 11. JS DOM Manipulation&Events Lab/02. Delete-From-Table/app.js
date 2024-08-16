function deleteByEmail() {
    const tBodyEl = document.querySelector('table>tbody');
    const inputField = document.querySelector('input');

    let isDeleted = false;
    [...tBodyEl.children].map((trEl) => {
        const emailCell = trEl.children[1];
        if (inputField.value === emailCell.textContent) {
            tBodyEl.removeChild(trEl);
            isDeleted = true;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = isDeleted ? 'Deleted.' : 'Not found.';
    inputField.value = '';
}