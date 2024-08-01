function validatePassword(password) {
    const checkPasswordLength = (password) => password.length >= 6 && password.length <= 10 ? true : false;
    const checkIsLettersAndDigitsOnly = (password) => password.match(isOnlyLettersAndDigitsPattern) !== null ? true : false
    const checkHasAtleastTwoDigits = (password) => password.match(hasTwoDigitsMinPattern) !== null ? true : false

    const invalidLengthErrorMessage = 'Password must be between 6 and 10 characters';
    const invalidContentErrorMessage = 'Password must consist only of letters and digits';
    const invalidDigitCountErrorMessage = 'Password must have at least 2 digits';

    const errorMessages = [];
    const isOnlyLettersAndDigitsPattern = /^[0-9a-zA-Z]*$/gm;
    const hasTwoDigitsMinPattern = /[0-9]{2,}/gm;

    if (!checkPasswordLength(password)) {
        errorMessages.push(invalidLengthErrorMessage);
    }

    if (!checkIsLettersAndDigitsOnly(password)) {
        errorMessages.push(invalidContentErrorMessage);
    }

    if (!checkHasAtleastTwoDigits(password)) {
        errorMessages.push(invalidDigitCountErrorMessage);
    }

    if (errorMessages.length > 0) {
        console.log(errorMessages.join('\n'));
    } else {
        console.log('Password is valid');
    }
}

// Tests
validatePassword('logIn');
console.log('\n Test 2 \n');
validatePassword('MyPass123');
console.log('\n Test 3 \n');
validatePassword('Pa$s$s');
