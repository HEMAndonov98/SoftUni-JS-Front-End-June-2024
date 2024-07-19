function reveal(revealWordString, input) {

    const revealWordsArr = revealWordString.split(', ');
    let revealedResult = input;

    for (let word of revealWordsArr) {
        revealedResult = revealedResult.replace('*'.repeat(word.length), word);
    }
    console.log(revealedResult);
}

// Tests

reveal('great', 'softuni is ***** place for learning new programming languages');
reveal('great, learning', 'softuni is ***** place for ******** new programming languages');