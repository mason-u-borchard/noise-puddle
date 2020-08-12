# SDC-Media-Player-Jon-Baltz

>

## Related Projects

  - https://github.com/FEC-Group-Link/app-preview-info-carousel
  - https://github.com/FEC-Group-Link/review-component
  - https://github.com/FEC-Group-Link/searchbar-similar
  - https://github.com/FEC-Group-Link/side-navbar-component

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## API methods

### GET

Send a get request to /songs to get a random song.

### Post

Send a post request to /songs with a song's information in the body.

### Put

Send a put request to /songs/:id with a song's new information in the body to update the song with that id.

### Delete

Send a delete request to /songs/:id to delete the song with that id.


## Development

### Installing Dependencies
Run this only once from within the root directory:

```sh
npm install
```
Also ensure that postgreSQL is installed.

### Seeding Database

Run this only once from within the root directory:

```sh
npm run postgresCreate
creatdb media
node server/seeds/generator.js
psql media
```
Then run the two copy functions commented in /server/seeds/postgres.js

### Building and Starting Server

Run this from within the root directory whenever a sever and build is needed. These will watch for changes and will automatically update. Two consoles will be needed to run both:


```sh
npm run build-dev
npm run start-dev
```

