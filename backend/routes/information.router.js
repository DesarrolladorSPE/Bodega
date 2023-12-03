const express = require("express");
const { connection } = require("../database")

const util = require("util");

const router = express.Router();


const query = util.promisify(connection.query).bind(connection);

const getUsersAndFuentes = async () => {
    try {
        const users = await query("SELECT * FROM login");
        const fuentes = await query("SELECT * FROM fuentes");

        return {
			users,
			fuentes
		 };

    } catch (err) {
        console.error(err);
        throw err; // Propagar el error para que pueda ser manejado externamente
    }
};

router.get("/", async (request, response) => {
	try {
        const {
			users,
			fuentes
		} = await getUsersAndFuentes();

        return response.status(200).json({
            users,
            fuentes,
        });

    }
	catch (err) {
        console.error(err);
        return response.status(500).json({
            message: err.message || "Internal Server Error",
        });
    }
})

module.exports = router;