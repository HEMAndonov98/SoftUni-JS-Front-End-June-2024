function sumNumbers(number) {

    const getDecimal = (decimal) => decimal % 1 !== 0 ? Number(decimal.toString().split('.')[1]) : 0;
    const sumArray = (array) => array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );

    const evensAndOddsMap = { 'evens': [], 'odds': [] };
    do {
        number /= 10;
        const digit = getDecimal(number);

        digit % 2 === 0 ? evensAndOddsMap['evens'].push(digit) : evensAndOddsMap['odds'].push(digit);

        number = Math.floor(number);
    } while (number > 0);

    console.log(`Odd sum = ${sumArray(evensAndOddsMap['odds'])}, Even sum = ${sumArray(evensAndOddsMap['evens'])}`);
}

// Tests
sumNumbers(1000435);