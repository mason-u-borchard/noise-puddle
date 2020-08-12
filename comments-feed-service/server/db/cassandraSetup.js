const cassandra = require('cassandra-driver');

// COPY Songs (artist_id,title,play_count,likes_count,
//   repost_count,release_date) FROM '/Users/anthonyha/hrr44/SDC/FEC-com
//   ments-feed-module-riley/songData.csv' WITH DELIMITER=',' AND HEADER
//   =TRUE;

//   COPY Comments (song_id,user_name,user_followers_cou
//   nt,user_profile_pic,text,track_location,createdat,updatedat) FROM '
//   /Users/anthonyha/hrr44/SDC/FEC-comments-feed-module-riley/commentDa
//   ta.csv' WITH DELIMITER=',' AND HEADER=TRUE;

//   COPY Artists (name, followers_count, tracks_count,
//   profile_pic) FROM '/Users/anthonyha/hrr44/SDC/FEC-comments-feed-mod
//   ule-riley/artistData.csv' WITH DELIMITER=',' AND HEADER=TRUE;

// CREATE TABLE Artists (name text, followers_count in
// t, tracks_count int, profile_pic text, PRIMARY KEY (name));
// CREATE TABLE Songs (artist_id int, title text, play
// _count int, likes_count int, repost_count int, release_date text, P
// RIMARY KEY (artist_id));
// CREATE TABLE Comments (song_id int, user_name text,
//   user_followers_count int, user_profile_pic text, text text, track_
// location text, createdat text, updatedat text, PRIMARY KEY (song_id
// );