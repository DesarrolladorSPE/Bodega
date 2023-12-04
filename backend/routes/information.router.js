const express = require("express");
const { connection } = require("../database")

const { getColumnNamesInDataBase, getConditionalDataForInsertRecord, getFileIdAndMesInDatabase } = require("../database/getFilesIdInDatabase");

const util = require("util");

const router = express.Router();


const query = util.promisify(connection.query).bind(connection);

const fetchData = async () => {
    try {
        const users = await query("SELECT * FROM login");
        const fuentes = await query("SELECT * FROM fuentes");

		const columnNames = await getColumnNamesInDataBase(3);

		const test1 = await getConditionalDataForInsertRecord(4);
		const teest2 = await getFileIdAndMesInDatabase()


        return {
			users,
			fuentes,
			columnNames,
			test1,
			teest2
		 };

    } catch (err) {
        console.error(err);
        throw err; // Propagar el error para que pueda ser manejado externamente
    }
};

router.get("/", async (request, response) => {
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