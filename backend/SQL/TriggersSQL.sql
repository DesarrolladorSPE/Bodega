DELIMITER //
CREATE TRIGGER actualizar_personas_colocadas_exterior_total
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_colocadas_exterior_total = NEW.personas_colocadas_exterior_hombres + NEW.personas_colocadas_exterior_mujeres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_hojas_vida_remitidas_exterior_total
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.hojas_vida_remitidas_exterior_total = NEW.hojas_vida_remitidas_exterior_mujeres + NEW.hojas_vida_remitidas_exterior_hombres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_remitidas_programas_emprendimiento
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.remitidas_programas_emprendimiento = NEW.remitidas_programas_emprendimiento_mujeres + NEW.remitidas_programas_emprendimiento_hombres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_culminaron_formacion_mujeres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.culminaron_formacion_mujeres = NEW.culminaron_formacion_competencias_mujeres + NEW.culminaron_formacion_tic_mujeres + NEW.culminaron_formacion_alfabetizacion_mujeres + NEW.culminaron_formacion_entrenamiento_mujeres + NEW.culminaron_formacion_tecnico_mujeres;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_culminaron_formacion_hombres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.culminaron_formacion_hombres = NEW.culminaron_formacion_competencias_hombres + NEW.culminaron_formacion_tic_hombres + NEW.culminaron_formacion_alfabetizacion_hombres + NEW.culminaron_formacion_entrenamiento_hombres + NEW.culminaron_formacion_tecnico_hombres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_culminaron_formacion
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.culminaron_formacion = NEW.culminaron_formacion_hombres + NEW.culminaron_formacion_mujeres;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_remitidas_formacion_mujeres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.remitidas_formacion_mujeres = NEW.remitidas_formacion_competencias_mujeres + NEW.remitidas_formacion_tic_mujeres + NEW.remitidas_formacion_alfabetizacion_mujeres + NEW.remitidas_formacion_entrenamiento_mujeres + NEW.remitidas_formacion_tecnico_mujeres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_remitidas_formacion_hombres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.remitidas_formacion_hombres = NEW.remitidas_formacion_competencias_hombres + NEW.remitidas_formacion_tic_hombres + NEW.remitidas_formacion_alfabetizacion_hombres + NEW.remitidas_formacion_entrenamiento_hombres + NEW.remitidas_formacion_tecnico_hombres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_remitidas_formacion
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.remitidas_formacion_hombres = NEW.remitidas_formacion_mujeres + NEW.remitidas_formacion_hombres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_personas_atendidas_en_talleres_mujeres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_atendidas_en_talleres_mujeres = NEW.personas_atendidas_en_talleres_mujeres_victimas + NEW.personas_atendidas_en_talleres_mujeres_jovenes + NEW.personas_atendidas_en_talleres_mujeres_PcD + NEW.personas_atendidas_en_talleres_mujeres_Migrantes + NEW.personas_atendidas_en_talleres_mujeres_Grupo;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_personas_atendidas_en_talleres_hombres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_atendidas_en_talleres_hombres = NEW.personas_atendidas_en_talleres_hombres_victimas + NEW.personas_atendidas_en_talleres_hombres_jovenes + NEW.personas_atendidas_en_talleres_hombres_PcD + NEW.personas_atendidas_en_talleres_hombres_Migrantes + NEW.personas_atendidas_en_talleres_hombres_Grupo;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_personas_atendidas_en_talleres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_atendidas_en_talleres = NEW.personas_atendidas_en_talleres_mujeres + NEW.personas_atendidas_en_talleres_hombres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_personas_atendidas_mujeres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_atendidas_mujeres = NEW.personas_atendidas_mujeres_victimas + NEW.personas_atendidas_mujeres_jovenes + NEW.personas_atendidas_mujeres_PcD + NEW.personas_atendidas_mujeres_Migrantes + NEW.personas_atendidas_mujeres_Grupo;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_personas_atendidas_hombres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_atendidas_hombres = NEW.personas_atendidas_hombres_victimas + NEW.personas_atendidas_hombres_jovenes + NEW.personas_atendidas_hombres_PcD + NEW.personas_atendidas_hombres_Migrantes + NEW.personas_atendidas_hombres_Grupo;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_personas_atendidas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_atendidas = NEW.personas_atendidas_mujeres + NEW.personas_atendidas_hombres;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_remitidas_gestion_empleo_total
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.remitidas_gestion_empleo_total = NEW.remitidas_entrevista_orientacion + NEW.remitidas_talleres_orientacion;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_vacantes_registradas_total
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.vacantes_registradas_total = NEW.vacantes_registradas_contrato_laboral + NEW.vacantes_registradas_prestacion;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_colocados_mujeres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.colocados_mujeres = NEW.colocados_mujeres_victimas + NEW.colocados_mujeres_jovenes + NEW.colocados_mujeres_PcD + NEW.colocados_mujeres_Migrantes + NEW.colocados_mujeres_Grupo;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_colocados_hombres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.colocados_hombres = NEW.colocados_hombres_victimas + NEW.colocados_hombres_jovenes + NEW.colocados_hombres_PcD + NEW.colocados_hombres_Migrantes + NEW.colocados_hombres_Grupo;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_colocados_total
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.colocados_total = NEW.colocados_mujeres + NEW.colocados_hombres;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_remisiones_a_empleadores_mujeres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.remisiones_a_empleadores_mujeres = NEW.remisiones_a_empleadores_mujeres_victimas + NEW.remisiones_a_empleadores_mujeres_jovenes + NEW.remisiones_a_empleadores_mujeres_PcD + NEW.remisiones_a_empleadores_mujeres_Migrantes + NEW.remisiones_a_empleadores_mujeres_Grupo;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_remisiones_a_empleadores_hombres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.remisiones_a_empleadores_hombres = NEW.remisiones_a_empleadores_hombres_victimas + NEW.remisiones_a_empleadores_hombres_jovenes + NEW.remisiones_a_empleadores_hombres_PcD + NEW.remisiones_a_empleadores_hombres_Migrantes + NEW.remisiones_a_empleadores_hombres_Grupo;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_remisiones_a_empleadores_total
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.remisiones_a_empleadores_total = NEW.remisiones_a_empleadores_mujeres + NEW.remisiones_a_empleadores_hombres;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_hombres_victimas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_hombres_victimas = NEW.remisiones_a_empleadores_hombres_victimas + NEW.colocados_hombres_victimas + NEW.personas_atendidas_hombres_victimas + NEW.personas_atendidas_en_talleres_hombres_victimas;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_mujeres_victimas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_mujeres_victimas = NEW.remisiones_a_empleadores_mujeres_victimas + NEW.colocados_mujeres_victimas + NEW.personas_atendidas_mujeres_victimas + NEW.personas_atendidas_en_talleres_mujeres_victimas;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_Victimas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_Victimas = NEW.total_personas_inscritas_hombres_victimas + NEW.total_personas_inscritas_mujeres_victimas;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_hombres_PcD
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_hombres_PcD = NEW.remisiones_a_empleadores_hombres_PcD + NEW.colocados_hombres_PcD + NEW.personas_atendidas_hombres_PcD + NEW.personas_atendidas_en_talleres_hombres_PcD;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_mujeres_PcD
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_mujeres_PcD = NEW.remisiones_a_empleadores_mujeres_PcD + NEW.colocados_mujeres_PcD + NEW.personas_atendidas_mujeres_PcD + NEW.personas_atendidas_en_talleres_mujeres_PcD;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_PcD
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_PcD = NEW.total_personas_inscritas_hombres_PcD + NEW.total_personas_inscritas_mujeres_PcD;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_personas_inscritas_mujeres_jovenes
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_inscritas_mujeres_jovenes = NEW.remisiones_a_empleadores_mujeres_jovenes + NEW.colocados_mujeres_jovenes + NEW.personas_atendidas_mujeres_jovenes + NEW.personas_atendidas_en_talleres_mujeres_jovenes;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_personas_inscritas_hombres_jovenes
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_inscritas_hombres_jovenes = NEW.remisiones_a_empleadores_hombres_jovenes + NEW.colocados_hombres_jovenes + NEW.personas_atendidas_hombres_jovenes + NEW.personas_atendidas_en_talleres_hombres_jovenes;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_personas_inscritas_mujeres_victimas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.personas_inscritas_mujeres_victimas = NEW.total_personas_inscritas_mujeres_victimas;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_hombres_jovenes
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_hombres_jovenes = NEW.personas_inscritas_hombres_jovenes;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_mujeres_jovenes
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_mujeres_jovenes = NEW.personas_inscritas_mujeres_jovenes;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_jovenes
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_jovenes = NEW.total_personas_inscritas_hombres_jovenes + NEW.total_personas_inscritas_mujeres_jovenes;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_mujeres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_mujeres = NEW.total_personas_inscritas_mujeres_jovenes + NEW.total_personas_inscritas_mujeres_PcD + NEW.total_personas_inscritas_mujeres_victimas;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas_hombres
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas_hombres = NEW.total_personas_inscritas_hombres_jovenes + NEW.total_personas_inscritas_hombres_PcD + NEW.total_personas_inscritas_hombres_victimas;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_total_personas_inscritas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas = NEW.total_personas_inscritas_mujeres + NEW.total_personas_inscritas_hombres;
END;
//
DELIMITER ;