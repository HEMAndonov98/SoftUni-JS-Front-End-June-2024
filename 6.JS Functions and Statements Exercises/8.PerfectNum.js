function perfectNumber(n) {

    let dividors = [1];

    // n(log n) 
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            // Add divisor number
            dividors.push(i);
            if (i !== n / i && i !== 1) {
                // Add divided num without firs iteration because every number is divisible by 1 and itself
                dividors.push(n / i);
            }
        }
    }

    const devisorsSum = dividors.reduce((acc, curr) =>
        curr + acc,
        0,
    );


    if (n === devisorsSum) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

// Tests

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);