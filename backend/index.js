const express = require("express");
const cors = require("cors");

const rowsLog = require("./FilesReader/csv.reader");


const routerApi = require("./routes");

//APP and Port
const app = express();
const port = 3080;

app.use(express.json());

app.get("/", (request, response) => {
	response.json({message: "Lol", rowsLog})
})

// Cors Configuration
const whiteList = [
	"http://localhost:3000",
	"http://127.0.0.1:5500",
	"http://localhost:5173",
    "http://127.0.0.1:5173"
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