const express = require("express");
const { connection } = require("../database")
const util = require("util");

const { fetchConsolidadoData } = require("../ConsolidadoFunctions/consolidadoData");

const router = express.Router();

const queries = [
	{
		tableName: "1_formularioweb",
		columns: [
			"*"
		],
	},
	{
		tableName: "2_sise",
		columns: [
			"SUM(PERSONAS_INSCRITAS_NETO) AS PERSONAS_INSCRITAS_NETO",
		],
	},
	{
		tableName: "3_sena",
		columns: [
			"SUM(INSCRITOS_HOMBRE) AS INSCRITOS_HOMBRE",
		],
	},
	{
		tableName: "4_base",
		columns: [
			"prestador",
			"departamento"
		],
	},
];

const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

router.get("/", async (request, response) => {
	try {
		const filterConditions = Object.keys(request.query)
			.filter((key) => request.query[key] !== "")
			.map((key) => `${key} = '${request.query[key]}'`)
			.join(" AND ");

		const results = await Promise.all(
			queries.map(async (table) => {
				const query = `SELECT ${table.columns.join(", ")} FROM ${table.tableName} ${filterConditions ? `WHERE codigo_punto_atencion=22125006 ${filterConditions}` : ""}`;
				const result = await executeQuery(query);

				// Transformar el resultado para que coincida con el formato deseado
				const formattedResult = result.reduce((formatted, row) => {
					Object.keys(row).forEach((key) => { formatted[key] = row[key] });
					return formatted
				}, {});



				return { [table.tableName]: formattedResult };
			})
		);

		const consolidatedResult = results.reduce((consolidated, result) => {
			const tableName = Object.keys(result)[0];
			consolidated[`T${tableName}`] = result[tableName];
			return consolidated;
		}, {});

		response.status(200).json(consolidatedResult)

	}
	catch (err) {
		console.log(err);
		response.status(500).json({message: "Error cargando datos"})
	}
});




const query = util.promisify(connection.query).bind(connection);

const fetchData = async () => {
    try {
        const tabla1 = await query("SELECT * FROM 3_sena WHERE MPO_ID=57005001");

        return {
			tabla1,
		 };

    } catch (err) {
        console.error(err);
        throw err; // Propagar el error para que pueda ser manejado externamente
    }
};

router.get("/tablas", async (request, response) => {
	try {
		const month = request.query.mes || "";
		const year = request.query.ano || "";

        const results = await fetchConsolidadoData(month, year);

        return response.status(200).json(results);

    }
	catch (err) {
        console.error(err);
        return response.status(500).json({
            message: err.message || "Internal Server Error",
        });
    }
})

router.get("/tablas2", async (request, response) => {
	try {
        const results = await fetchData();

        return response.status(200).json(results);

    }
	catch (err) {
        console.error(err);
        return response.status(500).json({
            message: err.message || "Internal Server Error",
        });
    }
})



module.exports = router;