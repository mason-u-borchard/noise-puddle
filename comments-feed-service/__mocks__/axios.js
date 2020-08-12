'use strict';

const Promise = require('bluebird');

module.exports = {
  get: (path) => {
    switch(path) {
      case 'http://localhost:3005/artist':
        return Promise.resolve({
          data: [
            {
              "id": 1,
              "name": "testArtistName",
              "followers_count": 999999,
              "tracks_count": 999,
              "profile_pic": "",
              "createdAt": "2020-03-18T15:36:29.000Z",
              "updatedAt": "2020-03-18T15:36:29.000Z"
            }
          ]
        })
        break;

      case 'http://localhost:3005/song':
        return Promise.resolve({
          data: [
            {
              "id": 1,
              "artist_id": 1,
              "title": "Test Song Title",
              "play_count": 999999,
              "likes_count": 999,
              "repost_count": 99,
              "description": "",
              "released_by": "",
              "release_date": "01 January 2020",
              "p_line": "℗ 2020",
              "c_line": "© 2019",
              "hashtags": "",
              "createdAt": "2020-03-18T15:36:29.000Z",
              "updatedAt": "2020-03-18T15:36:29.000Z"
            }
          ]
        })
        break;

      case 'http://localhost:3005/comments':
        return Promise.resolve({
          data: [
            {
              "id": 998,
              "user_id": "d2cc14dd-e8ad-44d2-a8f0-86262928test",
              "user_name": "Test User 1",
              "user_followers_count": 5,
              "user_profile_pic": "https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg",
              "text": "Learning how to write useful tests is hard!",
              "track_location": "01:00",
              "original_comment_id": null,
              "createdAt": "2020-03-23T01:48:48.000Z",
              "updatedAt": "2020-03-23T01:48:48.000Z"
            },
            {
              "id": 999,
              "user_id": "14914f57-b595-4196-92ea-e2b6bf1ftest",
              "user_name": "Test User 2",
              "user_followers_count": 99,
              "user_profile_pic": "https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg",
              "text": "One day writing tests will be easier!",
              "track_location": "03:00",
              "original_comment_id": null,
              "createdAt": "2020-03-23T01:47:52.000Z",
              "updatedAt": "2020-03-23T01:47:52.000Z"
            }
          ]
        })
        break;
    }
  },
  post: () => {
    return Promise.resolve({
      data: [
        'OK'
      ]
    })
  }
};