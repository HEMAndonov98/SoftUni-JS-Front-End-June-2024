function printPhoneBook(inputPhones) {

    const phoneBook = [];
    for (const entry of inputPhones) {
        const [name, phoneNumber] = entry.split(' ')
        phoneBook[`${name}`] = phoneNumber;
    };

    for (const [name, phone] of Object.entries(phoneBook)) {
        console.log(`${name} -> ${phone}`);
    };
}

printPhoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);