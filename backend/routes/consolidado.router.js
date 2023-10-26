const express = require("express");
const { connection } = require("../database")

const router = express.Router();

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

module.exports = router;