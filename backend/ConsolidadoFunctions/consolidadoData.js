const { connection } = require("../database")
const util = require("util");

const query = util.promisify(connection.query).bind(connection);

const fetchConsolidadoData = async () => {
    try {
		// const tabla1Results = await query("SELECT * FROM 1_formularioweb");
		const tabla1 = await query("SELECT * FROM 1_formularioweb LIMIT 1")
        const tabla2 = await query("SELECT * FROM 2_sise LIMIT 1");
        const tabla4 = await query("SELECT * FROM 4_base");

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
	for (const codigoPuntoAtencion of Object.keys(tabla1)) {
		const registroTabla1 = tabla1[codigoPuntoAtencion];

		const tablaBase = tabla4[codigoPuntoAtencion]

		// Verificar si hay un registro correspondiente en la tabla 4
		if (tablaBase) {
			// Unir datos de las tablas 1 y 4
			const registroFinal = {
				ID_PUNTO_AT: registroTabla1.codigo_punto_atencion,
				ID_PRESTADOR: tablaBase.id_prestador_cipres,
				AÑO: registroTabla1.ano,
				MES: registroTabla1.mes,
				Marcacion_Sistema: registroTabla1.fuente,
				ID_PRESTADOR: tablaBase.id_prestador_cipres,
				Divipola_Departamento: tablaBase.divipola_asociada_a_la_url,
				Divipola_Municipio: tablaBase.divipola,
				TIPO_PRESTADOR: tablaBase.tipo_de_prestador,
				PRESTADOR: tablaBase.prestador,
				DEPARTAMENTO: tablaBase.departamento,
				MUNICIPIO: tablaBase.municipio,
				CONCACTENAR: tablaBase.departamento + tablaBase.municipio,
				CIUDAD_CAPITAL: "",
				DIRECCION: registroTabla1.punto_atencion_direcion,
				TIPO_PUNTO_DE_ATENCIoN: "",
				TOTAL_INSCRITOS_NETO_SISE_1_numero_de_personas_inscritas_registradas_CV: "",
				TOTAL_INSCRITOS_NETO_HOMBRES_SISE_1_numero_de_personas_inscritas_registradas_CV: "",
				TOTAL_INSCRITOS_NETO_MUJERES_SISE_1_numero_de_personas_inscritas_registradas_CV: "",
				TOTAL_INSCRITOS_ENTRADAS_SISE_1_numero_de_personas_inscritas_registradas_CV: "",
				TOTAL_INSCRITOS_HOMBRES_ENTRADAS_SISE_1_1_numero_de_personas_inscritas_registradas_hombres_CV: "",
				TOTAL_INSCRITOS_MUJERES_ENTRADAS_SISE_1_2_numero_de_personas_inscritas_registradas_mujeres_CV: "",
				TOTAL_INSCRITOS_SALIDAS_SISE: "",
				TOTAL_INSCRITOS_JoVENES_SISE: "",
				TOTAL_INSCRITOS_JoVENES_MUJERES_SISE: "",
				TOTAL_INSCRITOS_JoVENES_HOMBRES_SISE: "",
				TOTAL_INSCRITOS_PcD_SISE: "",
				TOTAL_INSCRITOS_PcD_MUJERES_SISE: "",
				TOTAL_INSCRITOS_PcD_HOMBRES_SISE: "",
				TOTAL_INSCRITOS_VICTIMAS_SISE: "",
				TOTAL_INSCRITOS_VICTIMAS_MUJERES_SISE: "",
				TOTAL_INSCRITOS_VICTIMAS_HOMBRES_SISE: "",
				Total_Oferentes_Neto_Migrantes_Venezolanos: "",
				Total_Oferentes_Neto_Migrantes_Venezolanos_Mujeres: "",
				Total_Oferentes_Neto_Migrantes_Venezolanos_Hombres: "",
				TOTAL_OFERENTES_ETNICOS: "",
				TOTAL_OFERENTES_ETNICOS_MUJERES: "",
				TOTAL_OFERENTES_ETNICOS_HOMBRES: "",
				REMISIONES_A_EMPLEADORES_TOTAL_SISE_2_numero_de_hojas_de_vida_remitidas_a_empleadores_CV: "",
				REMISIONES_A_EMPLEADORES_HOMBRES_SISE_2_1_numero_de_hojas_de_vida_remitidas_a_empleadores_hombres_CV: "",
				REMISIONES_A_EMPLEADORES_MUJERES_SISE_2_2_numero_de_hojas_de_vida_remitidas_a_empleadores_mujeres_CV: "",
				AUTOPOSTULADOS_SISE: "",
				OFERENTES_AUTOPOSTULADOS_HOMBRES: "",
				OFERENTES_AUTOPOSTULADOS_MUJERES: "",
				OFERENTES_JoVENES_AUTOPOSTULADOS: "",
				OFERENTES_JoVENES_AUTOPOSTULADOS_MUJERES: "",
				OFERENTES_JoVENES_AUTOPOSTULADOS_HOMBRES: "",
				OFERENTES_PcD_AUTOPOSTULADOS: "",
				OFERENTES_PcD_AUTOPOSTULADOS_MUJERES: "",
				OFERENTES_PcD_AUTOPOSTULADOS_HOMBRES: "",
				OFERENTES_VICTIMAS_AUTOPOSTULADOS: "",
				OFERENTES_VICTIMAS_AUTOPOSTULADOS_MUJERES: "",
				OFERENTES_VICTIMAS_AUTOPOSTULADOS_HOMBRES: "",
				OFERENTES_AUTOPOSTULADOS_MIGRANTES_VENEZOLANOS: "",
				OFERENTES_AUTOPOSTULADOS_MIGRANTES_VENEZOLANOS_MUJERES: "",
				OFERENTES_AUTOPOSTULADOS_MIGRANTES_VENEZOLANOS_HOMBRES: "",
				REMITIDOS_A_EMPLEADORES_SIN_AUTOPOSTULADOS_SISE_2_numero_de_hojas_de_vida_remitidas_a_empleadores_CV: "",
				REMITIDOS_A_EMPLEADORES_SIN_AUTOPOSTULADOS_HOMBRES_SISE_2_1_numero_de_hojas_de_vida_remitidas_a_empleadores_hombres_CV: "",
				_REMITIDOS_A_EMPLEADORES_SIN_AUTOPOSTULADOS_MUJERES_SISE_2_2_numero_de_hojas_de_vida_remitidas_a_empleadores_mujeres_CV: "",
				HOJAS_DE_VIDA_REMITIDAS_DIRECTAMENTE_POR_EL_PUNTO_DE_ATENCIoN: "",
				HOJAS_DE_VIDA_REMITIDAS_DIRECTAMENTE_POR_EL_PUNTO_DE_ATENCIoN_HOMBRES: "",
				HOJAS_DE_VIDA_REMITIDAS_DIRECTAMENTE_POR_EL_PUNTO_DE_ATENCIoN_MUJERES: "",
				REMITIDOS_POR_EL_PUNTO_DE_ATENCIoN_TOTAL_SISE: "",
				REMITIDOS_POR_AUTOPOSTULACIoN_ASISTIDA_TOTAL_SISE_2_numero_de_hojas_de_vida_remitidas_a_empleadores_CV: "",
				TOTAL_REMISIONES_A_EMPLEADORES_VICTIMAS: "",
				TOTAL_REMISIONES_A_EMPLEADORES_VICTIMAS_MUJERES: "",
				TOTAL_REMISIONES_A_EMPLEADORES_VICTIMAS_HOMBRES: "",
				REMISIONES_A_EMPLEADORES_VICTIMAS: "",
				REMISIONES_A_EMPLEADORES_VICTIMAS_MUJERES: "",
				REMISIONES_A_EMPLEADORES_VICTIMAS_HOMBRES: "",
				TOTAL_REMISIONES_A_EMPLEADORES_PCD: "",
				TOTAL_REMISIONES_A_EMPLEADORES_PCD_MUJERES: "",
				TOTAL_REMISIONES_A_EMPLEADORES_PCD_HOMBRES: "",
				REMISIONES_A_EMPLEADORES_PCD: "",
				REMISIONES_A_EMPLEADORES_PCD_MUJERES: "",
				REMISIONES_A_EMPLEADORES_PCD_HOMBRES: "",
				TOTAL_REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS: "",
				TOTAL_REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS_MUJERES: "",
				TOTAL_REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS_HOMBRES: "",
				REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS: "",
				REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS_MUJERES: "",
				REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS_HOMBRES: "",
				TOTAL_REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS: "",
				TOTAL_REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS_MUJERES: "",
				TOTAL_REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS_HOMBRES: "",
				REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS: "",
				REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS_MUJERES: "",
				REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS_HOMBRES: "",
				REMISIONES_A_EMPLEADORES_ETNICOS: "",
				REMISIONES_A_EMPLEADORES_ETNICOS_MUJERES: "",
				REMISIONES_A_EMPLEADORES_ETNICOS_HOMBRES: "",
				TOTAL_COLOCADOS_SISE_3_numero_de_personas_colocadas_CV: "",
				COLOCADOS_ENTRADAS_SISE_3_numero_de_personas_colocadas_CV: "",
				COLOCADOS_DEVUELTOS_SISE: "",
				COLOCADOS_HOMBRES_SISE_3_1_numero_de_personas_colocadas_hombres_CV: "",
				COLOCADOS_MUJERES_SISE_3_2_numero_de_personas_colocadas_mujeres_CV: "",
				COLOCADOS_DIRECTOS_SISE_3_numero_de_personas_colocadas_CV: "",
				COLOCADOS_DIRECTOS_HOMBRES_SISE_3_1_numero_de_personas_colocadas_hombres_CV: "",
				COLOCADOS_DIRECTOS_MUJERES_SISE_3_2_numero_de_personas_colocadas_mujeres_CV: "",
				COLOCADOS_INDIRECTOS_SISE: "",
				COLOCADOS_INDIRECTOS_HOMBRES_SISE: "",
				COLOCADOS_INDIRECTOS_MUJERES_SISE: "",
				COLOCADOS_DIRECTOS_VICTIMAS_SISE: "",
				COLOCADOS_DIRECTOS_VICTIMAS_MUJERES_SISE: "",
				COLOCADOS_DIRECTOS_VICTIMAS_HOMBRES_SISE: "",
				COLOCADOS_DIRECTOS_PcD_SISE: "",
				COLOCADOS_DIRECTOS_PcD_MUJERES_SISE: "",
				COLOCADOS_DIRECTOS_PcD_HOMBRES_SISE: "",
				COLOCADOS_DIRECTOS_18_A_28_AÑOS_SISE: "",
				COLOCADOS_DIRECTOS_18_A_28_AÑOS_MUJERES_SISE: "",
				COLOCADOS_DIRECTOS_18_A_28_AÑOS_HOMBRES_SISE: "",
				COLOCADOS_DIRECTOS_MIGRANTES_VENEZOLANOS: "",
				COLOCADOS_DIRECTOS_MIGRANTES_VENEZOLANOS_MUJERES: "",
				COLOCADOS_DIRECTOS_MIGRANTES_VENEZOLANOS_HOMBRE: "",
				COLOCADOS_DIRECTOS_ETNICOS: "",
				COLOCADOS_DIRECTOS_ETNICOS_MUJERES: "",
				COLOCADOS_DIRECTOS_ETNICOS_HOMBRES: "",
				SEDES_INSCRITAS_TOTAL_NETO_SISE_4_numero_de_empleadores_registrados_inscritos_CV: "",
				SEDES_INSCRITAS_ENTRADAS_SISE_4_numero_de_empleadores_registrados_inscritos_CV: "",
				SEDES_INSCRITAS_SALIDAS_SISE: "",
				EMPRESAS_INSCRITAS_SISE_4_numero_de_empleadores_registrados_inscritos_CV: "",
				DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_SISE_5_numero_de_personas_atendidas_en_entrevistas_de_orientacion_ocupacional_CV: "",
				DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_HOMBRES_SISE_5_1_numero_de_personas_atendidas_en_entrevistas_de_orientacion_ocupacional_hombres_CV: "",
				DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_MUJERES_SISE_5_2_numero_de_personas_atendidas_en_entrevistas_de_orientacion_ocupacional_mujeres_CV: "",
				VICTIMAS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_SISE: "",
				VICTIMAS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_Mujeres_SISE: "",
				VICTIMAS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_Hombres_SISE: "",
				PCD_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_SISE: "",
				PCD_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_Mujeres_SISE: "",
				PCD_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_Hombres_SISE: "",
				_18_a_28_AÑOS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_SISE: "",
				_18_a_28_AÑOS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_Mujeres_SISE: "",
				_18_a_28_AÑOS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_Hombres_SISE: "",
				MIGRANTES_VENEZOLANOS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_SISE: "",
				MIGRANTES_VENEZOLANOS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_Mujeres_SISE: "",
				MIGRANTES_VENEZOLANOS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_Hombres_SISE: "",
				ETNICOS_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_SISE: "",
				ETNICOS_MUJERES_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_SISE: "",
				ETNICOS_HOMBRES_DIRECCIONAMIENTOS_INDIVIDUALES_DE_ORIENTACIoN_LABORAL_SISE: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_SISE_6_numero_de_personas_atendidas_en_actividades_grupales_de_orientacion_ocupacional: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_HOMBRES_SISE_6_1_numero_de_personas_atendidas_en_actividades_grupales_de_orientacion_ocupacional_hombres: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_MUJERES_SISE_6_2_numero_de_personas_atendidas_en_actividades_grupales_de_orientacion_ocupacional_mujeres: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_PERSONAS_18_a_28_AÑOS: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_PERSONAS_18_a_28_AÑOS_MUJERES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_PERSONAS_18_a_28_AÑOS_HOMBRES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_PcD: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_PcD_MUJERES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_PcD_HOMBRES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_VICTIMAS: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_VICTIMAS_MUJERES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_VICTIMAS_HOMBRES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_Migrantes_Venezolanos: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_Migrantes_Venezolanos_MUJERES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_Migrantes_Venezolanos_HOMBRES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_ETNICOS: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_ETNICOS_MUJERES: "",
				DIRECCIONAMIENTOS_GRUPALES_DE_ORIENTACIoN_LABORAL_REALIZADOS_A_ETNICOS_HOMBRES: "",
				DIRECCIONAMIENTOS_A_FORMACIoN_PARA_EL_TRABAJO_SISE_7_numero_de_personas_direccionadas_a_programas_de_formacion_y_capacitacion_para_el_trabajo: "",
				_7_1_numero_de_personas_direccionadas_a_programas_de_formacion_y_capacitacion_para_el_trabajo_hombres: "",
				_7_1_1_numero_de_personas_direccionadas_a_programas_de_formacion_en_competencias_claves_y_transversales_hombres: "",
				_7_1_2_numero_de_personas_direccionadas_a_programas_de_formacion_en_tecnologias_de_la_informacion_y_las_comunicaciones_tic_hombres: "",
				_7_1_3_numero_de_personas_direccionadas_a_programas_de_alfabetizacion_o_bachillerato_hombres: "",
				_7_1_4_numero_de_personas_direccionadas_a_programas_de_entrenamiento_o_reentrenamiento_tecnico_hombres: "",
				_7_1_5_numero_de_personas_direccionadas_a_programas_de_tecnico_laboral_hombres: "",
				_7_2_numero_de_personas_direccionadas_a_programas_de_formacion_y_capacitacion_para_el_trabajo_mujeres: "",
				_7_2_1_numero_de_personas_direccionadas_a_programas_de_formacion_en_competencias_claves_y_transversales_mujeres: "",
				_7_2_2_numero_de_personas_direccionadas_a_programas_de_formacion_en_tecnologias_de_la_informacion_y_las_comunicaciones_tic_mujeres: "",
				_7_2_3_numero_de_personas_direccionadas_a_programas_de_alfabetizacion_o_bachillerato_mujeres: "",
				_7_2_4_numero_de_personas_direccionadas_a_programas_de_entrenamiento_o_reentrenamiento_tecnico_mujeres: "",
				_7_2_5_numero_de_personas_direccionadas_a_programas_de_tecnico_laboral_mujeres: "",
				DIRECCIONAMIENTOS_A_FORMACIoN_PARA_EL_TRABAJO_REALIZADOS_SISE_8_numero_de_personas_que_culminaron_programas_de_formacion_y_capacitacion_para_el_trabajo: "",
				_8_1_numero_de_personas_que_culminaron_programas_de_formacion_y_capacitacion_para_el_trabajo_hombres: "",
				_8_1_1_numero_de_personas_que_culminaron_programas_de_formacion_en_competencias_claves_y_transversales_hombres: "",
				_8_1_2_numero_de_personas_que_culminaron_programas_de_formacion_en_tecnologias_de_la_informacion_y_las_comunicaciones_tic_hombres: "",
				_8_1_3_numero_de_personas_que_culminaron_programas_de_alfabetizacion_o_bachillerato_hombres: "",
				_8_1_4_numero_de_personas_que_culminaron_programas_de_entrenamiento_o_reentrenamiento_tecnico_hombres: "",
				_8_1_5_numero_de_personas_que_culminaron_programas_de_tecnico_laboral_hombres: "",
				_8_2_numero_de_personas_que_culminaron_programas_de_formacion_y_capacitacion_para_el_trabajo_mujeres: "",
				_8_2_1_numero_de_personas_que_culminaron_programas_de_formacion_en_competencias_claves_y_transversales_mujeres: "",
				_8_2_2_numero_de_personas_que_culminaron_programas_de_formacion_en_tecnologias_de_la_informacion_y_las_comunicaciones_tic_mujeres: "",
				_8_2_3_numero_de_personas_que_culminaron_programas_de_alfabetizacion_o_bachillerato_mujeres: "",
				_8_2_4_numero_de_personas_que_culminaron_programas_de_entrenamiento_o_reentrenamiento_tecnico_mujeres: "",
				_8_2_5_numero_de_personas_que_culminaron_programas_de_tecnico_laboral_mujeres: "",
				DIRECCIONAMIENTOS_A_EMPRENDIMIENTO_SISE_9_numero_de_personas_direccionadas_a_programas_de_emprendimiento: "",
				_9_1_numero_de_personas_direccionadas_a_programas_de_emprendimiento_hombres: "",
				_9_2_numero_de_personas_direccionadas_a_programas_de_emprendimiento_mujeres: "",
				_10_numero_de_pqrs_radicados_en_el_punto_de_atencion: "",
				VACANTES_REGISTRADAS_TOTAL_SISE_Datos_hasta_abril_de_2017_por_CV_: "",
				PUESTOS_DE_TRABAJO_SISE_Datos_hasta_abril_de_2017_por_CV_: "",
				PUESTOS_DE_TRABAJO_CON_GESTIoN_SISE_Datos_desde_junio_de_2017_: "",
				PUESTOS_DE_TRABAJO_SIN_GESTIoN_SISE_Datos_desde_junio_de_2017_: "",
				TIPO_CAJA: "",
				TIPO_PUNTO_ATEN: "",
				TERCERO_DE_UN_ENTE: "",
			};

			registrosFinales.push(registroFinal);
		}
	}


    // Iterar sobre los registros de la tabla 2
    for (const idPuntoAtencion of Object.keys(tabla2)) {
        const registro = tabla2[idPuntoAtencion];

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