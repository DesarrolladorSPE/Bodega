DELIMITER //
CREATE TRIGGER actualizar_total_personas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas = NEW.total_personas_inscritas_hombres + NEW.total_personas_inscritas_mujeres;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER actualizar_total_personas
BEFORE INSERT ON reportes
FOR EACH ROW
BEGIN
  SET NEW.total_personas_inscritas = NEW.total_personas_inscritas_hombres + NEW.total_personas_inscritas_mujeres;
END;
//
DELIMITER ;