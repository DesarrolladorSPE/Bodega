-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2023 a las 16:13:42
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


  `punto_atencion_correo` varchar(100) NULL,
  `punto_atencion_direcion` varchar(150) NULL,
  `punto_atencion_fechregistro` date NULL,
  `observaciones` longtext DEFAULT NULL,

  `coordinador_nombre` varchar(100) NULL,
  `coordinador_correo` varchar(100) NULL,
  `coordinador_telefono` int(50) NULL,
  `coordinador_celular` int(50) NULL,

  `responsable_nombre` varchar(100) NULL,
  `responsable_correo` varchar(100) NULL,
  `responsable_telefono` int(50) NULL,
  `responsable_celular` int(50) NULL

) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Disparadores `1_formularioweb`
--
-- DELIMITER $$
-- CREATE TRIGGER `actualizar_todas_columnas` BEFORE INSERT ON `1_formularioweb` FOR EACH ROW BEGIN
--   SET NEW.personas_colocadas_exterior_tot = NEW.personas_colocadas_exterior_hombres + NEW.personas_colocadas_exterior_mujeres;
--   SET NEW.hojas_vid_remitidas_exterior_tot = NEW.hojas_vid_remitidas_exterior_mujeres + NEW.hojas_vid_remitidas_exterior_hombres;
-- END
-- $$
-- DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `1_formularioweb`
--
ALTER TABLE `1_formularioweb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `1_formularioweb`
--
ALTER TABLE `1_formularioweb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
