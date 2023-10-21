const express = require("express");
const connection = require("../database");

const multer = require("multer");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

const { uploadCsv } = require("../FilesReader/csv.reader");
const readCsvName = require("../FilesNameDatabase/csvName");

//Multer config
let storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "./uploads/");
    },
    filename:(request, file, callback) => {
		const selectedOption = request.get('selectedOption');
		console.log(selectedOption);
		const fileDate = moment().format("YYYY-MM-DD_HH-mm");
		let formatName = file.fieldname + "-" + selectedOption + "_" + fileDate + path.extname(file.originalname);

        callback(null, formatName);
    }
})
let upload = multer({
    storage: storage
});


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
    const selectedOption = request.get('selectedOption');


    if (!uploadedFile || !selectedOption) {
        return response.status(400).json({ message: 'No se ha subido ningún archivo o no se ha seleccionado ninguna fuente.' });
    }

    console.log("Ruta del archivo subido:", uploadedFile.path);
	let route = __dirname + "/../uploads/" + uploadedFile.filename;

	let fileName = uploadedFile.filename;
	let fileDate = moment(uploadedFile.uploadDate).format("YYYY-MM-DD HH:mm:ss");

    if ( await uploadCsv(route, selectedOption)) {
        response.status(200).json({ message: 'Archivo guardado con exito' });

		try {
			readCsvName(fileName, fileDate);

			fs.unlink(route, (err) => {

				if(err) {
					console.log(err);
					throw err;
				}
				console.log("Archivo borrado con exito");
			})
		} catch (err) {
			response.status(500).json({ message: 'Ocurrio un error borrando el archivo' });
		}

    } else {
        response.status(500).json({ message: 'Ocurrio un error' });
    }

});


module.exports = router;