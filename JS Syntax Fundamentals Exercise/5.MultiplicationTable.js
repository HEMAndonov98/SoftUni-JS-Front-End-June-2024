function MultiplicationTable(num) {
    for (let times = 1; times <= 10; times++) {
        let product = times * num;
        console.log(`${num} X ${times} = ${product}`);
    }
}