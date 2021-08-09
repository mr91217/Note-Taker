const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray) {
    console.log(body);
    // our function's main code will go here!
    const note = body;
    

    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ db: notesArray }, null, 2)
    );
  
    return note;
  
    // return finished code to post route for response
    // return body;
}

//==================== Reference ==================//
function deletefun(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({ db: notesArray }, null, 2)
            );

            break;
        }
    }
}
//==================== Reference ==================//




function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}
  

module.exports = {
    createNewNote,
    deletefun,
    findById
};