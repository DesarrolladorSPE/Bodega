const express = require("express");
const { connection } = require("../database")

const router = express.Router();

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

router.put('/:userId', (request, response) => {
	const userId = request.params.userId;
	const {nombre, correo, tipo} = request.body;

	try {
		// Encuentra y actualiza el usuario en la base de datos
		connection.query('UPDATE login SET nombre = ?, correo = ?, tipo = ? WHERE id = ?',
			[nombre, correo, tipo, userId],
			(err, results) => {
				if (err) {
					return res.status(500).json({ error: 'Error al actualizar el usuario' });
				}

				if (results.affectedRows === 0) {
					return res.status(404).json({ error: 'Usuario no encontrado' });
				}

				// Envía una respuesta exitosa
				return response.status(200).json({ message: 'Usuario actualizado correctamente'});
			}
		);

	} catch (err) {
		// console.error(err);
		return response.status(500).json({ error: 'Error al actualizar el usuario' });
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