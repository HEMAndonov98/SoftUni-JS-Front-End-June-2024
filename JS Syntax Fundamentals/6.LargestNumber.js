function LargestNumber(number1, number2, number3) {
    console.log(`The largest number is ${Math.max(number1, number2, number3)}.`);
}

// Tests

let test1Num1 = 5;
let test1Num2 = -3;
let test1Num3 = 16;

LargestNumber(test1Num1, test1Num2, test1Num3);

let test2Num1 = -3;
let test2Num2 = -5;
let test2Num3 = -22.5;

LargestNumber(test2Num1, test2Num2, test2Num3)