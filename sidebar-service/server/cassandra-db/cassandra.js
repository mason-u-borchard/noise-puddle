const cassandra = require("cassandra-driver");

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
