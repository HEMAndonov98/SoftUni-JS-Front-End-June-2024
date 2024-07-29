function checkPalindrome(arrayNumbers = []) {

    const isPalindrome = (numberAsString) => numberAsString === numberAsString.split('').reverse().join('');

    arrayNumbers.forEach(number => console.log(isPalindrome(number.toString())));
}
// Tests

checkPalindrome([123, 323, 421, 121]);
console.log('\n Second Results: \n');
checkPalindrome([32, 2, 232, 1010]);