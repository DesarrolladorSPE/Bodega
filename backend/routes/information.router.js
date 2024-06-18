const express = require("express");
const { connection } = require("../database")

const { getColumnNamesInDataBase } = require("../database/getFilesIdInDatabase");

const util = require("util");

const router = express.Router();


const query = util.promisify(connection.query).bind(connection);

const fetchData = async () => {
    try {
        const users = await query("SELECT * FROM login");
        const fuentes = await query("SELECT * FROM fuentes");
		const column1 = [await getColumnNamesInDataBase(1), await getColumnNamesInDataBase(2), await getColumnNamesInDataBase(3), await getColumnNamesInDataBase(4)]
        return {
			users,
			fuentes,
			column1
		 };

    } catch (err) {
        // console.error(err);
        throw new Error(err); // Propagar el error para que pueda ser manejado externamente
    }
};

router.get("/", async (request, response) => {
	try {
        const results = await fetchData();

        return response.status(200).json(results);

    }
	catch (err) {
        return response.status(500).json({
            message: err.message || "Internal Server Error",
        });
    }
})

module.exports = router;