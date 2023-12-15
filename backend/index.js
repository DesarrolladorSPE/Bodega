const express = require("express");
const cors = require("cors");

const routerApi = require("./routes");

//APP and Port
const app = express();
const port = 15108;

app.use(express.json());

// Cors Configuration
const whiteList = [
	//DEV
	"http://localhost:3000",
	"http://localhost:5173",
	"http://localhost:15106",
	"http://localhost:15105",

    "http://127.0.0.1:5173",
	"http://127.0.0.1:5500",

	//PROD
	"http://10.140.0.16:15105",
	"http://10.140.0.16:15106",
	"http://10.140.0.16:15107",
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