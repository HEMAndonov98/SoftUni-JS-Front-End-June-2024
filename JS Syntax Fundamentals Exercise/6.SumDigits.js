function SumDigits(number) {
    let stringNumber = number.toString();
    let sum = 0;
    for (let i = 0; i < stringNumber.length; i++) {
        sum += Number(stringNumber[i]);
    }
    console.log(sum)
}

// Tests
SumDigits(245678);
SumDigits(97561);
SumDigits(543);