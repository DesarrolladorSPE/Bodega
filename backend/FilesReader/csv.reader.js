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
		.on("end", () => {
			csvDataColl.shift();
			if (csvDataColl.length === 0) {
				return response.status(400).json({ message: "El archivo CSV está vacío" });
			}

			const values = csvDataColl.map((row) => {
				const rowValues = row[0].split(';');
				return [`${fuente}`, ...rowValues];
			});

			values.map(async (element) => {
				const idValue = parseInt(element[1]);
				const mesValue = parseInt(element[4]);
				const flattenedValues = element.flatMap(row => row);
				const rowNumber = values.indexOf(element);

				//Funcion de insercion en la base de datos
				await insertDataFileToDatabase(element, idValue, mesValue, flattenedValues, rowNumber);
			})

		})
		.on("error", (err) => {
			console.log("Error al analizar el archivo CSV:", err);
			throw err;
		});
	stream.pipe(fileStream);
}

module.exports = {uploadCsv};