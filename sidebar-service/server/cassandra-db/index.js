

DROP KEYSPACE IF EXISTS sidebar;

CREATE KEYSPACE sidebar WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1}

use sidebar;

tracing on;

CREATE TABLE artist (
    artist_id VARINT,
    artist_name VARCHAR,
    track_count VARINT,
    follower_count VARINT,
    following_count VARINT,
    artist_about VARCHAR,
    artist_links VARCHAR,
    liked_songs VARINT,
    PRIMARY KEY(artist_id)
);

CREATE INDEX ON artist (id);




DROP KEYSPACE IF EXISTS sidebar;

CREATE KEYSPACE sidebar WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1}

use sidebar;

tracing on;

CREATE TABLE likedsongs (
    likedsongs_id VARINT,
    song_name VARCHAR,
    artist_name VARCHAR,
    plays VARINT,
    likes VARINT,
    reposts VARINT,
    comments VARINT,
    album_art VARCHAR,
    location VARCHAR,
    artist_pic VARCHAR,
    PRIMARY KEY(likedsongs_id)
);

CREATE INDEX ON liked (id);



module.exports.Artist = Artist;
module.exports.SongLike = SongLike;