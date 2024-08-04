function registerAddresses(adresses) {
    const addressBook = {};

    for (const adress of adresses) {
        const [name, personAdress] = adress.split(':');
        addressBook[`${name}`] = personAdress;
    };

    const sorted = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach((entry) => console.log(`${entry[0]} -> ${entry[1]}`)
    );
}

// Test

registerAddresses(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);