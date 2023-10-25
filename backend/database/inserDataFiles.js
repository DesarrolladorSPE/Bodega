const { connection } = require("./")
const { columnNames } = require("./");
const getFileIdAndMesInDatabase = require("./getFilesIdInDatabase");

const insertDataFileToDatabase = async (
		element,
		idValue,
		mesValue,
		flattenedValues,
		rowNumber
	) => {

	let wrongRecordsArray = [];
	let recordsEnteredCount = 0;
	let recordsAlreadyInDatabase = 0;

	let existingIdsAndMes = await getFileIdAndMesInDatabase();

	const placeholders = Array(columnNames.split(', ').length).fill("?").join(", ");

	if(!existingIdsAndMes.some(entry => entry.id === idValue && entry.mes === mesValue)) {
		let query = `INSERT INTO reportes (fuente, ${columnNames}) VALUES (?,${placeholders})`;

		try {
			await new Promise((resolve, reject) => {
				connection.query(query, flattenedValues, (err, result) => {
					if (err) {
						// console.log("No se pudo insertar el registro", idValue ? `ID: ${idValue}, Fila: ${rowNumber}` : `Fila: ${rowNumber}, debido a datos erroneos:`);
						// console.log(`Error: \n ${err}`)
						wrongRecordsArray = [{
							ID: idValue,
							fila: rowNumber,
							warning: `Dato incorrecto en la fila ${rowNumber} del archivo subido`,
							message: err.message,
						}];
					}
					else {
						// console.log(`Se inserto el registro con id: ${idValue} y mes: ${mesValue}`);
						recordsEnteredCount++;
					}
					resolve();
				})
			})
		} catch (queryError) {
			// console.log("Error en la consulta SQL: ", queryError);
		}

	} else {
		console.log(`El registro con id: ${idValue} y mes: ${mesValue} ya esta en la base de datos`);
		recordsAlreadyInDatabase++;
	}
	// return(recordsEnteredCount);
	return {recordsEnteredCount, recordsAlreadyInDatabase, wrongRecordsArray};
}


module.exports = { insertDataFileToDatabase };