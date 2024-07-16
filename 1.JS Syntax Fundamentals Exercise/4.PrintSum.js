function PrintSum(start, end) {

    let sum = 0;
    let numbersString = '';

    for (let i = start; i <= end; i++) {
        numbersString += `${i} `;
        sum += i;
    }

    console.log(numbersString.trimEnd());
    console.log(`Sum: ${sum}`);
}