const ExcelJS = require("exceljs");

const { insertDataFileToDatabase } = require("../database/inserDataFiles");

let recordsEnteredCount = 0;
let rowCount = 0;

let rowsLog = {
	recordsEnteredCount: recordsEnteredCount,
	rowCount: rowCount,
}

const uploadExcel = async (path, fuente) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.xlsx.readFile(path);
    const worksheetData = worksheet.getWorksheet(1);

    worksheetData.eachRow(async (row, rowNumber) => {
        rowCount = worksheetData.rowCount;
        if (rowNumber === 1) return;

        const rowValues =row.values;
        rowValues.splice(0,1);
        const idValue = parseInt(rowValues[0]);
        const mesValue = parseInt(rowValues[3]);
        const flattenedValues = [fuente, ...rowValues];

        //Funcion de insercion en la base de datos
        recordsEnteredCount = await insertDataFileToDatabase(rowValues, idValue, mesValue, flattenedValues, rowNumber);

		console.log(rowCount, recordsEnteredCount);
    })
};

module.exports = { uploadExcel, rowsLog };