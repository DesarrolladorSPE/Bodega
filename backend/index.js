const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

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
            callback(new Error("Acceso denegado"));
        }
    },
	methods: ["POST", "GET", "DELETE", "PUT"],
	credentials: true,
}
app.use(cors(options));
app.use(cookieParser());

routerApi(app);

app.listen(port, (request, response) => {
    console.log("Esuchando en el puerto: " + port);
})