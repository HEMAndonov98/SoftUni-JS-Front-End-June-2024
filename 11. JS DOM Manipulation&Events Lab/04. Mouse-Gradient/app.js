function attachGradientEvents() {
    const divEl = document.getElementById('gradient');
    const resultDiv = document.getElementById('result');

    divEl.addEventListener('mousemove', (e) => {
        const targetWidth = e.currentTarget.clientWidth;
        const currentMouseLocation = e.offsetX;

        const percentageCalculation = Math.floor((currentMouseLocation / targetWidth) * 100);
        resultDiv.textContent = `${percentageCalculation}%`

    })
}