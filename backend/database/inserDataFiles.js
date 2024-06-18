const { connection } = require("./")
const { getConditionalDataForInsertRecord } = require("./getFilesIdInDatabase");

const insertDataFileToDatabase = async (
		element,
		idValue,
		mesValue,
		columnNames,
		flattenedValues,
		rowNumber,
		fuente
	) => {
	const tableNames = {
		1: '1_formularioweb',
		2: '2_sise',
		3: '3_sena',
	};
	const tableName = tableNames[fuente];

	let wrongRecordsArray = [];
	let recordsEnteredCount = 0;
	let recordsAlreadyInDatabase = 0;

	// let existingIdsAndMes = await getFileIdAndMesInDatabase();
	while (flattenedValues.length <= columnNames.split(',').length) {
		flattenedValues.push(null);
	}

	const placeholders = Array(columnNames.split(',').length).fill("?").join(",");
	let conditionalData = await getConditionalDataForInsertRecord(fuente);

	const conditionalValue = (fuente) => {
		try {
			let isRecordExisting = false;
			if (fuente == 3) {
				// Fuente 3
				if (conditionalData && Array.isArray(conditionalData)) {
					isRecordExisting = conditionalData.some(entry => entry.MPO_ID == idValue);
				}
			}
			else if(fuente == 1 || fuente == 2) {
				// Fuentes 1 y 2
				if (conditionalData && Array.isArray(conditionalData)) {
					isRecordExisting = conditionalData.some(entry =>{
						const columns = columnNames.split(",");

						return entry[columns[0]] == idValue && entry[columns[3]] == mesValue;
					});
				}
			}
			return(isRecordExisting);
		} catch (err) {

		}
	}

	const conditional = conditionalValue(fuente)

	if(!conditional) {
		let query = `INSERT INTO ${tableName} (fuente, ${columnNames}) VALUES (?,${placeholders})`;
		try {
			await new Promise((resolve, reject) => {
				connection.query(query, flattenedValues, (err, result) => {
					if (err) {
						// console.error(err);
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
		// console.log(`El registro con id: ${idValue} y mes:  ya esta en la base de datos`);
		recordsAlreadyInDatabase++;
	}
	// return(recordsEnteredCount);
	return {recordsEnteredCount, recordsAlreadyInDatabase, wrongRecordsArray};
}







const insertBaseDeCaracterizacionFileToDatabase = async (
	element,
	idValue,
	columnNames,
	flattenedValues,
	rowNumber,
	fuente
) => {
	try {
		let wrongRecordsArray = [];
		let recordsEnteredCount = 0;
		let recordsAlreadyInDatabase = 0;


		const placeholders = Array(columnNames.split(',').length).fill("?").join(",");

		while (flattenedValues.length <= columnNames.split(',').length) {
			flattenedValues.push(null);
		}

		let conditionalData  = await getConditionalDataForInsertRecord(fuente);
		let isRecordExisting = conditionalData.some(entry => entry.id_punto == idValue);

		if(!isRecordExisting) {
			let query = `INSERT INTO 4_base (fuente,${columnNames}) VALUES (?,${placeholders})`;

			try {
				await new Promise((resolve, reject) => {

					connection.query(query, flattenedValues, (err, result) => {
						if (err) {
							// console.log("No se pudo insertar el registro", idValue ? `ID: ${idValue}, Fila: ${rowNumber}` : `Fila: ${rowNumber}, debido a datos erroneos:`);
							// console.log(`Error: \n ${err}`)
							// console.error(err);
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

		}
		else {
			let updateQuery = `UPDATE 4_base SET fuente = ?, ${columnNames.split(',').map(col => `${col.trim()} = ?`).join(', ')} WHERE id_punto = ?`;

			try {
				await new Promise((resolve, reject) => {
					const updateValues = [...flattenedValues, idValue];

					connection.query(updateQuery, updateValues, (err, result) => {
						if (err) {
							wrongRecordsArray = [{
								ID: idValue,
								fila: rowNumber,
								warning: `Dato incorrecto en la fila ${rowNumber} del archivo subido`,
								message: err.message,
							}];
							reject(err);
						} else {
							recordsAlreadyInDatabase++;
						}
						resolve();
					});
				});
			} catch (err) {
				// console.log(err);
				// Manejar el error de la actualización
			}
		}
		// return(recordsEnteredCount);
		return {recordsEnteredCount, recordsAlreadyInDatabase, wrongRecordsArray};
	}
	catch (err) {
		throw new Error(err);
	}
};


module.exports = { insertDataFileToDatabase, insertBaseDeCaracterizacionFileToDatabase };