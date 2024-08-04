function scheduler(meetings) {

    const schedule = {};

    for (const meeting of meetings) {
        const [date, name] = meeting.split(' ');

        if (!(date in schedule)) {
            schedule[`${date}`] = name;
            console.log(`Scheduled for ${date}`);
            continue;
        }
        console.log(`Conflict on ${date}!`);

    };

    for (const [date, name] of Object.entries(schedule)) {
        console.log(`${date} -> ${name}`);

    }
}

// Tests
scheduler(
    ['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'
    ]
);