function CalculatePromotion(day, age) {

    let juniorPrice = 0;
    let adultPrice = 0;
    let elderlyPrice = 0;

    switch (day) {
        case 'Weekday':
            juniorPrice = 12;
            adultPrice = 18;
            elderlyPrice = 12;
            break;
        case 'Weekend':
            juniorPrice = 15;
            adultPrice = 20;
            elderlyPrice = 15;
            break;
        case 'Holiday':
            juniorPrice = 5;
            adultPrice = 12;
            elderlyPrice = 10;
            break;
    }

    let result = 0;

    if (age <= 122 && age > 64) {
        result = elderlyPrice + '$';
    } else if (age <= 64 && age > 18) {
        result = adultPrice + '$';
    } else if (age <= 18 && age >= 0) {
        result = juniorPrice + '$';
    } else {
        result = 'Error!'
    }

    console.log(result);
}

// Test

let test1Day = 'Weekday';
let test1Age = 42;

CalculatePromotion(test1Day, test1Age);

let test2Day = 'Holiday';
let test2Age = -12;

CalculatePromotion(test2Day, test2Age);

let test3Day = 'Holiday';
let test3Age = 15;

CalculatePromotion(test3Day, test3Age);

