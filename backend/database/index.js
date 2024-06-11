var mysql = require('mysql');


const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


// Data Empleo
var connection = mysql.createConnection({
    host     : `${properties.get('app.database.server')}`,
    user     : `${properties.get('app.database.user')}`,
    password : `${properties.get('app.database.password')}`,
    database : `${properties.get('app.database.database')}`,
	port     : `${properties.get('app.database.port')}`
});



connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Conexión a la base de datos exitosa")
});


module.exports = { connection };