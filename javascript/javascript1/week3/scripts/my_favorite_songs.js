//Add song to database
const songDatabase = [];
function addSongToDatabase(song) {
    songDatabase.push(song);
}

addSongToDatabase({songId: 1, title: 'My baby', artist: 'Soggy socks',});
addSongToDatabase({songId: 2, title: '3 nails in wood', artist: 'The carpenters',});
addSongToDatabase({songId: 3, title: 'Blacker than black', artist: 'Instant coffee',});
addSongToDatabase({songId: 4, title: 'When is enough too little?', artist: 'The spies girls',});
addSongToDatabase({songId: 5, title: '3 nails in wood', artist: 'The carpenters',});
console.log(songDatabase);


//Searching for a song
function getSongByTitle(title) {
    const songArray = [];
    for ( let i = 0; i < songDatabase.length; i++) {
        if (songDatabase[i].title === title) {
            songArray.push(songDatabase[i]);
        }
    } 
    return songArray; 
}
const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong); 
const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong2);
const searchedSong3 = getSongByTitle('When enough to little?');
console.log(searchedSong3);


//Create our own playlist
const myPlaylist = [];
const anotherPlaylist = [];
function addSong(songObject, playList) {
    playList.push(...songObject); //In-place modification
}

function addSongToMyPlaylist(title, playList) {
    let songObject = getSongByTitle(title);
    addSong(songObject, playList);
}

addSongToMyPlaylist('My baby', myPlaylist);
addSongToMyPlaylist('3 nails in wood', anotherPlaylist);
addSongToMyPlaylist('When is enough too little?', anotherPlaylist);

console.log(myPlaylist);
console.log(anotherPlaylist);