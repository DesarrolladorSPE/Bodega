const express = require('express');

const { connection } = require("../database")
const router = express.Router();

router.post('/', (request, response) => {
  const { email, password } = request.body;

    connection.query("SELECT * FROM login WHERE correo=? AND clave=?", [email, password],
        (err, results) => {
            if (err) {
                response.status(500).json({ message: "Error en el servidor" });
                return;
            }

            if (results.length > 0) {
                // Usuario autenticado
                response.status(200).json({ message: "Inicio de sesión exitoso", type: results[0].tipo });
            }
            else {
                // Usuario no encontrado en la base de datos
                response.status(401).json({ message: "Correo o contraseña invalidos, intetelo de nuevo." });
            }
        }
    );
});

module.exports = router;