## CRUD

>The CRUD.md describes the different REST API calls available.

## GET

>route: '/getsong/1'

retrieves song with id = 1

## POST

>route: '/addsong'

Adds a new song to the database. Requires song JSON to be added from user in the request's body.

ex: {
    "songtitle": " A New Beginning",
    "artistname": " Dave Matthews Band",
    "albumcover": " https://hr-sdc-assets.s3.us-east-2.amazonaws.com/album-covers/photos/photo-534.jpg",
    "songurl": " https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-jazzyfrenchy.mp3"
}

## PUT

>route: '/editsong/:id'

Updates a song's title. Requires an ID specified in params and new song_title to be updated from user in the request's body.

## DELETE

>route: '/removesong/:id'

Removes a song based on an ID from request. Requires an ID specified in params