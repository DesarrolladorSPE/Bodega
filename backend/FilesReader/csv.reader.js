const csv = require("fast-csv");
const fs = require("fs");

const { insertDataFileToDatabase } = require("../database/inserDataFiles");

const uploadCsv = async (path, fuente) => {
	let stream = fs.createReadStream(path);
	let csvDataColl = [];

	let fileStream = csv
		.parse()
		.on("data", (data) => {
			csvDataColl.push(data)
		})
		.on("end", async () => {
			csvDataColl.shift();
			if (csvDataColl.length === 0) {
				return response.status(400).json({ message: "El archivo CSV está vacío" });
			}

			const values = csvDataColl.map((row) => {
				const rowValues = row[0].split(';');
				return [`${fuente}`, ...rowValues];
			});


			let wrongRecordsArray = [];
			for(const element of values) {
				const idValue = parseInt(element[1]);
				const mesValue = parseInt(element[4]);
				const flattenedValues = element.flatMap(row => row);
				const rowNumber = values.indexOf(element);

				//Funcion de insercion en la base de datos
				wrongRecordsArray = await insertDataFileToDatabase(element, idValue, mesValue, flattenedValues, rowNumber);
				if ((values.length) == rowNumber){
					return wrongRecordsArray
				}
			}
			return({response: "Registros erroreos", wrongRecordsArray});
		})
		.on("error", (err) => {
			console.log("Error al analizar el archivo CSV:", err);
			throw err;
		});
	stream.pipe(fileStream);
}

module.exports = {uploadCsv};