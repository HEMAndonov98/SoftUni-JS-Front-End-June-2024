function separateWords(text) {
    const pattern = /[A-Z][a-z]*/g;
    console.log(text.match(pattern).join(', '));
}

// Tests
separateWords('SplitMeIfYouCanHaHaYouCantOrYouCan');
separateWords('HoldTheDoor');
separateWords('ThisIsSoAnnoyingToDo');