function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');
  const textArray = text.split(' ').map(x => x.toLowerCase());
  const resultArr = [];


  if (namingConvention === 'Camel Case') {

    resultArr.push(textArray[0]);

    for (let i = 1; i < textArray.length; i++) {
      let element = textArray[i];
      element = element.replace(element[0], element[0].toUpperCase());

      resultArr.push(element);
    }
    resultElement.textContent = resultArr.join('');
  } else if (namingConvention === 'Pascal Case') {

    for (let i = 0; i < textArray.length; i++) {
      let element = textArray[i];
      element = element.replace(element[0], element[0].toUpperCase());

      resultArr.push(element);
    }
    resultElement.textContent = resultArr.join('');
  } else {
    resultElement.textContent = 'Error!';
    return;
  }

}