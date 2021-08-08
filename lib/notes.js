const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray) {
    console.log(body);
    // our function's main code will go here!
    const note = body;
    if (!Array.isArray(notesArray))
        notesArray = [];
    
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ db: notesArray }, null, 2)
    );
  
    return note;
  
    // return finished code to post route for response
    // return body;
}

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

function filterByQuery(query, notesArray) {
    let personalityTraitsArray = [];
    // Note that we save the animalsArray as filteredResults here:
    let filteredResults = notesArray;
    if (query.personalityTraits) {
      // Save personalityTraits as a dedicated array.
      // If personalityTraits is a string, place it into a new array and save.
      if (typeof query.personalityTraits === 'string') {
        personalityTraitsArray = [query.personalityTraits];
      } else {
        personalityTraitsArray = query.personalityTraits;
      }
      console.log(personalityTraitsArray);
      // Loop through each trait in the personalityTraits array:
      personalityTraitsArray.forEach(trait => {
        // Check the trait against each animal in the filteredResults array.
        // Remember, it is initially a copy of the animalsArray,
        // but here we're updating it for each trait in the .forEach() loop.
        // For each trait being targeted by the filter, the filteredResults
        // array will then contain only the entries that contain the trait,
        // so at the end we'll have an array of animals that have every one 
        // of the traits when the .forEach() loop is finished.
        filteredResults = filteredResults.filter(
          animal => animal.personalityTraits.indexOf(trait) !== -1
        );
      });
    }
    // if (query.diet) {
    //   filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    // }
    // if (query.species) {
    //   filteredResults = filteredResults.filter(animal => animal.species === query.species);
    // }
    // if (query.name) {
    //   filteredResults = filteredResults.filter(animal => animal.name === query.name);
    // }
    // return the filtered results:
    return filteredResults;
}

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}
  

module.exports = {
    filterByQuery,
    createNewNote,
    deletefun,
    findById
};