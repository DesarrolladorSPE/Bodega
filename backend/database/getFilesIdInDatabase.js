const { connection } = require("./index");

const getFileIdAndMesInDatabase = async () => {
    const query = "SELECT id, mes FROM reportes";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                const existingIdsAndMes = results.map(result => ({
					id: result.id,
					mes: result.mes
				}));
                resolve(existingIdsAndMes);
            }
        });
    });
}

const getFileIdInBaseTable = async () => {
    const query = "SELECT id_punto FROM base";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                const existingIdsAndMes = results.map(result => ({
					id: result.id,
				}));
                resolve(existingIdsAndMes);
            }
        });
    });
}


const getColumnNamesInBaseTable = async () => {
    const query = `
		SELECT GROUP_CONCAT(COLUMN_NAME) AS baseColumnNames
		FROM INFORMATION_SCHEMA.COLUMNS
		WHERE TABLE_NAME = 'base' AND COLUMN_NAME NOT IN ('id', 'fuente');
	`;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0].baseColumnNames);
            }
        });
    });
}

module.exports = {getFileIdAndMesInDatabase, getFileIdInBaseTable, getColumnNamesInBaseTable};