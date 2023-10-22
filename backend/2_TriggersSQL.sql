DELIMITER //
CREATE TRIGGER actualizar_todas_las_columnas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
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
END;
//
DELIMITER ;
