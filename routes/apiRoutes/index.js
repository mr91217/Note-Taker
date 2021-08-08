const router = require('express').Router();
// const { route } = require('../apiRoutes/animalRoutes');
const noteRoutes = require('../apiRoutes/noteRoutes');




router.use(noteRoutes);



module.exports = router;