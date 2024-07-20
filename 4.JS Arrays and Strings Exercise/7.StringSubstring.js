function findSubstring(substring, text) {
    const textArr = text.split(' ');
    const found = textArr.some((word) => word.toLowerCase() === substring);

    if (found) {
        console.log(substring);
    } else {
        console.log(`${substring} not found!`)
    }
}

// Tests
findSubstring('javascript', 'JavaScript is the best programming language');
findSubstring('python', 'JavaScript is the best programming language');