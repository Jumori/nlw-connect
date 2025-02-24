<h1 align="center">
  NLW Connect
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Jumori/nlw-connect?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Jumori/nlw-connect">

  <a href="https://github.com/Jumori/nlw-connect/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jumori/nlw-connect">
  </a>

</p>

# Table of Contents

<!--ts-->

- [Table of Contents](#table-of-contents)
  - [💻 About the project](#-about-the-project)
  - [🎨 Layout](#-layout)
  - [🚀 How to run this project](#-how-to-run-this-project)
    - [Prerequisites](#prerequisites)
    - [Running web application](#running-web-application)
    - [Backend application](#backend-application)
  - [🛠 Stacks](#-stacks)
    - [**Server** (Node + TypeScript)](#server-node--typescript)
  - [🦸 Author](#-author)
  - [📝 License](#-license)

## 💻 About the project

This project were made during **NLW Connect** offered by [Rocketseat](https://lp.rocketseat.com.br/).

This project is a server application for event registrations and referrals.

## 🎨 Layout

This project layout is available at Figma:

<a href="https://www.figma.com/community/file/1471119935944492720">
  <img alt="Figma" src="https://img.shields.io/badge/View%20Layout%20-Figma-%2304D361">
</a>

## 🚀 How to run this project

### Prerequisites

Before you start, you're gonna need:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [NPM](https://www.npmjs.com/), [Docker](https://www.docker.com/)

### Running web application

```bash
# Clone this repository
$ git clone git@github.com:Jumori/nlw-connect.git

# Access this project web directory in your terminal/cmd
$ cd nlw-connect/web

# Install project dependencies
$ npm install

# Run React application in dev demo
$ npm run dev
```

### Backend application

```bash
# Access this project server directory in your terminal/cmd
$ cd nlw-connect/server

# Run docker containers
$ docker compose up -d

# Install project dependencies
$ npm install

# Create local database
$ npm run db:migrate

# Run local node application
$ npm run dev

# Access localhost:3333/docs for Swagger documentation
```

## 🛠 Stacks

The following tools were used in this project:

#### **Server** ([Node](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Fastify](https://fastify.dev/)**
- **[Drizzle](https://orm.drizzle.team/)**
- **[Redis](https://redis.io/)**
- **[PostgreSQL](https://www.postgresql.org/)**

> See more in [package.json](./package.json)

## 🦸 Author

<a href="https://github.com/Jumori">
 <img style="border-radius: 50%;" src="https://github.com/Jumori.png" width="100px;" alt=""/>
 <br />
 <sub><b>Juliana Morikoshi</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Juliana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/julianamorikoshi/)](https://www.linkedin.com/in/julianamorikoshi/)
[![Gmail Badge](https://img.shields.io/badge/-julianamorikoshi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:julianamorikoshi@gmail.com)](mailto:julianamorikoshi@gmail.com)

---

## 📝 License

This project is under [MIT](../LICENSE) license.

Done with ❤️ by Juliana Morikoshi 👋 [Contact me!](https://www.linkedin.com/in/julianamorikoshi/)
