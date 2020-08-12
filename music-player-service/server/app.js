require('newrelic');
const express = require('express');
const app = express();
const port = 4000;

var cors = require('cors');
const path = require('path');
const Songs = require('../database/model.js');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));

app.get('/getsong/:id', (req, res) => {
  Songs.findOne({ where: {id: req.params.id} })
    .then(song => res.send(song));
});

app.post('/addsong', (req, res) => {
  const songtitle = req.body.songtitle;
  const artistname = req.body.artistname;
  const albumcover = req.body.albumcover;
  const songurl = req.body.songurl;
  Songs.create({songtitle, artistname, albumcover, songurl})
    .then(newsong => res.send(newsong));
});

app.put('/editsong/:id', (req, res) => {
  let songtitle = req.body.songtitle;
  let id = req.params.id;
  Songs.update({ songtitle }, { where: { id } })
    .then(() => res.send(`new songname is '${songtitle}'`));
});

app.delete('/deletesong/:id', (req, res) => {
  let id = req.params.id;
  Songs.destroy({ where: { id } })
    .then(() => res.send(`you have deleted song ${id}`));
});

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});


