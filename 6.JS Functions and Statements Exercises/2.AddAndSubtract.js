function calculate(numOne, numTwo, numThree) {
    const sum = (numOne, numTwo) => numOne + numTwo;
    const subtract = (sum, numThree) => sum - numThree;

    const result = subtract(sum(numOne, numTwo), numThree);
    console.log(result);
}

// Tests

calculate(23, 6, 10);
calculate(1, 17, 30);
calculate(42, 58, 100);