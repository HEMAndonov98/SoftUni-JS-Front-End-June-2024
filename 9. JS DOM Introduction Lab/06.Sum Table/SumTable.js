function sumTable() {
    const prices = document.querySelectorAll('tr>td:last-child:not(#sum)');
    const sumElement = document.querySelector('#sum')
    sumElement.textContent = Array.from(prices,
        (element) => Number(element.textContent))
        .reduce(
            (acc, curr) => curr + acc,
            0
        );
}