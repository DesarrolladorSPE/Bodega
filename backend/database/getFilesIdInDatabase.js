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
    const query = "SELECT id_punto FROM 4_base";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
				const ids = results.map(row => row.id_punto);
                resolve(ids);
            }
        });
    });
}


const getColumnNamesInBaseTable = async () => {
    const query = `
		SELECT GROUP_CONCAT(COLUMN_NAME) AS baseColumnNames
		FROM INFORMATION_SCHEMA.COLUMNS
		WHERE TABLE_NAME = '4_base' AND COLUMN_NAME NOT IN ('id', 'fuente');
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