function countOccurances(text, wordToSearch) {
    const regex = new RegExp(`\\b${wordToSearch}\\b`, 'g')
    const found = text.match(regex) || [];
    console.log(found.length);
}

// Tests

countOccurances('This is a word and it also is a sentence', 'is');
countOccurances('softuni is great place for learning newprogramming languages', 'softuni');

