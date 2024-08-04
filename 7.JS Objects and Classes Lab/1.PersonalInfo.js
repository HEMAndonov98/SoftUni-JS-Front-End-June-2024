function createPerson(firstName, lastName, age) {
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };

    return person;
}

console.log(createPerson('Peter', 'Pan', 20));
