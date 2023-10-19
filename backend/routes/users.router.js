const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
    response.send("API para los usuarios");
})

module.exports = router;