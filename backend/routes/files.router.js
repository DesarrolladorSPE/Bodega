const express = require("express");

const fs = require("fs");
const moment = require("moment");

const { uploadCsv } = require("../FilesReader/csv.reader");
const readFileName = require("../FilesNameDatabase/fileName");
const upload =require("../middlewares/multer.config");
const { uploadExcel } = require("../FilesReader/excel.reader");
const { validateFiles } = require("../utils/validateFiles");
const { postQuery } = require("../utils/querys");


//Routing
const router = express.Router();

router.post("/upload", upload.single("file"), async (request, response) => {
	try {
		const uploadedFile = request.file;
		const selectedOption = request.body.selectedOption;

		validateFiles(uploadedFile, selectedOption);

		let fileDate = moment(uploadedFile.uploadDate).format("YYYY-MM-DD HH:mm:ss"); //Fecha


		const fileExtension = uploadedFile.filename.split('.').pop(); //Verifica la extension del archivo
		let route = __dirname + "/../uploads/" + uploadedFile.filename; //Carpeta donde se guarda el archivo temporalmente
		let rowLog = {};

		switch(fileExtension) {
			case "csv":
				rowLog = await uploadCsv(route, selectedOption); break;
			case "xlsx":
				rowLog = await uploadExcel(route, selectedOption); break;
			default: response.json({ Error: "El archivo subido no es valido"});
		}

		await postQuery("INSERT INTO archivos (nombre, fecha) VALUES (?, ?)", [uploadedFile.filename, fileDate])

		fs.unlink(route, (err) => {
			if (err) { throw new Error(err) }
		})

		return response.json({Status: "Success", message: "Archivo procesado correctamente", rowLog });


	} catch (err) {
		return response.json({Error: err.message});
	}
});


module.exports = router;