const controllers = require('./controllers.js');
const router = require('express').Router();

router.get('/null', controllers.main.get);

router.get('/comments/:id', controllers.comments.get);

router.post('/comments', controllers.comments.post);

router.delete('/comments/:id', controllers.comments.delete);

router.put('/comments/:id', controllers.comments.put);

router.get('/artists', controllers.artist.get);

router.get('/songs/:id', controllers.song.get);

module.exports = router;