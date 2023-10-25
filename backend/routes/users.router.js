const express = require("express");
const { connection } = require("../database")

const router = express.Router();

router.get("/", (request, response) => {
    connection.query("SELECT * FROM login", (err, result) => {
        if (err) {
            throw err;
        }
        return response.json(result);
    })
})

router.post('/', (request, response) => {
	try {
		const newUserData = request.body;

		connection.query('INSERT INTO login SET ?', newUserData, (err, results) => {
			if (err) {
				console.error(err);
				return response.status(500).json({ message: 'Error al crear el usuario' });
			}

			const newUser = { id: results.insertId, ...newUserData };
			return response.status(201).json({message: "Usuario creado Correctamente", newUser: newUser});
	  });
	} catch (err) {
		console.error(error);
		return response.status(500).json({ message: 'Error al crear el usuario' });
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
		console.error(err);
		return response.status(500).json({ error: 'Error al actualizar el usuario' });
	}
});

router.delete('/:userId', (request, response) => {
	try {
		const userId = request.params.userId;

		connection.query('DELETE FROM login WHERE id = ?', [userId], (err, results) => {
			if (err) {
				console.error(err);
				return response.status(500).json({ message: 'Error al eliminar el usuario' });
			}

			if (results.affectedRows === 0) {
				return response.status(404).json({ message: 'Usuario no encontrado' });
			}

			// Envía una respuesta exitosa
			return response.status(200).json({ message: 'Usuario eliminado correctamente' });
		});
	} catch (err) {
		console.error(err);
		return response.status(500).json({ message: 'Error al eliminar el usuario' });
	}
});

module.exports = router;