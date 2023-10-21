const ExcelJS = require("exceljs");

const { insertDataFileToDatabase } = require("../database/inserDataFiles");

const uploadExcel = async (path, fuente) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.xlsx.readFile(path);
    const worksheetData = worksheet.getWorksheet(1);

    const wrongRecordsArray = worksheetData.eachRow(async (row, rowNumber) => {
		let wrongRecordsArray = []
        if (rowNumber === 1) return;

        const rowValues =row.values;
		rowValues.splice(0,1);
        const idValue = parseInt(rowValues[0]);
		const flattenedValues = [fuente, ...rowValues];

		//Funcion de insercion en la base de datos
		wrongRecordsArray = await insertDataFileToDatabase(rowValues, idValue, flattenedValues, rowNumber);
		console.log(worksheetData.rowCount);
		if (rowNumber == worksheetData.rowCount) {
			return wrongRecordsArray;
		}
    });
	return({response: "Registros erroreos",wrongRecordsArray});
};

module.exports = { uploadExcel };