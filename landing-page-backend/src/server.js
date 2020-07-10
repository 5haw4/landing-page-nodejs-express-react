//setting up dotenv to be able to easily use env consts from .env file
const dotenv = require('dotenv')
const path = require("path")
dotenv.config({ path: path.join(__dirname, `/../.env`) })

const app = require("./app");
var http = require("http")

//listening for unhandled rejections
process.on("unhandledRejection", err => {
    console.log("Unhandled Rejection: ", err)
    //gracefully killing the process
    server.close(() => {
        process.exit(1)
    })
})

//using http with the instance of the express app to listen to port 3001
const server = http.createServer(app).listen(3001, () => {
    console.log(`server started`);
});

//listening for uncaught exceptions
process.on("uncaughtException", err => {
    console.log("Uncaught Exception: ", err);
    //gracefully killing the process
    server.close(() => {
        process.exit(1)
    })
})
