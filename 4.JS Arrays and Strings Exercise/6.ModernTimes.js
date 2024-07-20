function solve(text) {
    const pattern = /#[a-zA-Z]+/gm;
    const found = text.match(pattern);

    for (const match of found) {
        console.log(match.replace('#', ''));
    }
}

// Test

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('\nseccond Test" \n')
solve('The symbol # is known #variously in English - speaking #regions as the #number sign');