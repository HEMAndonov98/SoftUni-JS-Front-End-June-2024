function converToJSON(firstName, lastName, hairColor) {
    const obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    };

    const json = JSON.stringify(obj);
    console.log(json);

}

// Tests

converToJSON('George', 'Jones', 'Brown');
converToJSON('Peter', 'Smith', 'Blond');