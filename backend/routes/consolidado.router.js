const express = require("express");
const { connection } = require("../database")

const router = express.Router();

const queries = [
	{
		tableName: "1_formularioweb",
		columns: [
			"SUM(tot_personas_inscritas) AS tot_personas_inscritas",
			"SUM(tot_personas_inscritas_jovenes) AS tot_personas_inscritas_jovenes",
			"SUM(tot_personas_inscritas_PcD) AS tot_personas_inscritas_PcD",
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
				const query = `SELECT ${table.columns.join(", ")} FROM ${table.tableName} ${filterConditions ? `WHERE ${filterConditions}` : ""}`;
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





router.get("/total/:fuente", async (request, response) => {
    const fuente = request.params.fuente;
    connection.query(
        "SELECT SUM(total_personas_inscritas) as total FROM reportes WHERE fuente = ?",
        [fuente],
        (err, results) => {
            if (err) {
                throw err;
            }
            return response.status(200).json(results);
        }
    );
});

router.get("/total-jovenes/:fuente", async (request, response) => {
    const fuente = request.params.fuente;
    connection.query(
        "SELECT SUM(total_personas_inscritas_jovenes) as totalJovenes FROM reportes WHERE fuente = ?",
        [fuente],
        (err, results) => {
            if (err) {
                throw err;
            }
            return response.status(200).json(results);
        }
    );
});

router.get("/total-pcd/:fuente", async (request, response) => {
    const fuente = request.params.fuente;
    connection.query(
        "SELECT SUM(total_personas_inscritas_PcD) as totalPcd FROM reportes WHERE fuente = ?",
        [fuente],
        (err, results) => {
            if (err) {
                throw err;
            }
            return response.status(200).json(results);
        }
    );
});




module.exports = router;