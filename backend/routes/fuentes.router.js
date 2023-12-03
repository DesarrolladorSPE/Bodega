const express = require("express");
const { connection } = require("../database")

const { getColumnNamesInBaseTable } = require("../database/getFilesIdInDatabase");

const router = express.Router();

router.get("/", (request, response) => {
    connection.query("SELECT * FROM fuentes", (err, data) => {
        if (err) {
            throw err;
        }
        return response.json(data);
    })
})

router.get("/lol", async (request, response) => {
	const columnNames = await getColumnNamesInBaseTable();

	return response.json(columnNames);
})

module.exports = router;