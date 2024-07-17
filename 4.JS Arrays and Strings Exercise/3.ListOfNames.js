function listNames(array) {
    const sortedArr = array.toSorted();

    for (let i = 0; i < sortedArr.length; i++) {
        const name = sortedArr[i];
        sortedArr[i] = `${i + 1}.${name}`;
    }

    console.log(sortedArr.join('\n'));
}

// Tests
listNames(["John", "Bob", "Christina", "Ema"]);