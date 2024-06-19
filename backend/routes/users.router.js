const express = require("express");
const { connection } = require("../database");
const { getQuery } = require("../utils/querys");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const users = await getQuery("SELECT nombre, correo, tipo FROM login");

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

router.put('/', (request, response) => {
	try {
		const { id, nombre, correo, tipo } = request.body;

		connection.query('UPDATE login SET nombre = ?, correo = ?, tipo = ? WHERE id = ?',
			[nombre, correo, tipo, id],
			(err, results) => {
				if (err) {
					return res.status(500).json({ Error: 'Error al actualizar el usuario' });
				}

				if (results.affectedRows === 0) {
					return res.status(404).json({ Error: 'Usuario no encontrado' });
				}

				// Envía una respuesta exitosa
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