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

module.exports = getFileIdAndMesInDatabase;