function solve(songsArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songsCount = songsArr[0];
    const listToPrint = songsArr[songsArr.length - 1];
    const songs = [];

    for (let i = 1; i <= songsCount; i++) {
        const [typeList, name, time] = songsArr[i].split('_');
        const newSong = new Song(typeList, name, time);

        if (typeList === listToPrint || listToPrint === 'all') {
            songs.push(newSong);
        };
    };

    for (const song of songs) {
        console.log(song.name);
    };
}

// Tests
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);