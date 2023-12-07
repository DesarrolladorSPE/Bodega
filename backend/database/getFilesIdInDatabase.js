const { connection } = require("./index");

const getConditionalDataForInsertRecord = async (fuente) => {
    const tableNames = {
        1: { tableName: '1_formularioweb', idColumnName: ['codigo_prestador', "mes"] },
        2: { tableName: '2_sise', idColumnName: ['ID_PRESTADOR', "MES"]},
        3: { tableName: '3_sena', idColumnName: ['MPO_ID'] },
        4: { tableName: '4_base', idColumnName: ['id_punto'] },
    };
    const { tableName, idColumnName } = tableNames[fuente];

    const filterColumns = idColumnName.join(', ');

	const query = `SELECT ${filterColumns} FROM ${tableName}`;

    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                const resultArray = results.map(result => {
                    const filterObject = {};
                    idColumnName.forEach(column => {
                        filterObject[column] = result[column];
                    });
                    return filterObject;
                });
                resolve(resultArray);
            }
        });
    });
}

const getColumnNamesInDataBase = async (fuente) => {
	const tableNames = {
		1: '1_formularioweb',
		2: '2_sise',
		3: '3_sena',
		4: '4_base',
	};
	const tableName = tableNames[fuente];

	if (!tableName) {
		throw new Error(`No se encontró una tabla asociada para la fuente ${fuente}`);
	}

	return new Promise((resolve, reject) => {
		const query = `
			SELECT GROUP_CONCAT(COLUMN_NAME) AS columnNames
			FROM INFORMATION_SCHEMA.COLUMNS
			WHERE TABLE_NAME = ? AND COLUMN_NAME NOT IN ('id', 'fuente');
		`;

		connection.query(query, [tableName], (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results[0].columnNames);
			}
		});
	});
};


module.exports = { getColumnNamesInDataBase, getConditionalDataForInsertRecord};