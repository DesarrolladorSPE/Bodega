const { connection } = require("../database");

const readFileName = (fileName, fileDate) => {
	try {
		let query = "INSERT INTO archivos (nombre, fecha) VALUES (?, ?)"
		connection.query(query, [fileName, fileDate], (err, result) => {
			if (err) {
				throw err;
			}
			console.log("Datos del archivo insertado en la base de datos con éxito");
			return true;
		})
	} catch (err) {
		console.log(err);
		throw err;
	}
}

module.exports = readFileName;