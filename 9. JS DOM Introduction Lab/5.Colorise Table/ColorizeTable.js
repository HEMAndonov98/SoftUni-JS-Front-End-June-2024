function colorize() {
    const tdEvenElements = document.querySelectorAll('tr:nth-child(even)');
    Array.from(tdEvenElements, (element) => element.style.backgroundColor = 'teal')
}