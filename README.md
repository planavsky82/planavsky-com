# Planavsky.com Monorepo

This repo contains the following projects:
- Angular CLI Project
  - Ultimate List Component Library
  - MyFantasyFootballRankings.com Client Side App
  - Planavsky.com Portfolio 
- Firebase Functions Server Side App and API
- Stencil Web Component Library
- Hexo.io Development Blog

## Firebase

Projects in this repo utilize [Firebase](https://www.npmjs.com/package/firebase-tools). Run the following commands to initialize:

`npm run firebase:install` 

`npm run firebase:login`

## Other Prerequisites

- [NVM](https://github.com/nvm-sh/nvm)
  - Node 12 (`nvm install 12 && nvm use 12`)
  - Node 10 (`nvm install 10 && nvm use 10`)

## Commands

- **Deploy:** `npm run firebase:deploy`
- **NPM install for all projects:** `npm run install:all`

## Deployment Config

A root-level config.js file is needed to deploy to Firebase.

## Firebase URLs

- [https://myfantasyfootballrankings.web.app/](https://myfantasyfootballrankings.web.app/)
- [https://blog-planavsky-com.web.app/](https://blog-planavsky-com.web.app/)
- [Web Components JS](https://power-web-components.web.app/stencil-web-components/stencil-web-components.js)
- [Web Components ESM](https://power-web-components.web.app/stencil-web-components/stencil-web-components.esm.js)
