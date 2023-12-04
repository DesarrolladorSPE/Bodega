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

--
-- Disparadores `2_sise`
--
-- DELIMITER $$
-- CREATE TRIGGER `actualizar_todas_columnas` BEFORE INSERT ON `2_sise` FOR EACH ROW BEGIN
--   SET NEW.personas_colocadas_exterior_tot = NEW.personas_colocadas_exterior_hombres + NEW.personas_colocadas_exterior_mujeres;
--   SET NEW.hojas_vid_remitidas_exterior_tot = NEW.hojas_vid_remitidas_exterior_mujeres + NEW.hojas_vid_remitidas_exterior_hombres;
-- END
-- $$
-- DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `2_sise`
--
ALTER TABLE `2_sise`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `2_sise`
--
ALTER TABLE `2_sise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
