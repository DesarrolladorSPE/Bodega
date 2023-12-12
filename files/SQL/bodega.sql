-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-12-2023 a las 22:12:29
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bodega`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `1_formularioweb`
--

CREATE TABLE `1_formularioweb` (
  `id` int(11) NOT NULL,
  `fuente` varchar(12) NOT NULL,
  `codigo_prestador` int(11) NOT NULL,
  `codigo_punto_atencion` int(11) NOT NULL,
  `ano` int(11) NOT NULL,
  `mes` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `prestador` varchar(100) NOT NULL,
  `departamento` varchar(50) NOT NULL,
  `municipio` varchar(50) NOT NULL,
  `punto` varchar(100) NOT NULL,
  `tot_personas_inscritas` int(10) UNSIGNED NOT NULL,
  `tot_personas_inscritas_hombres` int(11) NOT NULL,
  `tot_personas_inscritas_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_mujeres_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_hombres_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_PcD` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_mujeres_PcD` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_hombres_PcD` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_Victimas` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_mujeres_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_hombres_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_mujeres_migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_hombres_migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_grupo_etnico` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_mujeres_grupo_etnico` int(11) NOT NULL DEFAULT 0,
  `tot_personas_inscritas_hombres_grupo_etnico` int(11) NOT NULL DEFAULT 0,
  `remisiones_empleadores_tot` int(11) NOT NULL DEFAULT 0,
  `remisiones_empleadores_hombres` int(11) NOT NULL DEFAULT 0,
  `remisiones_empleadores_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_mujeres_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_hombres_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_Pcd` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_mujeres_Pcd` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_hombres_Pcd` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_mujeres_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_hombres_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_Migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_mujeres_Migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_hombres_Migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_Grupos_Etnicos` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_mujeres_Grupos_Etnicos` int(11) NOT NULL DEFAULT 0,
  `tot_remisiones_empleadores_hombres_Grupos_Etnicos` int(11) NOT NULL DEFAULT 0,
  `tot_colocados` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_mujeres_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_hombres_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_PcD` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_mujeres_PcD` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_hombres_PcD` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_mujeres_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_hombres_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_Migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_mujeres_Migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_hombres_Migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_grupo_etnico` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_mujeres_grupo_etnico` int(11) NOT NULL DEFAULT 0,
  `tot_colocados_hombres_grupo_etnico` int(11) NOT NULL DEFAULT 0,
  `tot_empleadores_inscritos` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci_victimas_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci_victimas_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci_Pcd` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci_Pcd_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_atencion_ocupaci_Pcd_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_jovenes_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_jovenes_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_Migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_Migrantes_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_Migrantes_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_grupo_etnico` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_grupo_etnico_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_entrev_orienta_ocupaci_grupo_etnico_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_jovenes` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_jovenes_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_jovenes_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_Pcd` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_Pcd_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_Pcd_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_victimas` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_victimas_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_victimas_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_migrantes` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_migrantes_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_migrantes_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_grupo_etnico` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_grupo_etnico_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_aten_activi_grup_orienta_ocupaci_grupo_etnico_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_formac_y_capaci_par_el_trabajo` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_formac_y_capaci_par_el_trabajo_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_formac_compete_claves_y_trans_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_formac_tecno_info_y_comunica_tic_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_alfabetizacion_o_bachillerato_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_entrevnamiento_o_reentre_técnico_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_técnico_laboral_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_formac_y_capaci_par_el_trabajo_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_formac_compete_claves_y_trans_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_formac_tecno_info_y_comunica_tic_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_alfabetizacion_o_bachillerato_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_entrevnamiento_o_reentre_técnico_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_direc_progr_técnico_laboral_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_formac_y_capaci_par_el_trabajo` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_formac_y_capaci_par_el_trabajo_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_formac_compete_claves_y_trans_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_formac_tecno_info_y_comunica_tic_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_alfabetizacion_o_bachillerato_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_entrevnamiento_o_reentre_técnico_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_técnico_laboral_hombres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_formac_y_capaci_par_el_trabajo_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_formac_compete_claves_y_trans_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_formac_tecno_info_y_comunica_tic_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_alfabetizacion_o_bachillerato_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_entrevnamiento_o_reentre_técnico_mujeres` int(11) NOT NULL DEFAULT 0,
  `no_per_que_culmi_progr_técnico_laboral_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_direc_progr_emprendimiento` int(11) NOT NULL DEFAULT 0,
  `tot_per_direc_progr_emprendimiento_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_direc_progr_emprendimiento_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_PQRS_radicados` int(11) NOT NULL DEFAULT 0,
  `prestservicios_gestión_y_colocación_de_empleo_en_el_exterior` int(11) NOT NULL DEFAULT 0,
  `tot_hojas_vid_remitidas_exterior` int(11) NOT NULL DEFAULT 0,
  `tot_hojas_vid_remitidas_exterior_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_hojas_vid_remitidas_exterior_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_per_colocadas_exterior` int(11) NOT NULL DEFAULT 0,
  `tot_per_colocadas_exterior_hombres` int(11) NOT NULL DEFAULT 0,
  `tot_per_colocadas_exterior_mujeres` int(11) NOT NULL DEFAULT 0,
  `tot_empleadores_registrados_exterior` int(11) NOT NULL DEFAULT 0,
  `tot_vacantes_registrados_exterior` int(11) NOT NULL DEFAULT 0,
  `punto_atencion_correo` varchar(100) DEFAULT NULL,
  `punto_atencion_direcion` varchar(150) DEFAULT NULL,
  `punto_atencion_fechregistro` date DEFAULT NULL,
  `observaciones` longtext DEFAULT NULL,
  `coordinador_nombre` varchar(100) DEFAULT NULL,
  `coordinador_correo` varchar(100) DEFAULT NULL,
  `coordinador_telefono` int(50) DEFAULT NULL,
  `coordinador_celular` int(50) DEFAULT NULL,
  `responsable_nombre` varchar(100) DEFAULT NULL,
  `responsable_correo` varchar(100) DEFAULT NULL,
  `responsable_telefono` int(50) DEFAULT NULL,
  `responsable_celular` int(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `2_sise`
--

CREATE TABLE `2_sise` (
  `id` int(11) NOT NULL,
  `fuente` varchar(12) NOT NULL,
  `ID_PRESTADOR` int(11) NOT NULL DEFAULT 0,
  `ID_PUNTO_ATENCIÓN` int(11) NOT NULL DEFAULT 0,
  `AÑO` int(10) NOT NULL DEFAULT 0,
  `MES` int(10) NOT NULL DEFAULT 0,
  `TIPO_PRESTADOR` varchar(255) NOT NULL,
  `PRESTADOR` varchar(255) NOT NULL,
  `DEPARTAMENTO` varchar(255) NOT NULL,
  `MUNICIPIO` varchar(255) NOT NULL,
  `DIRECCION` varchar(255) NOT NULL,
  `PERSONAS_INSCRITAS_NETO` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_ENTRADAS` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_Mujer` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_Hombre` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_Victimas` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_Victimas_mujeres` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_Victimas_hombres` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_discapacidad` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_discapacidad_mujeres` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_discapacidad_hombre` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_de_18_a_28_años` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_de_18_a_28_años_mujeres` int(11) NOT NULL DEFAULT 0,
  `PERSONAS_INSCRITAS_TOTAL_SALIDAS_de_18_a_28_años_hombres` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_TOTAL` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_MUJERES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_VICTIMAS` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_VICTIMAS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_VICTIMAS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_PCD` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_PCD_MUJERES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_PCD_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_DE_18_A_28_AÑOS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `REMISIONES_A_EMPLEADORES_MIGRANTES_VENEZOLANOS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Hombres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Victimas` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Victimas_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Victimas_Hombres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Discapacidad` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Discapacidad_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Discapacidad_Hombres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_de_18_a_28_años` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_de_18_a_28_años_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_de_18_a_28_años_Hombres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Migrantes_Venezolanos` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Migrantes_Venezolanos_Hombres` int(11) NOT NULL DEFAULT 0,
  `Total_Oferentes_Neto_Migrantes_Venezolanos_Mujeres` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_VICTIMAS` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_VICTIMAS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_VICTIMAS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_DE_18_A_28_AÑOS` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_DE_18_A_28_AÑOS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_DE_18_A_28_AÑOS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_DISCAPACIDAD` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_DISCAPACIDAD_MUJERES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_DISCAPACIDAD_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_MIGRANTES_VENEZOLANOS` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_MIGRANTES_VENEZOLANOS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_AUTOPOSTULADOS_MIGRANTES_VENEZOLANOS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_REMITIDOS_POR_EL_PUNTO_DE_ATENCION` int(11) NOT NULL DEFAULT 0,
  `OFERENTES_REMITIDOS_POR_AUTOPOSTULACION_ASISTIDA` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS` int(11) NOT NULL DEFAULT 0,
  `COLOCADOS_ACTUALES` int(11) NOT NULL DEFAULT 0,
  `COLOCADOS_DEVUELTOS` int(11) NOT NULL DEFAULT 0,
  `COLOCADOS_DIRECTOS` int(11) NOT NULL DEFAULT 0,
  `COLOCADOS_INDIRECTOS` int(11) NOT NULL DEFAULT 0,
  `COLOCADOS_HOMBRES` int(11) NOT NULL DEFAULT 0,
  `COLOCADOS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `EMPRESAS_SEDES_INSCRITAS_NETO` int(11) NOT NULL DEFAULT 0,
  `EMPRESAS_SEDES_TOTAL_ENTRADAS` int(11) NOT NULL DEFAULT 0,
  `EMPRESAS_SEDES_TOTAL_SALIDAS` int(11) NOT NULL DEFAULT 0,
  `EMPRESAS_INSCRITAS` int(11) NOT NULL DEFAULT 0,
  `SEDES_INSCRITAS` int(11) NOT NULL DEFAULT 0,
  `VACANTES_REGISTRADAS_TOTAL` int(11) NOT NULL DEFAULT 0,
  `PUESTOS_DE_TRABAJO` int(11) NOT NULL DEFAULT 0,
  `PUESTOS_DE_TRABAJO_CON_GESTION` int(11) NOT NULL DEFAULT 0,
  `PUESTOS_DE_TRABAJO_SIN_GESTION` int(11) NOT NULL DEFAULT 0,
  `Total_Colocados_Indirectos_Hombres` int(11) NOT NULL DEFAULT 0,
  `Total_Colocados_Indirectos_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Total_Colocados_Directos_Hombres` int(11) NOT NULL DEFAULT 0,
  `Total_Colocados_Directos_Mujeres` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_VICTIMAS` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_VICTIMAS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_VICTIMAS_HOMBRE` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_PCD` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_PCD_MUJERES` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_PCD_HOMBRE` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_DE_18_A_28_AÑOS` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_DE_18_A_28_AÑOS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_DE_18_A_28_AÑOS_HOMBRE` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_MIGRANTES_VENEZOLANOS` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_MIGRANTES_VENEZOLANOS_HOMBRE` int(11) NOT NULL DEFAULT 0,
  `TOTAL_COLOCADOS_DIRECTOS_MIGRANTES_VENEZOLANOS_MUJERES` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_Hombres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_victimas` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_victimas_mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_victimas_hombres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_PcD` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_PcD_mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_PcD_hombres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_de_18_a_28_años` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_18_a_28_mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_18_a_28_hombres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_Migrantes_Venezolanos` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_Migrantes_Venezolanos_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Entrevistas_Migrantes_Venezolanos_Hombres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_Hombres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_Victimas` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_Victimas_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_Víctimas_Hombres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_Discapacidad` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_Discapacidad_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_Discapacidad_Hombres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_18_a_28_años` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_18_a_28_años_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Orientación_Laboral_Actividades_Grupales_18_a_28_años_Hombres` int(11) NOT NULL DEFAULT 0,
  `Talleres_Actividades_Grupales` int(11) NOT NULL DEFAULT 0,
  `Talleres_Actividades_Grupales_Hombres` int(11) NOT NULL DEFAULT 0,
  `Talleres_Actividades_Grupales_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Talleres_Actividades_Grupales_Migrantes_Venezolanos` int(11) NOT NULL DEFAULT 0,
  `Talleres_Actividades_Grupales_Migrantes_Venezolanos_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Talleres_Actividades_Grupales_Migrantes_Venezolanos_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_alfabetización_bachillerato_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_Competen_claves_trasversales_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_Curso_Seminario_Diplomado_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_Técnico_Laboral_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_TICS_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_alfabetización_bachillerato_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_Competen_claves_trasversales_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_Curso_Seminario_Diplomado_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_Técnico_Laboral_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Registrados_TICS_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_alfabetización_bachillerato_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_Competen_claves_trasversales_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_Curso_Seminario_Diplomado_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_Técnico_Laboral_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_TICS_Hombres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_alfabetización_bachillerato_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_Competen_claves_trasversales_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_Curso_Seminario_Diplomado_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_Técnico_Laboral_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Capacitación_Finalizados_TICS_Mujeres` int(11) NOT NULL DEFAULT 0,
  `Emprendimiento_Registrados` int(11) NOT NULL DEFAULT 0,
  `Emprendimiento_Registrados_Curso_Diplomado_Otro_Hombres` int(11) NOT NULL DEFAULT 0,
  `Emprendimiento_Registrados_Curso_Diplomado_Otro_Mujeres` int(11) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `3_sena`
--

CREATE TABLE `3_sena` (
  `id` int(11) NOT NULL,
  `fuente` varchar(12) NOT NULL,
  `ID_PUNTO_AT` int(20) NOT NULL,
  `MES` int(2) NOT NULL,
  `AÑO` int(5) NOT NULL,
  `pais` int(11) NOT NULL,
  `DPT_ID` int(11) NOT NULL,
  `DEPARTAMENTO` varchar(255) NOT NULL,
  `MPO_ID` int(11) NOT NULL,
  `MUNICIPIO` varchar(255) NOT NULL,
  `INSCRITOS_MUJER` int(100) NOT NULL,
  `INSCRITOS_HOMBRE` int(100) NOT NULL,
  `INSCRITOS_JOVENES_MUJER` int(100) NOT NULL,
  `INSCRITOS_JOVENES_HOMBRE` int(100) NOT NULL,
  `INSCRITOS_PCD_MUJER` int(100) NOT NULL,
  `INSCRITOS_PCD_HOMBRE` int(100) NOT NULL,
  `INSCRITOS_RUV_MUJER` int(100) NOT NULL,
  `INSCRITOS_RUV_HOMBRE` int(100) NOT NULL,
  `ORIENTADOS_MUJER_IND` int(100) NOT NULL,
  `ORIENTADOS_MUJER_GRU` int(100) NOT NULL,
  `ORIENTADOS_HOMBRE_IND` int(100) NOT NULL,
  `ORIENTADOS_HOMBRE_GRU` int(100) NOT NULL,
  `ORIENTADOS_JOVENES_MUJER_IND` int(100) NOT NULL,
  `ORIENTADOS_JOVENES_MUJER_GRU` int(100) NOT NULL,
  `ORIENTADOS_JOVENES_HOMBRE_IND` int(100) NOT NULL,
  `ORIENTADOS_JOVENES_HOMBRE_GRU` int(100) NOT NULL,
  `ORIENTADOS_PCD_MUJER_IND` int(100) NOT NULL,
  `ORIENTADOS_PCD_MUJER_GRU` int(100) NOT NULL,
  `ORIENTADOS_PCD_HOMBRE_IND` int(100) NOT NULL,
  `ORIENTADOS_PCD_HOMBRE_GRU` int(100) NOT NULL,
  `ORIENTADOS_RUV_MUJER_IND` int(100) NOT NULL,
  `ORIENTADOS_RUV_MUJER_GRU` int(100) NOT NULL,
  `ORIENTADOS_RUV_HOMBRE_IND` int(100) NOT NULL,
  `ORIENTADOS_RUV_HOMBRE_GRU` int(100) NOT NULL,
  `COLOCACIONES_MUJER` int(100) NOT NULL,
  `COLOCACIONES_HOMBRE` int(100) NOT NULL,
  `COLOCACIONES_JOVENES_MUJER` int(100) NOT NULL,
  `COLOCACIONES_JOVENES_HOMBRE` int(100) NOT NULL,
  `COLOCACIONES_PCD_MUJER` int(100) NOT NULL,
  `COLOCACIONES_PCD_HOMBRE` int(100) NOT NULL,
  `COLOCACIONES_RUV_MUJER` int(100) NOT NULL,
  `COLOCACIONES_RUV_HOMBRE` int(100) NOT NULL,
  `POSTULACIONES_MUJER_ASISTIDA` int(100) NOT NULL,
  `POSTULACIONES_MUJER_AUTO` int(100) NOT NULL,
  `POSTULACIONES_HOMBRE_ASISTIDA` int(100) NOT NULL,
  `POSTULACIONES_HOMBRE_AUTO` int(100) NOT NULL,
  `POSTS_JOVENES_MUJER_ASISTIDA` int(100) NOT NULL,
  `POSTS_JOVENES_HOMBRE_ASISTIDA` int(100) NOT NULL,
  `POSTS_JOVENES_MUJER_AUTO` int(100) NOT NULL,
  `POSTS_JOVENES_HOMBRE_AUTO` int(100) NOT NULL,
  `POSTS_PCD_MUJER_ASISTIDA` int(100) NOT NULL,
  `POSTS_PCD_MUJER_AUTO` int(100) NOT NULL,
  `POSTS_PCD_HOMBRE_ASISTIDA` int(100) NOT NULL,
  `POSTS_PCD_HOMBRE_AUTO` int(100) NOT NULL,
  `POSTS_RUV_MUJER_ASISTIDA` int(100) NOT NULL,
  `POSTS_RUV_MUJER_AUTO` int(100) NOT NULL,
  `POSTS_RUV_HOMBRE_ASISTIDA` int(100) NOT NULL,
  `POSTS_RUV_HOMBRE_AUTO` int(100) NOT NULL,
  `EMPRESAS` int(100) NOT NULL,
  `SOLICITUDES` int(100) NOT NULL,
  `VACANTES` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `4_base`
--

CREATE TABLE `4_base` (
  `id` int(11) NOT NULL,
  `fuente` tinyint(2) NOT NULL,
  `id_punto` int(100) NOT NULL,
  `id_prestador_cipres` int(100) NOT NULL,
  `nit` int(100) DEFAULT NULL,
  `prestador` varchar(100) DEFAULT NULL,
  `departamento` varchar(100) DEFAULT NULL,
  `municipio` varchar(100) DEFAULT NULL,
  `divipola` int(100) DEFAULT NULL,
  `direccion_punto_de_atencion` text DEFAULT NULL,
  `departamento_asociado_a_la_url` varchar(100) DEFAULT NULL,
  `divipola_asociada_a_la_url` int(100) DEFAULT NULL,
  `segunda_direccion` text DEFAULT NULL,
  `convenio` text DEFAULT NULL,
  `tipo_de_prestador` varchar(100) DEFAULT NULL,
  `naturaleza_del_prestador_publico_privado` varchar(100) DEFAULT NULL,
  `clase_de_prestador` text DEFAULT NULL,
  `tipo_de_ccf` varchar(100) DEFAULT NULL,
  `clase_ente_territorial` varchar(100) DEFAULT NULL,
  `modalidad_de_prestacion_del_servicio` varchar(100) DEFAULT NULL,
  `tipo_de_punto_de_atencion` text NOT NULL,
  `modalidad_de_prestación_del_servicio` varchar(100) NOT NULL,
  `municipios_que_recorre_la_estrategia_movil` text DEFAULT NULL,
  `pagina_web` text DEFAULT NULL,
  `nombre_del_representante_legal` varchar(100) DEFAULT NULL,
  `tipo_de_documento` varchar(100) DEFAULT NULL,
  `numero_de_identificacion` int(100) DEFAULT NULL,
  `correo_electronico_representante_legal` varchar(100) DEFAULT NULL,
  `telefono_representante_legal` int(100) DEFAULT NULL,
  `celular_representante_legal` int(100) DEFAULT NULL,
  `direccion_de_correspondencia` int(100) DEFAULT NULL,
  `coordinador_principal` varchar(100) DEFAULT NULL,
  `tipo_de_documento_coordinador_principal` varchar(100) DEFAULT NULL,
  `cedula_coordinador_principal` int(100) DEFAULT NULL,
  `telefono_coordinador_principal` int(100) DEFAULT NULL,
  `celular_coordinador_principal` int(100) DEFAULT NULL,
  `correo_coordinador_principal` text DEFAULT NULL,
  `coordinador_punto_de_atencion` text DEFAULT NULL,
  `tipo_de_documento_coordinador` varchar(100) DEFAULT NULL,
  `numero_de_identificacion_coordinador` int(100) DEFAULT NULL,
  `telefono_de_contacto_coordinador_punto_de_atencion` int(100) DEFAULT NULL,
  `celular_coordinador_punto_de_atencion` int(100) DEFAULT NULL,
  `correo_electronico_coordinador_punto_de_atencion` text DEFAULT NULL,
  `correo_eelectronico_punto_de_atencion` text DEFAULT NULL,
  `telefono_punto_de_atencion` int(100) DEFAULT NULL,
  `autorizacion` varchar(100) DEFAULT NULL,
  `operacion` varchar(100) DEFAULT NULL,
  `registro` varchar(100) DEFAULT NULL,
  `orientacion` varchar(100) DEFAULT NULL,
  `preseleccion` varchar(100) DEFAULT NULL,
  `remision` varchar(100) DEFAULT NULL,
  `cobros_servicios_basicos_si_no` varchar(100) DEFAULT NULL,
  `otros_servicios` varchar(100) DEFAULT NULL,
  `asociados` varchar(100) DEFAULT NULL,
  `adicionales` varchar(100) DEFAULT NULL,
  `cobros_especializados_si` varchar(100) DEFAULT NULL,
  `observaciones` varchar(100) DEFAULT NULL,
  `horario_de_punto_de_atencion` varchar(100) DEFAULT NULL,
  `resolucion_es_de_autorizacion` varchar(100) DEFAULT NULL,
  `fechas_de_resoluciones_de_autorizacion` date DEFAULT NULL,
  `resolucion_de_modificacion` varchar(100) DEFAULT NULL,
  `fecha_de_resolucion_de_modificacion` date DEFAULT NULL,
  `resolucion_de_negacion` varchar(100) DEFAULT NULL,
  `fecha_de_resolucion_de_negacion` date DEFAULT NULL,
  `resolucion_de_desistimiento` varchar(100) DEFAULT NULL,
  `fecha_de_resolucion_de_desistimiento` date DEFAULT NULL,
  `resolucion_de_recursos` varchar(100) DEFAULT NULL,
  `fecha_de_resolucion_de_recursos` date DEFAULT NULL,
  `resolucion_de_revocaroria` varchar(100) DEFAULT NULL,
  `fecha_de_resolucion_de_revocaroria` date DEFAULT NULL,
  `resolucion_de_aclaracion_o_correccion_error` varchar(100) DEFAULT NULL,
  `fecha_de_resolucion_de_aclaracion_o_correccion_error` date DEFAULT NULL,
  `otras_resoluciones` varchar(100) DEFAULT NULL,
  `fecha_de_otras_resoluciones` date DEFAULT NULL,
  `resolución_vigente` varchar(100) DEFAULT NULL,
  `fecha_de_resolucion_vigente` date DEFAULT NULL,
  `fecha_de_notificacion_de_resolucion` date DEFAULT NULL,
  `fecha_ejecutoria_de_resolucion` date DEFAULT NULL,
  `fecha_de_inicio_de_vigencia_de_resolucion` date DEFAULT NULL,
  `fecha_de_expiracion_resolucion` date DEFAULT NULL,
  `fecha_expiración_de_resolucion_con_decreto_491` date DEFAULT NULL,
  `compania_de_seguro_poliza` varchar(100) DEFAULT NULL,
  `fecha_expedicion_poliza` date DEFAULT NULL,
  `fecha_vencimiento_poliza` date DEFAULT NULL,
  `estado_de_la_poliza` date DEFAULT NULL,
  `fecha_de_insercion` date DEFAULT NULL,
  `fecha_de_actualizacion` date DEFAULT NULL,
  `transnacional` varchar(100) DEFAULT NULL,
  `sise` varchar(100) DEFAULT NULL,
  `tramites_administrativos_sancionatorios` varchar(100) DEFAULT NULL,
  `auto_existencia_merito` varchar(100) DEFAULT NULL,
  `auto_de_apertura` varchar(100) DEFAULT NULL,
  `auto_de_cierre` varchar(100) DEFAULT NULL,
  `acto_administrativo_primera_instancia` varchar(100) DEFAULT NULL,
  `resuelve_recurso_reposicion_primera_instancia` varchar(100) DEFAULT NULL,
  `acto_administrativo_segunda_instancia` varchar(100) DEFAULT NULL,
  `conducta_ejercicio_irregular_inobservancia_de_los_principios` varchar(100) DEFAULT NULL,
  `sancion_impuesta` varchar(100) DEFAULT NULL,
  `oficios_de_comunicacion_a_prestador` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fuentes`
--

CREATE TABLE `fuentes` (
  `id_fuente` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `fuentes`
--

INSERT INTO `fuentes` (`id_fuente`, `nombre`) VALUES
(3, 'SENA'),
(2, 'SISE'),
(1, 'Formulario Web'),
(4, 'Base de Caracterizacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `clave` varchar(20) NOT NULL,
  `recuperar` varchar(10) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id`, `nombre`, `correo`, `clave`, `recuperar`, `tipo`) VALUES
(1, 'Pablo Carreño', 'pablo.carreno@serviciodeempleo.gov.co', '123456', 'pl', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `1_formularioweb`
--
ALTER TABLE `1_formularioweb`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `2_sise`
--
ALTER TABLE `2_sise`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `3_sena`
--
ALTER TABLE `3_sena`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `4_base`
--
ALTER TABLE `4_base`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fuentes`
--
ALTER TABLE `fuentes`
  ADD PRIMARY KEY (`id_fuente`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `1_formularioweb`
--
ALTER TABLE `1_formularioweb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `2_sise`
--
ALTER TABLE `2_sise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `3_sena`
--
ALTER TABLE `3_sena`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `4_base`
--
ALTER TABLE `4_base`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=516;

--
-- AUTO_INCREMENT de la tabla `archivos`
--
ALTER TABLE `archivos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=239;

--
-- AUTO_INCREMENT de la tabla `fuentes`
--
ALTER TABLE `fuentes`
  MODIFY `id_fuente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
