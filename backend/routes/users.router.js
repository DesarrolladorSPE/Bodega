const express = require("express");
const { connection } = require("../database")

const router = express.Router();

router.get("/", (request, response) => {
    connection.query("SELECT * FROM login", (err, result) => {
        if (err) {
            throw err;
        }
        return response.json(result);
    })
})

module.exports = router;