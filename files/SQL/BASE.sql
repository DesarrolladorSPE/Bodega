-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2023 a las 18:56:37
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
-- 4_base de datos: `bodega`
--

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

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `4_base`
--
ALTER TABLE `4_base`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `4_base`
--
ALTER TABLE `4_base`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=352;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
