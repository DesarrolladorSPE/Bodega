const { connection } = require("../database")
const util = require("util");

const query = util.promisify(connection.query).bind(connection);

const fetchConsolidadoData = async () => {
    try {
		// const tabla1Results = await query("SELECT * FROM 1_formularioweb");
		const tabla1Results = await query("SELECT * FROM 1_formularioweb")
        const tabla2Results = await query("SELECT * FROM 2_sise");
        const tabla4Results = await query("SELECT * FROM 4_base");

        const tabla1 = Array.isArray(tabla1Results) ? tabla1Results : []
        const tabla2 = Array.isArray(tabla2Results) ? tabla2Results : [];
        const tabla4 = Array.isArray(tabla4Results) ? tabla4Results : [];

        // Convertir los resultados de las tablas en objetos indexados por el código del punto de atención
        const indexedTabla1 = indexBy(tabla1, 'codigo_punto_atencion');
        const indexedTabla2 = indexBy(tabla2, 'ID_PUNTO_ATENCIÓN');
        const indexedTabla4 = indexBy(tabla4, 'id_punto');

        // Unir los datos de las tablas 1 y 2 con la tabla 4
        const registrosFinales = joinTables(indexedTabla1, indexedTabla2, indexedTabla4);

        return registrosFinales;

    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Función para indexar un array de objetos por una propiedad específica
const indexBy = (array, property) => {
    return array.reduce((acc, obj) => {
        acc[obj[property]] = obj;
        return acc;
    }, {});
};

// Función para unir los datos de las tablas 1 y 2 con la tabla 4
const joinTables = (tabla1, tabla2, tabla4) => {
    const registrosFinales = [];

    // Iterar sobre los registros de la tabla 1
    for (const registro of tabla1) {
        const codigoPuntoAtencion = registro.codigo_punto_atencion;

        // Verificar si hay un registro correspondiente en la tabla 4
        if (tabla4[codigoPuntoAtencion]) {
            // Unir datos de las tablas 1 y 4
            const registroFinal = {
                ID_PUNTO_AT: registro.ID_PUNTO_AT,
                ID_PRESTADOR: tabla4[codigoPuntoAtencion].ID_PRESTADOR,
                AÑO: registro.AÑO,
                MES: registro.MES,
                "Marcación Sistema": registro.Marcación_Sistema,
                "Divipola Departamento": tabla4[codigoPuntoAtencion]["Divipola Departamento"],
                // Otras columnas...
            };

            registrosFinales.push(registroFinal);
        }
    }

    // Iterar sobre los registros de la tabla 2
    for (const registro of tabla2) {
        const idPuntoAtencion = registro.ID_PUNTO_ATENCIÓN;

        // Verificar si hay un registro correspondiente en la tabla 4
        if (tabla4[idPuntoAtencion]) {
            // Unir datos de las tablas 2 y 4
            const registroFinal = {
                ID_PUNTO_AT: tabla4[idPuntoAtencion].codigo_punto_atencion,
                ID_PRESTADOR: tabla4[idPuntoAtencion].ID_PRESTADOR,
                AÑO: registro.AÑO,
                MES: registro.MES,
                "Marcación Sistema": registro.Marcación_Sistema,
                "Divipola Departamento": tabla4[idPuntoAtencion]["Divipola Departamento"],
                // Otras columnas...
            };

            registrosFinales.push(registroFinal);
        }
    }

    return registrosFinales;
};

module.exports = { fetchConsolidadoData }