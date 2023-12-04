const ExcelJS = require("exceljs");

const { insertDataFileToDatabase, insertBaseDeCaracterizacionFileToDatabase } = require("../database/inserDataFiles");
const { getColumnNamesInBaseTable } = require("../database/getFilesIdInDatabase");



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
	let baseColumnNames = await getColumnNamesInBaseTable();

	worksheetData.eachRow(async (row, rowNumber) => {
		rowCount = worksheetData.rowCount - 1;
		if (rowNumber === 1) return;


		promises.push((async () => {
			const rowValues = row.values;
			rowValues.splice(0,1);
			const idValue = parseInt(rowValues[0]);
			const mesValue = parseInt(rowValues[3]);
			const allValues = [fuente, ...rowValues];

			const sanitizedValues = allValues.map(value => {
				return typeof value === 'object' && value.text ? value.text : value;
			});
			const flattenedValues = sanitizedValues.map(value => (value !== undefined ? value : null));

			// console.log(flattenedValues);


			//Funcion de insercion en la base de datos
			if (fuente != 4) {
				databaseInfo = await insertDataFileToDatabase(
					rowValues,
					idValue,
					mesValue,
					flattenedValues,
					rowNumber,
				);
				wrongRecordsArray = [...wrongRecordsArray, ...databaseInfo.wrongRecordsArray];;
				recordsEnteredCount = recordsEnteredCount +  databaseInfo.recordsEnteredCount;
				recordsAlreadyInDatabase = recordsAlreadyInDatabase +  databaseInfo.recordsAlreadyInDatabase;
			}
			else if (fuente == 4) {
				databaseInfo = await insertBaseDeCaracterizacionFileToDatabase(
					rowValues,
					idValue,
					baseColumnNames,
					flattenedValues,
					rowNumber,
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