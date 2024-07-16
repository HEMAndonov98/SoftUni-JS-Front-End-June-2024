function EvenAddSubtraction(input = []) {
    const evenArray = input.filter((number) => number % 2 === 0);
    const oddArray = input.filter((number) => number % 2 !== 0);

    let evenSum = 0;
    let oddSum = 0;

    evenArray.forEach((number) => evenSum += number);
    oddArray.forEach((number) => oddSum += number);

    console.log((evenSum - oddSum));
}

// Tests

EvenAddSubtraction([1, 2, 3, 4, 5, 6]);
EvenAddSubtraction([3, 5, 7, 9]);
EvenAddSubtraction([2, 4, 6, 8, 10]);