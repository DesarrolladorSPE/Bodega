const express = require("express");
const { getQuery } = require("../utils/querys");
const { getColumnNamesInDataBase } = require("../database/getFilesIdInDatabase");

const router = express.Router();


router.get("/", async (request, response) => {
	try {
		const fuentes = await getQuery("SELECT * FROM fuentes");

		// const columnNames = [await getColumnNamesInDataBase(1), await getColumnNamesInDataBase(2), await getColumnNamesInDataBase(3), await getColumnNamesInDataBase(4)]

		return response.json({
			fuentes,
			// columnNames
		})
	}
	catch (err) {
		return response.json({Error: err.message});
	}
})


module.exports = router;