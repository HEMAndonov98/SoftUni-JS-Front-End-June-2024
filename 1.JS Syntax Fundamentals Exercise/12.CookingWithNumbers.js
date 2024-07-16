function Cook(numberString, ...operations) {

    let number = Number(numberString);

    for (const operation of operations) {
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                number = number.toFixed(1);
                break;

            default:
                console.log('Invalid Arguments Passed!!!')
                return;
        }

        console.log(number);
    }
}

// Tests

Cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('\nsecond tests: \n')
// Expected:

// 16
// 8
// 4
// 2
// 1


Cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); 