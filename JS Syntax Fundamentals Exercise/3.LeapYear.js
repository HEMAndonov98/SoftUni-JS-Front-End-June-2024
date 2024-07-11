function LeapYear(year) {
    let isLeap = false;
    isLeap = (year % 4 === 0 && year % 100 != 0) || year % 400 === 0 ? true : false;

    console.log(isLeap ? 'yes' : 'no');
}