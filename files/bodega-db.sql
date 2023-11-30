-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-11-2023 a las 16:32:24
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bodega-prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

DROP TABLE IF EXISTS `archivos`;
CREATE TABLE IF NOT EXISTS `archivos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=145 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fuentes`
--

DROP TABLE IF EXISTS `fuentes`;
CREATE TABLE IF NOT EXISTS `fuentes` (
  `id_fuente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  PRIMARY KEY (`id_fuente`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `fuentes`
--

INSERT INTO `fuentes` (`id_fuente`, `nombre`) VALUES
(1, 'SISE'),
(2, 'FormularioWeb'),
(3, 'SENA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  `correo` varchar(200) CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  `clave` varchar(20) CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  `recuperar` varchar(10) CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  `tipo` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id`, `nombre`, `correo`, `clave`, `recuperar`, `tipo`) VALUES
(1, 'Pablo Carr', 'pablo.carreno@serviciodeempleo.gov.co', '123456', 'pl', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

DROP TABLE IF EXISTS `reportes`;
CREATE TABLE IF NOT EXISTS `reportes` (
  `num` int NOT NULL AUTO_INCREMENT,
  `fuente` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `id` int NOT NULL,
  `punto_atencion_id` int NOT NULL,
  `ano` int NOT NULL,
  `mes` int NOT NULL,
  `tipo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `prestador` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `departamento` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `municipio` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `punto` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `total_personas_inscritas` int UNSIGNED NOT NULL,
  `total_personas_inscritas_hombres` int NOT NULL,
  `total_personas_inscritas_mujeres` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_jovenes` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_mujeres_jovenes` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_hombres_jovenes` int NOT NULL DEFAULT '0',
  `personas_inscritas_mujeres_victimas` int NOT NULL DEFAULT '0',
  `personas_inscritas_hombres_jovenes` int NOT NULL DEFAULT '0',
  `personas_inscritas_mujeres_jovenes` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_PcD` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_mujeres_PcD` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_hombres_PcD` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_Victimas` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_mujeres_victimas` int NOT NULL DEFAULT '0',
  `total_personas_inscritas_hombres_victimas` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_total` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_hombres` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_mujeres` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_hombres_victimas` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_mujeres_victimas` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_hombres_jovenes` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_mujeres_jovenes` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_hombres_PcD` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_mujeres_PcD` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_hombres_Migrantes` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_mujeres_Migrantes` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_hombres_Grupo` int NOT NULL DEFAULT '0',
  `remisiones_a_empleadores_mujeres_Grupo` int NOT NULL DEFAULT '0',
  `colocados_total` int NOT NULL DEFAULT '0',
  `colocados_hombres` int NOT NULL DEFAULT '0',
  `colocados_mujeres` int NOT NULL DEFAULT '0',
  `colocados_hombres_victimas` int NOT NULL DEFAULT '0',
  `colocados_mujeres_victimas` int NOT NULL DEFAULT '0',
  `colocados_hombres_jovenes` int NOT NULL DEFAULT '0',
  `colocados_mujeres_jovenes` int NOT NULL DEFAULT '0',
  `colocados_hombres_PcD` int NOT NULL DEFAULT '0',
  `colocados_mujeres_PcD` int NOT NULL DEFAULT '0',
  `colocados_hombres_Migrantes` int NOT NULL DEFAULT '0',
  `colocados_mujeres_Migrantes` int NOT NULL DEFAULT '0',
  `colocados_hombres_Grupo` int NOT NULL DEFAULT '0',
  `colocados_mujeres_Grupo` int NOT NULL DEFAULT '0',
  `empleadores_inscritos_total` int NOT NULL DEFAULT '0',
  `vacantes_registradas_total` int NOT NULL DEFAULT '0',
  `vacantes_registradas_contrato_laboral` int NOT NULL DEFAULT '0',
  `vacantes_registradas_prestacion` int NOT NULL DEFAULT '0',
  `remitidas_gestion_empleo_total` int NOT NULL DEFAULT '0',
  `remitidas_entrevista_orientacion` int NOT NULL DEFAULT '0',
  `remitidas_talleres_orientacion` int NOT NULL DEFAULT '0',
  `personas_atendidas` int NOT NULL DEFAULT '0',
  `personas_atendidas_hombres` int NOT NULL DEFAULT '0',
  `personas_atendidas_mujeres` int NOT NULL DEFAULT '0',
  `personas_atendidas_hombres_victimas` int NOT NULL DEFAULT '0',
  `personas_atendidas_mujeres_victimas` int NOT NULL DEFAULT '0',
  `personas_atendidas_hombres_jovenes` int NOT NULL DEFAULT '0',
  `personas_atendidas_mujeres_jovenes` int NOT NULL DEFAULT '0',
  `personas_atendidas_hombres_PcD` int NOT NULL DEFAULT '0',
  `personas_atendidas_mujeres_PcD` int NOT NULL DEFAULT '0',
  `personas_atendidas_hombres_Migrantes` int NOT NULL DEFAULT '0',
  `personas_atendidas_mujeres_Migrantes` int NOT NULL DEFAULT '0',
  `personas_atendidas_hombres_Grupo` int NOT NULL DEFAULT '0',
  `personas_atendidas_mujeres_Grupo` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_hombres` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_mujeres` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_hombres_victimas` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_mujeres_victimas` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_hombres_jovenes` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_mujeres_jovenes` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_hombres_PcD` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_mujeres_PcD` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_hombres_Migrantes` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_mujeres_Migrantes` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_hombres_Grupo` int NOT NULL DEFAULT '0',
  `personas_atendidas_en_talleres_mujeres_Grupo` int NOT NULL DEFAULT '0',
  `remitidas_formacion` int NOT NULL DEFAULT '0',
  `remitidas_formacion_hombres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_competencias_hombres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_tic_hombres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_alfabetizacion_hombres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_entrenamiento_hombres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_tecnico_hombres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_mujeres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_competencias_mujeres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_tic_mujeres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_alfabetizacion_mujeres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_entrenamiento_mujeres` int NOT NULL DEFAULT '0',
  `remitidas_formacion_tecnico_mujeres` int NOT NULL DEFAULT '0',
  `culminaron_formacion` int NOT NULL DEFAULT '0',
  `culminaron_formacion_hombres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_competencias_hombres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_tic_hombres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_alfabetizacion_hombres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_entrenamiento_hombres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_tecnico_hombres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_mujeres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_competencias_mujeres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_tic_mujeres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_alfabetizacion_mujeres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_entrenamiento_mujeres` int NOT NULL DEFAULT '0',
  `culminaron_formacion_tecnico_mujeres` int NOT NULL DEFAULT '0',
  `remitidas_talleres_emprendimiento` int NOT NULL DEFAULT '0',
  `remitidas_servicios_complementarios` int NOT NULL DEFAULT '0',
  `talleres_realizados` int NOT NULL DEFAULT '0',
  `remitidas_programas_emprendimiento` int NOT NULL DEFAULT '0',
  `remitidas_programas_emprendimiento_hombres` int NOT NULL DEFAULT '0',
  `remitidas_programas_emprendimiento_mujeres` int NOT NULL DEFAULT '0',
  `pqrs_radicados_total` int NOT NULL DEFAULT '0',
  `personas_orientadas` int NOT NULL DEFAULT '0',
  `colocados_40mil` int NOT NULL DEFAULT '0',
  `transnacionales` int NOT NULL DEFAULT '0',
  `hojas_vida_remitidas_exterior_total` int NOT NULL DEFAULT '0',
  `hojas_vida_remitidas_exterior_hombres` int NOT NULL DEFAULT '0',
  `hojas_vida_remitidas_exterior_mujeres` int NOT NULL DEFAULT '0',
  `personas_colocadas_exterior_total` int NOT NULL DEFAULT '0',
  `personas_colocadas_exterior_hombres` int NOT NULL DEFAULT '0',
  `personas_colocadas_exterior_mujeres` int NOT NULL DEFAULT '0',
  `empleadores_registrados_exterior` int NOT NULL DEFAULT '0',
  `vacantes_registradas_exterior` int NOT NULL DEFAULT '0',
  `observaciones` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `colocados_victimas` int NOT NULL DEFAULT '0',
  `colocados_jovenes` int NOT NULL DEFAULT '0',
  `colocados_discapacidad` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`num`)
) ENGINE=MyISAM AUTO_INCREMENT=3034 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Disparadores `reportes`
--
DROP TRIGGER IF EXISTS `actualizar_todas_las_columnas`;
DELIMITER $$
CREATE TRIGGER `actualizar_todas_las_columnas` BEFORE INSERT ON `reportes` FOR EACH ROW BEGIN
  SET NEW.personas_colocadas_exterior_total = NEW.personas_colocadas_exterior_hombres + NEW.personas_colocadas_exterior_mujeres;
  SET NEW.hojas_vida_remitidas_exterior_total = NEW.hojas_vida_remitidas_exterior_mujeres + NEW.hojas_vida_remitidas_exterior_hombres;
  SET NEW.remitidas_programas_emprendimiento = NEW.remitidas_programas_emprendimiento_mujeres + NEW.remitidas_programas_emprendimiento_hombres;
  SET NEW.culminaron_formacion_mujeres = NEW.culminaron_formacion_competencias_mujeres + NEW.culminaron_formacion_tic_mujeres + NEW.culminaron_formacion_alfabetizacion_mujeres + NEW.culminaron_formacion_entrenamiento_mujeres + NEW.culminaron_formacion_tecnico_mujeres;
  SET NEW.culminaron_formacion_hombres = NEW.culminaron_formacion_competencias_hombres + NEW.culminaron_formacion_tic_hombres + NEW.culminaron_formacion_alfabetizacion_hombres + NEW.culminaron_formacion_entrenamiento_hombres + NEW.culminaron_formacion_tecnico_hombres;
  SET NEW.culminaron_formacion = NEW.culminaron_formacion_hombres + NEW.culminaron_formacion_mujeres;
  SET NEW.remitidas_formacion_mujeres = NEW.remitidas_formacion_competencias_mujeres + NEW.remitidas_formacion_tic_mujeres + NEW.remitidas_formacion_alfabetizacion_mujeres + NEW.remitidas_formacion_entrenamiento_mujeres + NEW.remitidas_formacion_tecnico_mujeres;
  SET NEW.remitidas_formacion_hombres = NEW.remitidas_formacion_competencias_hombres + NEW.remitidas_formacion_tic_hombres + NEW.remitidas_formacion_alfabetizacion_hombres + NEW.remitidas_formacion_entrenamiento_hombres + NEW.remitidas_formacion_tecnico_hombres;
  SET NEW.remitidas_formacion_hombres = NEW.remitidas_formacion_mujeres + NEW.remitidas_formacion_hombres;
  SET NEW.personas_atendidas_en_talleres_mujeres = NEW.personas_atendidas_en_talleres_mujeres_victimas + NEW.personas_atendidas_en_talleres_mujeres_jovenes + NEW.personas_atendidas_en_talleres_mujeres_PcD + NEW.personas_atendidas_en_talleres_mujeres_Migrantes + NEW.personas_atendidas_en_talleres_mujeres_Grupo;
  SET NEW.personas_atendidas_en_talleres_hombres = NEW.personas_atendidas_en_talleres_hombres_victimas + NEW.personas_atendidas_en_talleres_hombres_jovenes + NEW.personas_atendidas_en_talleres_hombres_PcD + NEW.personas_atendidas_en_talleres_hombres_Migrantes + NEW.personas_atendidas_en_talleres_hombres_Grupo;
  SET NEW.personas_atendidas_en_talleres = NEW.personas_atendidas_en_talleres_mujeres + NEW.personas_atendidas_en_talleres_hombres;
  SET NEW.personas_atendidas_mujeres = NEW.personas_atendidas_mujeres_victimas + NEW.personas_atendidas_mujeres_jovenes + NEW.personas_atendidas_mujeres_PcD + NEW.personas_atendidas_mujeres_Migrantes + NEW.personas_atendidas_mujeres_Grupo;
  SET NEW.personas_atendidas_hombres = NEW.personas_atendidas_hombres_victimas + NEW.personas_atendidas_hombres_jovenes + NEW.personas_atendidas_hombres_PcD + NEW.personas_atendidas_hombres_Migrantes + NEW.personas_atendidas_hombres_Grupo;
  SET NEW.personas_atendidas = NEW.personas_atendidas_mujeres + NEW.personas_atendidas_hombres;
  SET NEW.remitidas_gestion_empleo_total = NEW.remitidas_entrevista_orientacion + NEW.remitidas_talleres_orientacion;
  SET NEW.vacantes_registradas_total = NEW.vacantes_registradas_contrato_laboral + NEW.vacantes_registradas_prestacion;
  SET NEW.colocados_mujeres = NEW.colocados_mujeres_victimas + NEW.colocados_mujeres_jovenes + NEW.colocados_mujeres_PcD + NEW.colocados_mujeres_Migrantes + NEW.colocados_mujeres_Grupo;
  SET NEW.colocados_hombres = NEW.colocados_hombres_victimas + NEW.colocados_hombres_jovenes + NEW.colocados_hombres_PcD + NEW.colocados_hombres_Migrantes + NEW.colocados_hombres_Grupo;
  SET NEW.colocados_total = NEW.colocados_mujeres + NEW.colocados_hombres;
  SET NEW.remisiones_a_empleadores_mujeres = NEW.remisiones_a_empleadores_mujeres_victimas + NEW.remisiones_a_empleadores_mujeres_jovenes + NEW.remisiones_a_empleadores_mujeres_PcD + NEW.remisiones_a_empleadores_mujeres_Migrantes + NEW.remisiones_a_empleadores_mujeres_Grupo;
  SET NEW.remisiones_a_empleadores_hombres = NEW.remisiones_a_empleadores_hombres_victimas + NEW.remisiones_a_empleadores_hombres_jovenes + NEW.remisiones_a_empleadores_hombres_PcD + NEW.remisiones_a_empleadores_hombres_Migrantes + NEW.remisiones_a_empleadores_hombres_Grupo;
  SET NEW.remisiones_a_empleadores_total = NEW.remisiones_a_empleadores_mujeres + NEW.remisiones_a_empleadores_hombres;
  SET NEW.total_personas_inscritas_hombres_victimas = NEW.remisiones_a_empleadores_hombres_victimas + NEW.colocados_hombres_victimas + NEW.personas_atendidas_hombres_victimas + NEW.personas_atendidas_en_talleres_hombres_victimas;
  SET NEW.total_personas_inscritas_mujeres_victimas = NEW.remisiones_a_empleadores_mujeres_victimas + NEW.colocados_mujeres_victimas + NEW.personas_atendidas_mujeres_victimas + NEW.personas_atendidas_en_talleres_mujeres_victimas;
  SET NEW.total_personas_inscritas_Victimas = NEW.total_personas_inscritas_hombres_victimas + NEW.total_personas_inscritas_mujeres_victimas;
  SET NEW.total_personas_inscritas_hombres_PcD = NEW.remisiones_a_empleadores_hombres_PcD + NEW.colocados_hombres_PcD + NEW.personas_atendidas_hombres_PcD + NEW.personas_atendidas_en_talleres_hombres_PcD;
  SET NEW.total_personas_inscritas_mujeres_PcD = NEW.remisiones_a_empleadores_mujeres_PcD + NEW.colocados_mujeres_PcD + NEW.personas_atendidas_mujeres_PcD + NEW.personas_atendidas_en_talleres_mujeres_PcD;
  SET NEW.total_personas_inscritas_PcD = NEW.total_personas_inscritas_hombres_PcD + NEW.total_personas_inscritas_mujeres_PcD;
  SET NEW.personas_inscritas_mujeres_jovenes = NEW.remisiones_a_empleadores_mujeres_jovenes + NEW.colocados_mujeres_jovenes + NEW.personas_atendidas_mujeres_jovenes + NEW.personas_atendidas_en_talleres_mujeres_jovenes;
  SET NEW.personas_inscritas_hombres_jovenes = NEW.remisiones_a_empleadores_hombres_jovenes + NEW.colocados_hombres_jovenes + NEW.personas_atendidas_hombres_jovenes + NEW.personas_atendidas_en_talleres_hombres_jovenes;
  SET NEW.personas_inscritas_mujeres_victimas = NEW.total_personas_inscritas_mujeres_victimas;
  SET NEW.total_personas_inscritas_hombres_jovenes = NEW.personas_inscritas_hombres_jovenes;
  SET NEW.total_personas_inscritas_mujeres_jovenes = NEW.personas_inscritas_mujeres_jovenes;
  SET NEW.total_personas_inscritas_jovenes = NEW.total_personas_inscritas_hombres_jovenes + NEW.total_personas_inscritas_mujeres_jovenes;
  SET NEW.total_personas_inscritas_mujeres = NEW.total_personas_inscritas_mujeres_jovenes + NEW.total_personas_inscritas_mujeres_PcD + NEW.total_personas_inscritas_mujeres_victimas;
  SET NEW.total_personas_inscritas_hombres = NEW.total_personas_inscritas_hombres_jovenes + NEW.total_personas_inscritas_hombres_PcD + NEW.total_personas_inscritas_hombres_victimas;
  SET NEW.total_personas_inscritas = NEW.total_personas_inscritas_mujeres + NEW.total_personas_inscritas_hombres;
END
$$
DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
