var mysql = require('mysql');

// DEV
// var connection = mysql.createConnection({
//     host     : "localhost",
//     user     : "root",
//     password : "",
//     database: "bodega"
// });

// PROD
var connection = mysql.createConnection({
    host     : "10.140.0.16",
    user     : "uaespe.sysdba",
    password : "zGAo_R9k.SK",
    database: "bodega",
});



connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Conexión a la base de datos exitosa")
});

module.exports =  { connection };