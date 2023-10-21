const express = require("express");
const connection = require("../database");

const fs = require("fs");
const moment = require("moment");

const { uploadCsv, wrongRecorsArray } = require("../FilesReader/csv.reader");
const readCsvName = require("../FilesNameDatabase/csvName");
const upload =require("../middlewares/multer.config");


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
    const uploadedFile = request.file;
	let fileName = uploadedFile.filename;
	let fileDate = moment(uploadedFile.uploadDate).format("YYYY-MM-DD HH:mm:ss");

    const selectedOption = request.get('selectedOption');


    if (!uploadedFile || !selectedOption) {
        return response.status(400).json({ message: 'No se ha subido ningún archivo o no se ha seleccionado ninguna fuente.' });
    }

	let route = __dirname + "/../uploads/" + uploadedFile.filename;

	try {
		await uploadCsv(route, selectedOption);
		console.log(wrongRecorsArray)
		await readCsvName(fileName, fileDate);

		await fs.unlink(route, (err) => {
			if(err) {
				console.log(err);
				throw err;
			}})
		response.status(200).json({ message: 'Archivo guardado con exito' });

	} catch (err) {
		response.status(500).json({ message: 'Ocurrio un error borrando el archivo' });
		console.log(err)
	}
});


module.exports = router;