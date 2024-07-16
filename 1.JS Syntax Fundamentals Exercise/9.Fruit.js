function Fruit(fruitType, gramWeight, kiloPrice) {
    let kiloWeight = gramWeight / 1000;
    let money = kiloWeight * kiloPrice;

    console.log(`I need $${money.toFixed(2)} to buy ${kiloWeight.toFixed(2)} kilograms ${fruitType}.`);
}

// Tests

Fruit('orange', 2500, 1.80);
Fruit('apple', 1563, 2.35);