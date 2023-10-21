const { connection } = require("./")
const { columnNames } = require("./");
const getFileIdInDatabase = require("./getFilesIdInDatabase");

let wrongRecordsArray = [];

const insertDataFileToDatabase = async (element, idValue, flattenedValues, rowNumber) => {
	let existingIds = await getFileIdInDatabase();
	const placeholders = Array(columnNames.split(', ').length).fill("?").join(", ");

	if(!existingIds.includes(idValue)) {
		let query = `INSERT INTO reportes (fuente, ${columnNames}) VALUES (?,${placeholders})`;

		try {
			await new Promise((resolve, reject) => {
				connection.query(query, flattenedValues, (err, result) => {
					if (err) {
						console.log("No se pudo insertar el registro de: ", idValue ? `ID: ${idValue}, Fila: ${rowNumber}` : `Fila: ${rowNumber}`);
						wrongRecordsArray.push({
							ID: idValue,
							FILA: `Dato incorrecto en la fila ${rowNumber} del archivo subido`,
							message: err.message,
						});
					}
					else {
						console.log("Se inserto: " + idValue);
					}

					resolve();
				})
			})
		} catch (queryError) {
			console.log("Error en la consulta SQL: ", queryError);
		}

	} else {
		console.log("El registro con id " + idValue, ", ya esta en la base de datos");
	}
	return wrongRecordsArray;
}


module.exports = { insertDataFileToDatabase };