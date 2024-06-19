const express = require("express");
const { connection } = require("../database");
const { getQuery } = require("../utils/querys");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const users = await getQuery("SELECT id, nombre, correo, tipo FROM login");

        return response.status(200).json({users});

    }
	catch (err) {
        return response.status(500).json({
            message: err.message || "Internal Server Error",
        });
    }
})

router.post('/', (request, response) => {
	try {
		const newUserData = request.body;

		connection.query('INSERT INTO login SET ?', newUserData, (err, results) => {
			if (err) {
				return response.json({ Error: err.message });
			}

			return response.json({Status: "Success", message: "Usuario creado correctamente"});
	  });
	} catch (err) {
		return response.json({ Error: 'Error al crear el usuario' });
	}
});

router.put('/', async (request, response) => {
	try {
		const { id, nombre, correo, clave, tipo } = request.body;

		const user = await getQuery(`SELECT * FROM login WHERE id = ${id}`)

		if (!(user.length != 0)) {
			return response.json({Error: "Usuario no encontrado"})
		}

		connection.query('UPDATE login SET nombre = ?, correo = ?, tipo = ?, clave = ? WHERE id = ?',
			[nombre, correo, tipo, clave, id], (err) => {
				if (err) {
					return response.json({ Error: err.message });
				}

				return response.status(200).json({ Status: "Success", message: 'Usuario actualizado correctamente'});
			}
		);

	} catch (err) {
		return response.status(500).json({ Error: 'Error al actualizar el usuario' });
	}
});

router.delete('/', (request, response) => {
	try {
		const { id } = request.body;

		const query = `DELETE FROM login WHERE id = ?`;

		connection.query(query, id, (err, results) => {
			if(err) {
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success", message: "Usuario eliminado correctamente" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

module.exports = router;