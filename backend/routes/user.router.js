const express = require("express");
const { connection } = require("../database");


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PropertiesReader = require("properties-reader");
const properties = PropertiesReader("./app.properties.ini")

const { verifyUser } = require("../middlewares/verifyUser");
const { validatePassword } = require("../Utils/validatePassword");
const { validateObjectValues } = require("../Utils/validateObjectValues");

const router = express.Router();


router.get("/", verifyUser, (request, response) => {
	return response.json({Status: "Success", name: request.name, type: request.type})
})


const salt = 10;

router.post("/register", (request, response) => {
	try {
		validateObjectValues(request.body);
		validatePassword(request.body.password, request.body.confirmPassword)


		connection.query("SELECT * FROM login WHERE correo = ?", [request.body.email], (err, result) => {
			if (err) {
				return response.json({Error: err.message})
			}
			if (result.length !== 0) {
				return response.json({Error: "Este correo ya esta registrado"})
			}

			const query = "INSERT INTO login (`nombre`,`correo`,`clave`, `recuperar`, `tipo`) VALUES (?)";

			bcrypt.hash(request.body.password.toString(), salt, (err, hash) => {
				if (err) { return response.json({Error: "Error encriptando contraseña"}); }

				const values = [
					request.body.name,
					request.body.email,
					hash,
					"pl",
					request.body.type
				]

				connection.query(query, [values], (err, result) => {
					if(err) { return response.json({Error: "Error creando el usuario"}) }

					return response.json({Status: "Success", message: "Usuario creado correctamente"});
				});
			});
		});
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

router.post("/login", (req, res) => {
	try {
		validateObjectValues(req.body);
		const query = "SELECT * FROM login WHERE correo = ?";

		connection.query(query, [req.body.email], (err, data) => {
			if (err) {
				return res.status(500).json({ Error: err.message })
			}

			if (data.length > 0) {
				bcrypt.compare(req.body.password.toString(), data[0].clave, (err, response) => {
					if (err) {
						return res.json({ Error: "Error al comparar contraseñas" });
					}

					if (response) {
						const name = data[0].nombre;
						const type = `${data[0].tipo}`;
						const token = jwt.sign({name, type}, `${properties.get("app.login.token")}`, {expiresIn: "1d"});
						res.cookie("token", token);

						return res.json({ Status: "Success", message: "Sesión iniciada correctamente"});
					} else {
						return res.json({ Error: "La contraseña es incorrecta" });
					}
				});
			} else {
				return res.json({ Error: "El usuario no está registrado." });
			}
		});
	} catch (err) {
		return res.status(500).json({Error: err.message})
	}
});


router.get("/logout", (request, response) => {
	try {
		response.clearCookie("token");
		return response.json({Status: "Success", message: "Sesion Cerrada Correctamente"})
	} catch (err) {
		return response.json({Error: err.message})
	}
})


module.exports = router;
