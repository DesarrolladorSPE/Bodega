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

router.post("/upload", upload.single("file"), async (request, response) => {
	// Informacion enviada desde el Front
    const uploadedFile = request.file;
    const selectedOption = request.get('selectedOption');

	if (!uploadedFile || !selectedOption) {
        return response.status(400).json({ message: 'No se ha subido ningún archivo o no se ha seleccionado ninguna fuente.' });
    }

	// Nombre y fecha del archivo enviado
	let fileName = uploadedFile.filename; //Nombre
	let fileDate = moment(uploadedFile.uploadDate).format("YYYY-MM-DD HH:mm:ss"); //Fecha


	const fileExtension = uploadedFile.filename.split('.').pop(); //Verifica la extension del archivo
	let route = __dirname + "/../uploads/" + uploadedFile.filename; //Carpeta donde se guarda el archivo temporalmente
	let wrongRecordsArray = {};
	let data = 0;

	try {
		switch(fileExtension) {
			case "csv": 
				data = await uploadCsv(route, selectedOption); break;
			case "xlsx": 
				data = await uploadExcel(route, selectedOption); break;
			default: response.status(500).json({ message: 'El archivo subido no es valido' });
		}
		
		readFileName(fileName, fileDate);

		try {
			fs.unlink(route, (err) => {
				if(err) {
					throw err;
				}
			})
		} catch (err) {
			console.error("Error borrando el archivo")
			console.error(err)
		}

		console.log("ENTRA AL RESPONSE HACIA EL FRONT", data);
		response.status(200).json({ message: "Guardado Correctamente", data: data});
	} catch (err) {
		response.status(500).json({ message: 'Ocurrio un error procesando el archivo' });
		console.error(err);
	}
});


module.exports = router;