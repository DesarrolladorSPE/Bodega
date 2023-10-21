const express = require("express");
const { connection } = require("../database")

const router = express.Router();

router.get("/", (request, response) => {
    connection.query("SELECT * FROM fuentes", (err, data) => {
        if (err) {
            throw err;
        }
        return response.json(data);
    })
})

module.exports = router;