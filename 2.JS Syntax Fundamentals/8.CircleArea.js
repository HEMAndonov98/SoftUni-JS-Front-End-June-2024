function FindArea(radius) {
    if (typeof (radius) != 'number') {
        return console.log(`We can not calculate the circle area, because we receive a ${typeof (radius)}.`)
    }

    let pieNumber = Math.PI;

    let result = pieNumber * (radius ** 2);

    console.log(result.toFixed(2));
}

// Tests

FindArea(5);
FindArea('name');