const express = require("express");
const { getQuery } = require("../utils/querys");

const router = express.Router();


router.get("/", async (request, response) => {
	try {
		const fuentes = await getQuery("SELECT * FROM fuentes");

		return response.json({fuentes})
	}
	catch (err) {
		return response.json({Error: err.message});
	}
})


module.exports = router;