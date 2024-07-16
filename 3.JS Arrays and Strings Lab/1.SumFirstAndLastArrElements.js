function PrintSum(numberArr) {
    const arrayLength = numberArr.length;
    const sum = numberArr[0] + numberArr[arrayLength - 1];

    console.log(sum);
}

// Tests

PrintSum([20, 30, 40]);
PrintSum([10, 17, 22, 33]);
PrintSum([11, 58, 69]);