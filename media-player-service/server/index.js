require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
// const db = require('./database/postgres.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('media', '', '', {
  host: 'localhost',
  dialect: 'postgres'
});

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(cors());
app.use(express.json());

app.get('/songs/:id', async(req, res) => {
  const id = req.params.id;
  const song = await sequelize.query(`SELECT * FROM songs JOIN artists ON songs.artist_id = artists.id WHERE songs.id = ${id};`);
  if (song[0][0]) {
    res.json(song[0][0]);
  } else {
    res.send('error');
  }
});

app.post('/songs', async(req, res) => {
  const song = req.body.song;
  const response = await sequelize.query(`INSERT INTO songs (title,genre,artist_id,art,url,release) VALUES ('${song.song_name}','${song.music_genre}',${song.band_id},'${song.album_image}','${song.song_url}','${song.release_date}')`);
  res.json(response);
});

app.put('/songs/:id', async(req, res) => {
  const id = req.params.id;
  const item = req.body.song;
  const response = await sequelize.query(`UPDATE songs SET title = '${item.song_name}', genre = '${item.music_genre}', artist_id = ${item.band_id},art = '${item.album_image}',url = '${item.song_url}', release = '${item.release_date}' WHERE id = ${id}`);
  res.json(response);
});

app.delete('/songs/:id', async(req, res) => {
  const id = req.params.id;
  const response = await sequelize.query(`DELETE FROM songs WHERE id = ${id}`);
  res.json(response);
})

app.listen(3305, () => {
  console.log('media server listening on 3305');
})