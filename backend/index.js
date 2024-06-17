const express = require("express");

const path = require("path");
const cors = require("cors");

const routerApi = require("./routes");

//APP and Port
const app = express();
const port = 3080;

app.use(express.json());

// Cors Configuration
const whiteList = [
	// LOCAL
	"http://localhost:5173",
    "http://127.0.0.1:5173",

	// DEV
	"http://10.140.0.16:15203",

	// PRUEBAS
	"https://ambientesdepruebas.serviciodeempleo.gov.co/qaconsolidaarchivos"

	// PROD
];
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("No permitido"));
        }
    }
}
app.use(cors(options));

routerApi(app);

app.listen(port, (request, response) => {
    console.log("Esuchando en el puerto: " + port);
})