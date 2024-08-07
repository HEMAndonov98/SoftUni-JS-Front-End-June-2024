function calc() {
    const inputElements = document.querySelectorAll('#num1, #num2');
    console.log(inputElements);

    const valuesArray = Array.from(inputElements).map(element => Number(element.value));

    const result = valuesArray.reduce((acc, curr) => acc + curr, 0);
    const resultElement = document.querySelector('#sum');
    resultElement.value = result;
}
