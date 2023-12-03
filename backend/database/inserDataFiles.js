const { connection } = require("./")
const { columnNames } = require("./");
const { getFileIdAndMesInDatabase, getFileIdInBaseTable, getColumnNamesInBaseTable} = require("./getFilesIdInDatabase");

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
		// console.log(`El registro con id: ${idValue} y mes: ${mesValue} ya esta en la base de datos`);
		recordsAlreadyInDatabase++;
	}
	// return(recordsEnteredCount);
	return {recordsEnteredCount, recordsAlreadyInDatabase, wrongRecordsArray};
}






const insertBaseDeCaracterizacionFileToDatabase = async (
		element,
		idValue,
		baseColumnNames,
		flattenedValues,
		rowNumber
	) => {

		try {
			let wrongRecordsArray = [];
			let recordsEnteredCount = 0;
			let recordsAlreadyInDatabase = 0;

			let existingIds = await getFileIdInBaseTable();

			const placeholders = Array(baseColumnNames.split(',').length).fill("?").join(",");

			while (flattenedValues.length <= baseColumnNames.split(',').length) {
				flattenedValues.push(null); // Puedes ajustar el valor predeterminado según tus necesidades
			}

			const isRecordExisting = existingIds.some(entry => entry.id === idValue);

			if(!isRecordExisting) {
				let query = `INSERT INTO base (fuente,${baseColumnNames}) VALUES (?,${placeholders})`;

				try {
					await new Promise((resolve, reject) => {

						connection.query(query, flattenedValues, (err, result) => {
							if (err) {
								// console.log("No se pudo insertar el registro", idValue ? `ID: ${idValue}, Fila: ${rowNumber}` : `Fila: ${rowNumber}, debido a datos erroneos:`);
								// console.log(`Error: \n ${err}`)
								console.error(err);
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
				// console.log(`El registro con id: ${idValue} y mes: ${mesValue} ya esta en la base de datos`);
				// recordsAlreadyInDatabase++;

				// Si el registro ya existe, realiza una actualización
				let updateQuery = `UPDATE base SET fuente = ?, ${updateColumnValues} WHERE id = ?`;

				try {
					await new Promise((resolve, reject) => {
						connection.query(updateQuery, [...flattenedValues, idValue], (err, result) => {
							if (err) {
								wrongRecordsArray = [{
									ID: idValue,
									fila: rowNumber,
									warning: `Dato incorrecto en la fila ${rowNumber} del archivo subido`,
									message: err.message,
								}];
								reject(err);
							} else {
								recordsUpdatedCount++;
							}
							resolve();
						});
					});
				} catch (err) {
					console.log(err);
					// Manejar el error de la actualización
				}
			}
			// return(recordsEnteredCount);
			return {recordsEnteredCount, recordsAlreadyInDatabase, wrongRecordsArray};
		} catch (err) {
			console.error(err.message);
		}
};


module.exports = { insertDataFileToDatabase, insertBaseDeCaracterizacionFileToDatabase };