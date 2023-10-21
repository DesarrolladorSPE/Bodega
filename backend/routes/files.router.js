const express = require("express");
const connection = require("../database");

const multer = require("multer");
const path = require("path");

const { uploadCsv } = require("../FilesReader/csv.reader");

//Multer config
let storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "./uploads/");
    },
    filename:(request, file, callback) => {
        callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
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

    if (uploadCsv(route, selectedOption)) {
        response.status(200).json({ message: 'Archivo guardado con exito' });
    } else {
        response.status(500).json({ message: 'Ocurrio un error' });
    }

});


module.exports = router;