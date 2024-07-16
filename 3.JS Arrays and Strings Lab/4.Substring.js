function substring(string, startIndex, count) {
    const endIndex = startIndex + count;
    console.log(string.substring(startIndex, endIndex));
}


// Test

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);