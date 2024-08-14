function generateReport() {
    const tHeadElements = [...document.querySelectorAll('table>thead>tr th')];
    const tRowsElements = [...document.querySelectorAll('table>tbody>tr')];

    const getAttributeName = (tHeadEl) => tHeadEl.getElementsByTagName('input')[0].attributes.getNamedItem('name').value;
    const isChecked = (tHeadEl) => tHeadEl.getElementsByTagName('input')[0].checked;
    const createMapOfColsToTake = (tHeadElements) => {
        tHeadElements.filter((el) => isChecked(el))
            .map((el) => {
                const attName = getAttributeName(el);
                trTakeIndexes[`${attName}`] = tHeadElements.indexOf(el);
            });
    };

    const resultObj = {};
    const resultArray = [];
    const trTakeIndexes = {};

    createMapOfColsToTake(tHeadElements);

    // iterate over every table row in the table body tRowsElements and take the textContent of the 
    // tds from the trTakeIndexes map and construct an object resultObj which we will then
    // add to resultArray before parsing it into JSON and adding to the result box

    // example for later
    for (const element of tRowsElements) {
        const tdArray = [...element.getElementsByTagName('td')];

        const vals = Object.values(trTakeIndexes);
        for (const trTake of vals) {
            console.log(tdArray[trTake].textContent);

        }

    }
}