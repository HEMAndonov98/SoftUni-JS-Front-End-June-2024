function Calculate(number1, number2, operator) {
    switch (operator) {
        case '+':
            console.log(number1 + number2);
            break;
        case '-':
            console.log(number1 - number2);
            break;
        case '*':
            console.log(number1 * number2);
            break;
        case '/':
            console.log(number1 / number2);
            break;
        case '%':
            console.log(number1 % number2)
            break;
        case '**':
            console.log(number1 ** number2)
            break;

        default:
            console.log('Not a valid operator!')
            break;
    }
}

// Tests

let test1Opperand1 = 5;
let test1Opperand2 = 6;
let test1Operator = '+';

Calculate(test1Opperand1, test1Opperand2, test1Operator);

let test2Opperand1 = 3;
let test2Opperand2 = 5.5;
let test2Operator = '*';

Calculate(test2Opperand1, test2Opperand2, test2Operator);
