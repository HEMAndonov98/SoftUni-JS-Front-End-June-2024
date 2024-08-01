function constructMatrix(matrixNum) {
    const rows = matrixNum;
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const matrixRow = `${matrixNum} `.repeat(matrixNum).trim();
        matrix.push(matrixRow);
    }

    console.log(matrix.join('\n'));
}

// Tests
constructMatrix(7);