const express = require('express');

const { connection } = require("../database");
const { getQuery } = require('../utils/querys');
const router = express.Router();

router.post('/', async (request, response) => {
	try {
		const { email, password } = request.body;

		const userRegistered = await getQuery(`SELECT * FROM login WHERE correo ='${email}'`);

		if (userRegistered.length == 0) {
			return response.json({Error: "Usuario no registrado"});
		}

		const user = await getQuery(`SELECT * FROM login WHERE correo ='${email}' AND clave = '${password}'`)

		if (!(user.length > 0)) {
			return response.json({ Error: "Contraseña invalida, intentelo de nuevo." });
		}

		return response.json({ Status: "Success", message: "Inicio de sesión exitoso", type: user[0].tipo });

	} catch (err) {
		return response.json({Error: err.message});
	}

});

module.exports = router;