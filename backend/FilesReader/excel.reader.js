const ExcelJS = require("exceljs");

const { insertDataFileToDatabase } = require("../database/inserDataFiles");



const uploadExcel = async (path, fuente) => {
	let recordsEnteredCount = 0;
	let rowCount = 0;
	let rowsLog = {}

    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.xlsx.readFile(path);
    const worksheetData = worksheet.getWorksheet(1);

	let promises = [];

    worksheetData.eachRow(async (row, rowNumber) => {
        rowCount = worksheetData.rowCount - 1;
        if (rowNumber === 1) return;


        promises.push((async () => {
			const rowValues = row.values;
			rowValues.splice(0,1);
			const idValue = parseInt(rowValues[0]);
			const mesValue = parseInt(rowValues[3]);
			const flattenedValues = [fuente, ...rowValues];

			//Funcion de insercion en la base de datos
			recordsEnteredCount = await insertDataFileToDatabase(rowValues, idValue, mesValue, flattenedValues, rowNumber);
        })());

    });
	await Promise.all(promises);

	return rowsLog = {
		rowCount: rowCount,
		recordsEnteredCount: recordsEnteredCount,
	}

};

module.exports = { uploadExcel };