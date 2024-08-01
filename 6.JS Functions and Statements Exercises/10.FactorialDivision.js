function devideFactorials(numOne, numTwo) {
    const getFactorial = (x) => {
        if (x === 0) {
            return 1;
        } else {
            return x * getFactorial(x - 1);
        }
    };

    const numOneFactorial = getFactorial(numOne);
    const numTwoFactorial = getFactorial(numTwo);

    console.log((numOneFactorial / numTwoFactorial).toFixed(2));
}

// Tests
devideFactorials(5, 2);
devideFactorials(6, 2);