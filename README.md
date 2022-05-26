# QuanderDome

A real-time trivia multiplayer game.

## Acknowledgements

- [Open Trivia Database](https://opentdb.com/)

## Tech Stack

**Client:** Next.js, NextAuth, Sequelize, SASS,

**Server:** Node, Express, Socket.io, Sqlite3

## Run Locally

Clone the project

```bash
  git clone https://github.com/Orloaft/quanderdome
```

Go to the project directory

```bash
  cd quanderdome
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`EMAIL_SERVER=`
`EMAIL_FROM= `
`SERVER_URL=`
`PORT=`
`NEXTAUTH_URL=`
`NEXTAUTH_SECRET=`

## Roadmap

- Refactor the game logic to make all ui and state changes a part of a single state object

- Create more tables in the database for storing user match history and the ui component to display the data.

- Allow more customization by introducing different game modes and render all of the players names and stats in the game room.

- Add some animations and ui themes. Enable uploading user Avatars.

## Support

For support, or if you would like to report game breaking bugs, please reach out to alexorlow17@gmail.com.

## Lessons Learned

One of the main takeaways from working with socket.io is that it is very easy to write messy socket code. Trying to design the game logic with more forethought proved to be out of the scope for the first phase. Troubleshooting while testing online games gave me a lot of insight into how I redesign the realtime ui updates.

## Authors

- [Alex Orlow](https://www.github.com/orloaft)

## FAQ

#### How many players are allowed in one game

The current game mechanics are inteded for 1-4 players but more players could join and spectate(not a stable feature)

## Deployment

During the initial testing the app was hosted for players using https://ngrok.com/

## Features

- Light/dark mode toggle
- Lobby chat
- Custom request to Trivia DB
