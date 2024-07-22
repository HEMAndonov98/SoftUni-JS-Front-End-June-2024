function formatGrade(grade = Number) {

    // Check if parameter is valid
    const floatGrade = Number.parseFloat(grade);

    if (isNaN(floatGrade)) {
        console.log('Invalid Arguments Passed !!!');
        return
    };

    let result = ` (${floatGrade.toFixed(2)})`;
    let gradeWord = ''

    // Format Grade
    if (grade < 3) {
        gradeWord = 'Fail';
        result = ' (2)'
    } else if (grade < 3.50) {
        gradeWord = 'Poor';
    } else if (grade < 4.50) {
        gradeWord = 'Good';
    } else if (grade < 5.50) {
        gradeWord = 'Very good';
    } else {
        gradeWord = 'Excellent';
    };

    console.log(gradeWord.concat(result));
}

// Testing parse Float
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);