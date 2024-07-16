function Censore(input, wordToCensore) {
    const wordCensored = '*'.repeat(wordToCensore.length);
    const result = input.replaceAll(wordToCensore, wordCensored);
    console.log(result);
}

// Tests

Censore('A small sentence with some words', 'small');