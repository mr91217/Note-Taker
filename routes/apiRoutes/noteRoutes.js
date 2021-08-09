const router = require('express').Router();
const { createNewNote, deletefun, findById } = require('../../lib/notes');
const { db } = require('../../db/db');


router.get('/notes', (req, res) => {
    
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

//==================== Reference ==================//
router.delete('/notes/:id', (req, res) => {
    deletefun(req.params.id, db);
    res.json(true);
});
//==================== Reference ==================//


router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();

    const note = createNewNote(req.body, db);
    res.json(note);
});
  



module.exports  = router;
