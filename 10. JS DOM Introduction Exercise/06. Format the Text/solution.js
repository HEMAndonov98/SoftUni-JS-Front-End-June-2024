function solve() {
  const inputText = document.getElementById('input').value;
  const outputNode = document.getElementById('output');

  if (inputText === '') { return; }

  const sentances = inputText.split('.').map(sentance => sentance.trim());
  const paraCount = Math.ceil(sentances.length / 3);

  for (let i = 0; i < paraCount; i++) {
    const para = document.createElement('p');
    let paraText = '';

    for (let j = 0; j < 3; j++) {
      if (sentances.length > 0) {
        const sentance = sentances.shift().trim();
        if (sentance.length > 0) {
          paraText = paraText.concat(' ', `${sentance}.`);
        }
      }

    }
    para.textContent = paraText.trim();
    outputNode.appendChild(para);
  }
}