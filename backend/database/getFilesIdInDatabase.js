const { connection } = require("./index");

const getFileIdInDatabase = async () => {
    const query = "SELECT id FROM reportes";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                const existingIds = results.map(result => result.id);
                resolve(existingIds);
            }
        });
    });
}

module.exports = getFileIdInDatabase;