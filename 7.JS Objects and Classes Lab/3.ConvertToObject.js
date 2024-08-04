function converToObject(json) {
    const object = JSON.parse(json);

    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
    }
}

// Tests

converToObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log('\n Test2:\n');

converToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');