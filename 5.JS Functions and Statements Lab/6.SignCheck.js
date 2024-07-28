function checkSign(...numbers) {
    let isPositiveResult = true;
    for (const number of numbers) {
        isPositiveResult = number < 0 ? !isPositiveResult : isPositiveResult;
    }

    console.log(`${isPositiveResult ? 'Positive' : 'Negative'}`);
}

// Tests

checkSign(5, 12, -15);
checkSign(-6, -12, 14);
checkSign(-1, -2, -3);
checkSign(-5, 1, 1);