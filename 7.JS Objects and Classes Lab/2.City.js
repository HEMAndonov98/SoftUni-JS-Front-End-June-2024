function printCityInfo(city) {
    for (const [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`);

    }
}

// Tests
printCityInfo(
    {
        name: 'Sofia',
        area: 492,
        population: 1238438,
        country: 'Bulgaria',
        postCode: 1000,
    }
);