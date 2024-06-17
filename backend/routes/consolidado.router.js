const express = require("express");
const { fetchConsolidadoData } = require("../ConsolidadoFunctions/consolidadoData");
const { getQuery } = require("../utils/querys");

const router = express.Router();

router.get("/tablas", async (request, response) => {
	try {
		const month = request.query.mes || "";
		const year = request.query.ano || "";

        const results = await fetchConsolidadoData(month, year);

        return response.status(200).json({consolidado: results});

    }
	catch (err) {
        return response.json({Error: err.message});
    }
})

module.exports = router;