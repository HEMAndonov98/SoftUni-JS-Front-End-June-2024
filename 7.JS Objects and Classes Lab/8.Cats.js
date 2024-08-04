function solve(catsArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        Meow() { console.log(`${this.name}, age ${this.age} says Meow`) }
    }

    for (const cat of catsArr) {
        const [name, age] = cat.split(' ');
        const newCat = new Cat(name, age);
        newCat.Meow();
    }
}

// Tests

solve(['Mellow 2', 'Tom 5']);