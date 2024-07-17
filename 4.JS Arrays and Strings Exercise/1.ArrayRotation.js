function rotate(array, number) {
    for (let i = 0; i < number; i++) {
        array.push(array.shift());
    }

    console.log(array.join(' '));
}

// Tests

rotate([51, 47, 32, 61, 21], 2);
rotate([32, 21, 61, 1], 4);
rotate([2, 4, 15, 31], 5);