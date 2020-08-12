// require('newrelic');
var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var cors = require('cors');
var path = require('path');
var PORT = 4444;
var db = require('./postgres-db/index.js');
var postgres = require('postgres');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: ''
// });


// Require Middleware
var bodyParser = require('body-parser');


app.use(cors());
// Middleware functionality goes here
app.use('/', express.static(path.join(__dirname, '../client/dist')));


/////// GET reqs here ////



//////// get artist by id query in url (quite efficient)

// Find an artist
// Get a random artist

/// find artist by id

app.get('/artistid', function(req, res) {

  db.Artist.findOne({
    where: {
      id: req.query.id
    }})
    .then(function(artist) {
      res.send({'artist': artist });
    })
    .catch(function(err) {
      res.status(404);
      res.send(`Could not find artist id: ${req.query.id} in database`);
    });
});

/// get artist and three songs
app.get('/artist', function(req, res) {

  var artistInfo;

  //Search for artist
  db.Artist.findOne({
    where: {
      id: 999999
    }
  })
    .then(function(artist) {
      artistInfo = artist;
      var limitNum = artist.liked_songs;
      if (limitNum > 3) {
        limitNum = 3;
      }
      return db.SongLike.findAll({
        where: {
          id: [10000015, 10000012, 10000014],
          order: Sequelize.literal()
        },
        limit: limitNum
      });
    })
    .then(function(songs) {
      res.send({'artist': artistInfo, 'likedSongs': songs});

    })
    .catch(function(err) {
      console.log('Error trying to find a random artist. ' + err);
      res.status(404);
    });
});

// Find an artist by name


/////// POST reqs here ////
//////////create a new liked song

app.post('/likedsongs', function(req, res) {
  console.log(JSON.stringify('req.query or body::::::::', req.query));
  db.SongLike.create(req.query)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.status(404);
      console.log('Could not post songlike');
    });
});


/////// PUT reqs here ////
// app.put('/likedsongs', function(req, res, next) {
//   console.log(JSON.stringify('req.query or body::::::::', req.query));
//   db.SongLike.update(
//     {song_name: req.query.song_name},
//     {returning: true, where: {id: req.query.id}})
//     .then(function([songUpdate, [updatedSong]]) {
//       res.json(updatedSong);
//     })
//     .catch(next);
// });


/////// DELETE reqs here ////

// delete an artist with a specific ID
// app.delete('/artist', function(req, res) {
//   console.log(req.body);
//   var artistInfo;
//   db.Artist.findOne({
//     where: {
//       'id': req.query.id
//     }})
//     .then(function(artist) {
//       console.log('Artist entry has been removed database');
//       res.send(artist);
//     })
//     .catch(function(err) {
//       console.log('An error occurred trying to remove artist from the database');
//       console.log(err);
//     });
// });




//listen for reqs
app.listen(PORT, () => {
  console.log(`Server listening in on port ${PORT}`);
});

module.exports = app;

