const router = require('express').Router();
const { filterByQuery, createNewNote, deletefun, findById } = require('../../lib/notes');
const { db } = require('../../db/db');


router.get('/notes', (req, res) => {
    // let results = db;
    // if (req.query) {
    //   results = filterByQuery(req.query, results);
    // }
    // res.json(results);
    res.json(db);
});

// router.get('/notes/:id', (req, res) => {
//     const result = findById(req.params.id, db);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });

router.delete('/notes/:id', (req, res) => {
    deletefun(req.params.id, db);
    res.json(true);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, db);
    res.json(note);
});




module.exports  = router;
