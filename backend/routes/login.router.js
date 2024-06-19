const express = require('express');

const { connection } = require("../database")
const router = express.Router();

router.post('/', (request, response) => {
  const { email, password } = request.body;

    connection.query("SELECT * FROM login WHERE correo=? AND clave=?", [email, password],
        (err, results) => {
            if (err) { return response.json({Error: "Error en el servidor" }); }

            if (results.length > 0) {
                return response.status(200).json({ Status: "Success", message: "Inicio de sesión exitoso", type: results[0].tipo });
            }
            else {
                return response.status(401).json({ Error: "Correo o contraseña invalidos, intentelo de nuevo." });
            }
        }
    );
});

module.exports = router;