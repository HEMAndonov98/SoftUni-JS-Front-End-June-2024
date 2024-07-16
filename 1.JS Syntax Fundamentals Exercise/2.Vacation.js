function Vacation(groupNum, groupType, day) {

    let groupTypeLower = groupType.toLowerCase();

    let isStudents = groupTypeLower === 'students';
    let isBusiness = groupTypeLower === 'business';
    let isRegular = groupTypeLower === 'regular';

    let dayToLower = day.toLowerCase();

    let isFriday = dayToLower === 'friday';
    let isStaturday = dayToLower === 'saturday';
    let isSunday = dayToLower === 'sunday';

    let result = -1;
    let price = -1;
    let hasDiscount = false;

    switch (true) {
        case isStudents:
            hasDiscount = groupNum >= 30;

            if (isFriday) {
                price = 8.45;
            } else if (isStaturday) {
                price = 9.80;
            } else if (isSunday) {
                price = 10.46;
            }

            result = price * groupNum;

            if (hasDiscount) { result -= (result * 0.15); }
            break;
        case isBusiness:
            hasDiscount = groupNum >= 100;

            if (isFriday) {
                price = 10.90;
            } else if (isStaturday) {
                price = 15.60;
            } else if (isSunday) {
                price = 16;
            }

            if (hasDiscount) { groupNum -= 10; }

            result = price * groupNum;

            break;
        case isRegular:
            hasDiscount = (groupNum >= 10 && groupNum <= 20);

            if (isFriday) {
                price = 15;
            } else if (isStaturday) {
                price = 20;
            } else if (isSunday) {
                price = 22.5;
            }

            result = price * groupNum;
            if (hasDiscount) { result -= (result * 0.05); }
            break;

        default:
            console.log('Invalid Arguments passed to function!')
            return
    }

    console.log(`Total price: ${result.toFixed(2)}`)
}


// Tests

let testNum = 30;
let testType = 'Students';
let testday = 'Sunday';

Vacation(testNum, testType, testday);

testNum = 40;
testType = 'Regular';
testday = 'Saturday';

Vacation(testNum, testType, testday);
