const ExcelJS = require("exceljs");

const { insertDataFileToDatabase } = require("../database/inserDataFiles");

const uploadExcel = async (path, fuente) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.xlsx.readFile(path);
    const worksheetData = worksheet.getWorksheet(1);

    worksheetData.eachRow(async (row, rowNumber) => {
        if (rowNumber === 1) return;

        const rowValues =row.values;
		rowValues.splice(0,1);
        const idValue = parseInt(rowValues[0]);
        const mesValue = parseInt(rowValues[3]);
		const flattenedValues = [fuente, ...rowValues];

		//Funcion de insercion en la base de datos
		await insertDataFileToDatabase(rowValues, idValue, mesValue, flattenedValues, rowNumber);
		console.log("lol");
    });
};

module.exports = { uploadExcel };