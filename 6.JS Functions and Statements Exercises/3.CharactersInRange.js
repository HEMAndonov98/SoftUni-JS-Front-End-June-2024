function getCharactersInRange(firstChar, secondChar) {
    const getASCIICode = (char) => char.charCodeAt(0);
    const getCharFromASCIICode = (charCode) => String.fromCharCode(charCode);

    const firstCharCode = getASCIICode(firstChar);
    const secondCharCode = getASCIICode(secondChar);



    const indecies = firstCharCode > secondCharCode ? { 'start': secondCharCode, 'end': firstCharCode } : { 'start': firstCharCode, 'end': secondCharCode };
    const charactersArray = [];

    for (let ASCIICode = indecies['start'] + 1; ASCIICode < indecies['end']; ASCIICode++) {
        charactersArray.push(getCharFromASCIICode(ASCIICode));
    }

    console.log(charactersArray.join(' '));
}

// Tests
getCharactersInRange('a', 'd');
getCharactersInRange('#', ':');
getCharactersInRange('C', '#');