function repeatString(text, repeatCount) {
    let result = '';

    for (let i = 0; i < repeatCount; i++) {
        result = result.concat(text);
    }

    return result;
}

// Tests
console.log(repeatString('abc', 3));
console.log(repeatString('String', 2));