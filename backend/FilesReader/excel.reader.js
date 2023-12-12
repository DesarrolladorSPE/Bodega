const ExcelJS = require("exceljs");

const { insertDataFileToDatabase, insertBaseDeCaracterizacionFileToDatabase } = require("../database/inserDataFiles");
const { getColumnNamesInDataBase } = require("../database/getFilesIdInDatabase");

const { puntosDeAtencionSena } = require("../FilesReader/puntosAtencionSena")



const uploadExcel = async (path, fuente) => {
	let databaseInfo = {};
	let rowCount = 0;
	let rowsLog = {}

	let wrongRecordsArray = [];
	let recordsEnteredCount = 0;
	let recordsAlreadyInDatabase = 0;

    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.xlsx.readFile(path);

	const worksheetData = worksheet.worksheets[0];


	let promises = [];
	const columnNames = await getColumnNamesInDataBase(fuente);

	worksheetData.eachRow(async (row, rowNumber) => {
		rowCount = worksheetData.rowCount - 1;
		if (rowNumber === 1) return;


		promises.push((async () => {
			const rowValues = row.values;
			rowValues.splice(0,1);

			const idValue = parseInt(fuente == 3 ? rowValues[3] : rowValues[0]);

			const dptValue = parseInt(fuente == 3 ? rowValues[1] : null)
			const puntoAtencion = puntosDeAtencionSena(dptValue);

			const mesValue = parseInt(rowValues[3]);

			let allValues;
			if (fuente == 3) {
				const currentDate = new Date();
				const currentMonth = currentDate.getMonth() + 1; // Sumamos 1 porque los meses van de 0 a 11
				const currentYear = currentDate.getFullYear();

				allValues = [fuente, puntoAtencion, currentMonth, currentYear, ...rowValues];
			} else {
				allValues = [fuente, ...rowValues];
			}

			const sanitizedValues = allValues.map(value => {
				return typeof value === 'object' && value.text ? value.text : value;
			});
			const flattenedValues = sanitizedValues.map(value => (value !== undefined ? value : null));


			//Funcion de insercion en la base de datos
			if (fuente != 4) {
				databaseInfo = await insertDataFileToDatabase(
					rowValues,
					idValue,
					mesValue,
					columnNames,
					flattenedValues,
					rowNumber,
					fuente,
				);
				wrongRecordsArray = [...wrongRecordsArray, ...databaseInfo.wrongRecordsArray];;
				recordsEnteredCount = recordsEnteredCount +  databaseInfo.recordsEnteredCount;
				recordsAlreadyInDatabase = recordsAlreadyInDatabase +  databaseInfo.recordsAlreadyInDatabase;
			}
			else if (fuente == 4) {
				databaseInfo = await insertBaseDeCaracterizacionFileToDatabase(
					rowValues,
					idValue,
					columnNames,
					flattenedValues,
					rowNumber,
					fuente,
				);
				wrongRecordsArray = [...wrongRecordsArray, ...databaseInfo.wrongRecordsArray];;
				recordsEnteredCount = recordsEnteredCount +  databaseInfo.recordsEnteredCount;
				recordsAlreadyInDatabase = recordsAlreadyInDatabase +  databaseInfo.recordsAlreadyInDatabase;
			}

		})());
	});
	await Promise.all(promises);

	return rowsLog = {
		rowCount: rowCount,
		wrongRecordsArray: wrongRecordsArray,
		recordsEnteredCount: recordsEnteredCount,
		recordsAlreadyInDatabase: recordsAlreadyInDatabase,
	}
};

module.exports = { uploadExcel };