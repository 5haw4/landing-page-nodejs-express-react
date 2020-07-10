//using express
var express = require("express");
//creating instance of express
var app = express();

//using cookie parser
const cookieParser = require('cookie-parser')
app.use(cookieParser(process.env.SIGNED_COOKIES_SECRENT))

//for capturing the user's device type by its UA
const device = require("express-device")
app.use(device.capture());

/*
    - to allow accessing the frontend / everything in the "public"
    - if no files were found then the user will be served with react's 
        html main file and react will give a 404 error if needed
*/
const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));

//setting up the api routes
const routes = require("./routes/mainRoutes")
app.use("/", routes)

//serving react's index.html - if the page doesn't exist react will handle it
app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

//setting the global error handler
const globalErrorHandler = require("./controllers/errorController")
app.use(globalErrorHandler)

module.exports = app;