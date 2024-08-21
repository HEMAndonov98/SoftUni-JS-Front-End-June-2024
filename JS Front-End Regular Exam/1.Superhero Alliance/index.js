function fightEvil(input) {
    const heroesCount = Number(input.shift());
    const heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        const [heroName, powersInput, energyInput] = input.shift().split('-');

        const powers = powersInput.split(',');
        const energy = Number(energyInput);

        heroes[heroName] = {
            powers: powers,
            energy: energy,
        }
    }

    const commands = {
        usePower(name, power, engReq) {
            const hero = heroes[name];
            engReq = Number(engReq);
            if (hero.powers.includes(power) && hero.energy >= engReq) {
                hero.energy -= engReq;
                console.log(`${name} has used ${power} and now has ${hero.energy} energy!`);
            } else {
                console.log(`${name} is unable to use ${power} or lacks energy!`);
            }
        },
        train(name, engGain) {
            const hero = heroes[name];
            engGain = Number(engGain);
            if (hero.energy < 100) {
                hero.energy = hero.energy + engGain > 100 ? 100 : hero.energy + engGain;
                console.log(`${name} has trained and gained ${engGain} energy!`);
            } else {
                console.log(`${name} is already at full energy!`);
            }
        },
        learn(name, power) {
            const hero = heroes[name];
            if (hero.powers.includes(power)) {
                console.log(`${name} already knows ${power}.`);
            } else {
                hero.powers.push(power);
                console.log(`${name} has learned ${power}!`);
            }
        },
    };

    let command = input.shift();
    while (command !== 'Evil Defeated!') {
        const [heroAction, heroName, ...args] = command.split(' * ');

        switch (heroAction) {
            case 'Use Power':
                commands.usePower(heroName, ...args);
                break;
            case 'Train':
                commands.train(heroName, ...args);
                break;
            case 'Learn':
                commands.learn(heroName, ...args);
                break;

            default:
                break;
        }
        command = input.shift();
    }

    for (const [key, value] of Object.entries(heroes)) {
        console.log(`Superhero: ${key}`);
        console.log(`- Superpowers: ${value['powers'].join(', ')}`);
        console.log(`- Energy: ${value['energy']}`);
    }
}

fightEvil(([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
]));