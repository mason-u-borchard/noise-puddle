# Project Name

FEC-Group-Zelda

## Related Projects

  - https://github.com/team-ganon/
  - https://github.com/FEC-Group-Link
  - https://github.com/Navi-n-B

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

## Requirements

- Node v12.14.0

## Development

### Downloading 2,000 images for csv image data

- Set up pexel.config.js file inside data with an API key from pexel
- Create a folder inside data called images
- Run download script: npm run download-images

### Generating csv data files

- Generate your data into .csv files for each table (artists, comments, and songs): npm run generate-songs, npm run generate-artists, npm run generate-comments

### Setting up PostgreSQL

- After installation, create DB called SDC_comments: createdb SDC_comments
- Run table generator script to set up tables in database: npm run postgres-init
- Start postgreSQL server: pg_ctl -D /usr/local/var/postgres start
- Open postgres terminal: psql SDC_comments
- Load each table in DB using .csv file (artists, comments, and songs): COPY "TABLE NAME" (columns) FROM 'ABSOLUTE PATH TO CSV FILE' DELIMITER ',' CSV HEADER;

### Setting up Cassandra

- After installation, start cassandra server: cassandra -f
- Start cqlsh shell: cqlsh
- Create keyspace(DB): CREATE KEYSPACE comments;
- Step into keyspace: USE comments;
- Create tables: CREATE TABLE table_name (columns) (set primary keys)
- Load each table in DB using .csv file (artists,comments, and songs): COPY table_name (columns) FROM 'ABSOLUTE PATH TO CSV FILE' WITH DELIMITER=',' HEADER=TRUE;

### Installing Dependencies

> Install dependencies from package.json: npm init

### Setup MySQL Database

> Setup database: npm run db-init
> Seed database with fake comments data (100 entries): npm run seed

### Bundle via Webpack with Babel

> Build bundle.js via Webpack: npm run build

### Run Server

> Run server via nodemon: npm run server-dev

