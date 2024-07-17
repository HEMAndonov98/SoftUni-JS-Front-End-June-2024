function printNth(array, step) {
    let result = [];
    for (let i = 0; i < array.length; i += step) {
        const element = array[i];
        result.push(element);
    }
    return result
}

// Tests

console.log(printNth(['5', '20', '31', '4', '20'], 2));
console.log(printNth(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printNth(['1', '2', '3', '4', '5'], 6));