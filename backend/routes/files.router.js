const express = require("express");
const connection = require("../database");

const fs = require("fs");
const moment = require("moment");

const { uploadCsv } = require("../FilesReader/csv.reader");
const readFileName = require("../FilesNameDatabase/fileName");
const upload =require("../middlewares/multer.config");
const { uploadExcel } = require("../FilesReader/excel.reader");


//Routing
const router = express.Router();

router.get("/", (request, response) => {
    connection.query("SELECT * FROM archivos", (err, result) => {
        if (err) {
            throw err;
        }
        return response.json(result);
    })
})

router.post("/upload", upload.single("file"), async (request, response) => {
	// Informacion enviada desde el Front
    const uploadedFile = request.file;
    const selectedOption = request.get('selectedOption');

	// Nombre y fecha del archivo enviado
	let fileName = uploadedFile.filename;
	let fileDate = moment(uploadedFile.uploadDate).format("YYYY-MM-DD HH:mm:ss");


    if (!uploadedFile || !selectedOption) {
        return response.status(400).json({ message: 'No se ha subido ningún archivo o no se ha seleccionado ninguna fuente.' });
    }

	const fileExtension = uploadedFile.filename.split('.').pop();
	let route = __dirname + "/../uploads/" + uploadedFile.filename;
	let wrongRecordsArray = {};

	try {
		switch(fileExtension) {
			case "csv":
				wrongRecordsArray = await uploadCsv(route, selectedOption);break;
			case "xlsx":
				wrongRecordsArray = await uploadExcel(route, selectedOption);break;
			default: response.status(500).json({ message: 'El archivo subido no es valido' });
		}

		readFileName(fileName, fileDate);

		fs.unlink(route, (err) => {
			if(err) {
				throw err;
			}
		})

		// console.log(wrongRecordsArray);
		// if(wrongRecordsArray) {
		// 	console.log(wrongRecordsArray);
		// 	// response.status(200).json({ message: wrongRecordsArray.response, data: wrongRecordsArray.wrongRecordsArray });
		// 	response.status(200).json({ message: wrongRecordsArray.response });
		// }
		response.status(200).json({ message: "Guardado Correctamente" });
	} catch (err) {
		response.status(500).json({ message: 'Ocurrio un error borrando el archivo' });
		console.error(err);
	}
});


module.exports = router;