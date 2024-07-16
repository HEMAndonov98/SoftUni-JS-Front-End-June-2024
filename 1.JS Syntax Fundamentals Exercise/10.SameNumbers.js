function SameNumbers(input) {
    let sum = 0;
    let isSameNumber = true;
    let currentNumber = input;
    let previousDigit = currentNumber % 10;

    while (currentNumber > 0) {
        let currentDigit = currentNumber % 10;
        sum += currentDigit;

        if (currentDigit != previousDigit) {
            isSameNumber = false;
        }

        currentNumber /= 10;
        currentNumber = Math.floor(currentNumber);
    }

    console.log(isSameNumber);
    console.log(sum);
}

// Tests 

SameNumbers(2222222);
SameNumbers(1234);