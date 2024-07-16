function ReverseArray(number, array = []) {
    const arrayPortionReversed = array.slice(0, number)
        .reverse()
        .join(' ');

    console.log(arrayPortionReversed);
}

// Tests

ReverseArray(3, [10, 20, 30, 40, 50]);
ReverseArray(4, [-1, 20, 99, 5]);
ReverseArray(2, [66, 43, 75, 89, 47]);