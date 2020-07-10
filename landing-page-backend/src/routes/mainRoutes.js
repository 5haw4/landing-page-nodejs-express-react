const express = require("express")
const { getMainData } = require("../controllers/mainController")

const router = express.Router()

//setting the main and only route of the API
router
    .get("/api/v1/data", getMainData)

module.exports = router