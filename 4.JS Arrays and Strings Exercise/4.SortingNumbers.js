function sortNumbers(array) {
    const result = [];
    const sortedArray = array.toSorted((a, b) => a - b);

    while (sortedArray.length > 0) {
        result.push(sortedArray.shift());

        if (sortedArray) {
            result.push(sortedArray.pop());
        }
    }

    return result;
}

// Tests

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));