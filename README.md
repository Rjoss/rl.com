# Getting Started with rl.com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

###### `npm test`

Launches the test runner in the interactive watch mode.

###### `npm run build`

Builds the app for production to the `build` folder.

### Deployment

Deployment is handled by Github Actions.

[![deploy-prodution](https://github.com/Rjoss/rl.com/actions/workflows/deploy.yml/badge.svg?branch=production&event=push)](https://github.com/Rjoss/rl.com/actions/workflows/deploy.yml)

See `.github > workflows > deploy.yml` for steps.

In general this should look like:

- Prep env variables in .env.production with values from the Github Action run
- Build the app with `npm run build`
- Rsync the build to the public server
