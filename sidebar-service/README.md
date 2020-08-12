# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

# sidebar-service

### Seeding database option 1
To generate CSV file for 1 million artists use command
```sh
npm run csv:artist
```

To generate CSV file for 10 million randomly selected liked songs, each paired with their appropriate artist use command
```sh
npm run csv:likedsongs
```

### Seeding database option 2
To generate CSV file for 10 million artists including an array of 10 of their top songs use command
```sh
npm run csv:artists+songs
```

To generate CSV file for 10 million randomly selected liked songs, each paired with their appropriate artist use command
```sh
npm run csv:likedsongs
```