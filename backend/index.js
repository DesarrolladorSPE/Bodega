const express = require("express");
var mysql = require('mysql');

const routerApi = require("./routes");

const app = express(); 
const port = 3000;

app.get("/", (request, response) => {
    response.send("Servidor iniciado correctamente");
})

routerApi(app);

//-------------------------------------------
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: "bodega"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get("/users", (resquest, response) => {
    connection.query("SELECT * FROM login", (err, data) => {
        if (err) {
            throw err;
        }
        return response.json(data);
    })
})

//-------------------------------------------


app.listen(port, (request, response) => {
    console.log("Esuchando en el puerto: " + port);
})