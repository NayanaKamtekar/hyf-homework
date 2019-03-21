//Save a note
var notes = [];
function addNote(content , id) {
    notes.push({content: content, id: id});
}
addNote("this is my first note", 1);
addNote("this is my second note", 2);
addNote("this is my third note", 3);
console.log(notes);


//Get a note
function getNoteFromId(id) {
    for (let i = 0; i < notes.length; i++) {
        if (typeof id !== "number") {
            console.log("Not a valid id");
        }
        else if(id === notes[i].id) {
            console.log(notes[i]);
        }
    }
    return null;
}

getNoteFromId(2);
getNoteFromId("1");
getNoteFromId();
getNoteFromId(5);


//Get all notes
function getNotes() {
    return notes;
}
getNotes();


//Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        let formatedNotes = 'The note with id:' + notes[i].id + ', has the following note text: "' + notes[i].content + '".'
        console.log (formatedNotes);
    }
}
logOutNotesFormatted();





