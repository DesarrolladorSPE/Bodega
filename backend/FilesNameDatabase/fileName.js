const { connection } = require("../database");

const readFileName = (fileName, fileDate) => {
	try {
		let query = "INSERT INTO archivos (nombre, fecha) VALUES (?, ?)"
		connection.query(query, [fileName, fileDate], (err, result) => {
			if (err) {
				throw err;
			}
			return true;
		})
	} catch (err) {
		throw err;
	}
}

module.exports = readFileName;