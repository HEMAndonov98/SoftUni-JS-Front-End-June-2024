function PrintNumbers(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

// Tests
console.log('Test 1:')
PrintNumbers(6, 2);
console.log('\nTest 2:')
PrintNumbers(4, 1);