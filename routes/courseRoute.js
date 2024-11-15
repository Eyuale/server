const express = require("express");
const router = express.Router()



router.get("/", (res, req) => {
    res.json({ message: "courses are here"})
})

module.exports = router