function createLoadingBar(loadingNum) {

    const loadingBarStart = '[..........]';
    const loadedSymbol = '%';
    const loadingNumReduced = loadingNum / 10;

    const currentloadingBar = loadingBarStart.replace
        (`.`.repeat(loadingNumReduced),
            loadedSymbol.repeat(loadingNumReduced)
        );

    if (loadingNum < 100) {
        console.log(`${loadingNum}% ${currentloadingBar}`);
        console.log('Still loading...');
    } else {
        console.log(`${loadingNum}% Complete!`);
        console.log(currentloadingBar);
    }
}

createLoadingBar(100);