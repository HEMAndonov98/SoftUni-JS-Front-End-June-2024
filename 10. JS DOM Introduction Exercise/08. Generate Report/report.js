function generateReport() {
    const tHeadElements = [...document.querySelectorAll('table>thead>tr th')];
    const tRowsElements = [...document.querySelectorAll('table>tbody>tr')];

    const getAttributeName = (tHeadEl) => tHeadEl.getElementsByTagName('input')[0].attributes.getNamedItem('name').value;
    const isChecked = (tHeadEl) => tHeadEl.getElementsByTagName('input')[0].checked ? true : false;
    const createMapOfColsToTake = (tHeadElements) => {
        const tHeadFiltered = tHeadElements.filter((el) => isChecked(el))
            .map((el) => {
                const attName = getAttributeName(el);
                trTakeIndexes[`${attName}`] = tHeadElements.indexOf(el);
            });
    };

    function extractCheckedCells() {
        for (const element of tRowsElements) {
            const tdArray = [...element.getElementsByTagName('td')];
            const resultObj = {};


            Object.entries(trTakeIndexes).map(([key, value]) => {
                resultObj[key] = tdArray[value].textContent;
            })

            resultArray.push(resultObj);
        }
    };

    const resultArray = [];
    const trTakeIndexes = {};

    createMapOfColsToTake(tHeadElements);
    extractCheckedCells();


    // Format the JSON
    const resultJSON = JSON.stringify(resultArray, null, 1);

    const outputEl = document.getElementById('output');
    outputEl.value = resultJSON;
}