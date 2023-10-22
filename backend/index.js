const express = require("express");
const cors = require("cors");
require('dotenv').config();


const routerApi = require("./routes");

//APP and Port
const app = express();
const port = 3080;

app.use(express.json());

// Cors Configuration
const whiteList = [
	"http://localhost:3000",
	"http://127.0.0.1:5500",
	"http://localhost:5173"
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