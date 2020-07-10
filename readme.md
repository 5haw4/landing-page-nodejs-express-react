
# Landing Page - NodeJS, Express and ReactJS

![Screen Capture - GIF](https://github.com/5haw4/landing-page-nodejs-express-react/blob/master/screen-capture.gif?raw=true)


## Libraries:
- Backend:
    - [express](https://www.npmjs.com/package/express)
    - [cookie-parser](https://www.npmjs.com/package/cookie-parser)
    - [browser-detect](https://github.com/KennethanCeyer/browser-detect)
    - [dotenv](https://www.npmjs.com/package/dotenv)
    - [express-device](https://www.npmjs.com/package/express-device)
    - [node-fetch](https://www.npmjs.com/package/node-fetch)
- Frontend:
    - [react](https://reactjs.org/)
    - [node-sass](https://www.npmjs.com/package/node-sass)
    - [create-react-app](https://www.npmjs.com/package/create-react-app)
    - [blueprint.js](https://blueprintjs.com/)

## Project Structure:
### Backend:
    .
    ├── ...
    ├── public
    ├── src
    │   ├── config          //config files with static data
    │   ├── controllers     //controllers for the routers
    │   ├── helpers         //helper functions
    │   ├── routes          //routes of the server
    │   ├── utils           //util functions and files (like contsts, etc..)
    │   ├── app.js          //the root express app file
    │   └── server.js       //the root server file
    └── ...

### Frontend:
    .
    ├── ...
    ├── public
    ├── src
    │   ├── components          //components and reusable components
    │   ├── styles
    │   │   ├── components      //component specific SCSS files
    │   │   └── index.scss      //main SCSS file
    │   ├── App.js
    │   └── index.js
    └── ...

## Notes:
- the server runs on port 3001
- the client runs on port 3000
- the client is already set up to proxy through 3001
- when running the projects on localhost the IP the server detects is localhost therefore some static data will be served instead of calling the IP geo location API (in order to not reach their API limit while testing / developing)
    - once deployed the server app will detect the actual user IP and fetch its geo location - it's already supports proxy / reverse proxy methods of apache / nginx
- I do NOT own the assets so don't use them in commercial projects

## Quick Start
- Backend:
    1. set your [IP geo location](https://ipgeolocation.io/) API key in the .env file in the `landing-page-backend` directory
    1. go inside the backend's directory by running `cd landing-page-backend`
    2. install the dependencies by running `npm install`
    3. start the server by running `npm start`
    4. the server runs on port 3001
- Frontend:
    1. go inside the frontend's directory by running `cd landing-page-frontend`
    2. install the dependencies by running `npm install`
    3. start the server by running `npm start`
    4. go to `localhost:3000` to see the web app in action
