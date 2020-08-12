const faker = require('faker');
const moment = require('moment');
const Sequelize = require('sequelize');

const db = new Sequelize('sdc_comments', 'anthony', 'spring2020', {
  dialect: 'postgres',
  host: '54.198.132.59'
});

// db.authenticate()
// .then(() => console.log('Connection has been established successfully.'))
// .catch(err => console.error('Unable to connect to the database:', err));
// async function newComment (obj) {
//   let fakeIt = function (object) {
//     let newCommentsFeed = {
//       user_id: faker.random.uuid(),
//       user_name: obj.user_name,
//       user_profile_pic: 'https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg',
//       text: obj.text,
//       user_followers_count: Math.floor(Math.random() * 100),
//       track_location: moment.utc(Math.floor(Math.random() * 235000)).format('mm:ss'),
//       original_comment_id: null
//     }
//     // console.log(newCommentsFeed)
//     return newCommentsFeed;
//   }
//   return await fakeIt(obj);
// }

module.exports = {
  song: {
    get: function (req, res) {
      const id = req.params.id;
      const search = `SELECT * FROM "Songs" WHERE id=${id}`
      db.query(search)
      .then(data => {
        res.send(data[0][0])
      })
      .catch(err => {
        if (err) {
          console.error(res.send(`Failed to get song with id:${id}`))
        }
      })
    }

  },

  artist: {
    get: (req, res) => {
      const random = Math.floor(Math.random() * (1000000-1) + 1);
      const search = `SELECT * FROM "Artists" WHERE id=${random}`;
      db.query(search)
      .then(data => {
        res.send(data[0][0]);
      })
      .catch(err => {
        if (err) {
          console.error(res.send('Failed to get artist'));
        }
      })
    }
  },

  comments: {
    get: (req, res) => {
      const id = req.params.id;
      const search = `SELECT * FROM "Comments" WHERE song_id=${id}`;
      db.query(search)
      .then(data => {
        res.send(data[0]);
      })
      .catch(err => {
        if (err) {
          console.error(res.send('Failed to get comments'));
        }
      })
    },

    delete: (req, res) => {
      const id = req.params.id;
      const search = (`DELETE FROM "Comments" WHERE id=${id}`);
      db.query(search)
      .then(data => {
        res.send("Successfully deleted comment");
      })
      .catch(err => {
        if (err) {
          console.error(res.send('Failed to delete comment'));
        }
      })
    },

    put: (req,res) => {
      const id = req.params.id;
      const comment = req.body.comment;
      const search = `UPDATE "Comments" SET song_id=${comment.song_id}, user_name= '${comment.user_name}', user_followers_count= ${comment.user_followers_count}, user_profile_pic='${comment.user_profile_pic}',text='${comment.text}', track_location='${comment.track_location}', createdat='${comment.createdat}',updatedat='${comment.updatedat}' WHERE id=${id}`;
      db.query(search)
      .then(data => {
        res.send("Successfully updated comment");
      })
      .catch(err => {
        if (err) {
          console.error(res.send('Failed to update comment'));
        }
      })
    },

    post: (req, res) => {
      const comment = req.body.comment;
      const search = (`INSERT INTO "Comments" (song_id,user_name,user_followers_count,user_profile_pic,text,track_location,createdat,updatedat) VALUES(${comment.song_id},'${comment.user_name}',${comment.user_followers_count},'${comment.user_profile_pic}','${comment.text}','${comment.track_location}','${comment.createdat}','${comment.updatedat}')`);
      db.query(search)
      .then(data => {
        res.send("Successfully added comment");
      })
      .catch(err => {
        if (err) {
          console.error(res.send('Failed to add comment'));
        }
      })
    }
  },

  main: {
    get: (req, res) => {
      res.sendStatus(200)
      res.end()
    }
  }
};
