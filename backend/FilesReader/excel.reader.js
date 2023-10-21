const ExcelJS = require("exceljs");
const connection = require("../database");
const {columnNames} = require("./csv.reader");
const getFileIdInDatabase = require("../database/getFilesIdInDatabase");

let wrongRecorsArrayExcel = [];

const uploadExcel = async (path, fuente) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.xlsx.readFile(path);
    const worksheetData = worksheet.getWorksheet(1);

    let existingIds = await getFileIdInDatabase();

    const placeholders = Array(columnNames.split(', ').length).fill("?").join(", ");

    worksheetData.eachRow(async (row, rowNumber) => {
        if (rowNumber === 1) return;

        const rowValues =row.values;
		rowValues.splice(0,1);

        const idValue = parseInt(rowValues[0]);

        if (!existingIds.includes(idValue)) {
            const flattenedValues = [fuente, ...rowValues];
            let query = `INSERT INTO reportes (fuente, ${columnNames}) VALUES (?,${placeholders})`;

            try {
                await new Promise((resolve, reject) => {
                    connection.query(query, flattenedValues, (err, result) => {
                        if (err) {
                            console.log("No se pudo insertar el registro de: ", idValue ? `ID: ${idValue}, Fila: ${rowNumber}` : `Fila: ${rowNumber}`);
                            wrongRecorsArrayExcel.push(rowValues);
							console.log(err.message);
                        } else {
                            console.log("Se insertó: " + idValue);
                        }
                        resolve();
                    });
                });
            } catch (queryError) {
                console.log("Error en la consulta SQL: ", queryError);
            }
        } else {
            console.log("El registro con id " + idValue + " ya está en la base de datos");
        }
    });
};

module.exports = { uploadExcel, wrongRecorsArrayExcel };