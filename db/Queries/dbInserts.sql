INSERT INTO `rol` (description, active)
VALUES ('admin',1),('secretary',0);

INSERT INTO `country` (name, code, active)
VALUES ('Guatemala','502',1),('Mexico','52',1),('El Salvador','503',1),('Honduras','504',0);

INSERT INTO `ocupation` (description, active)
VALUES ('Estudiante',1),('Maestro',1),('Licenciado',1),('Ingeniero',1);

INSERT INTO `action` (description, active)
VALUES ('testing1',1),('testing2',0);

INSERT INTO `avatar` (code_image, skin_color, cloth_color, hair_color, active) VALUES 
(1,'#BC9A12','#BC9A12','#BC9A12',0),
(2,'#dc6daa','#dc6daa','#dc6daa',1),
(3,'#ae94ac','#ae94ac','#ae94ac',1);

INSERT INTO `clinic`(name, address, phone, open_horary, close_horary, email, active) VALUES 
('Clinica Engazada','12 avenida lote 33 zona 9','22405014','8:00','17:00','engazada@gmail.com',1),
('Clinica 2','14 avenida 8-14 zona 4','22504010','8:00','17:00','clinica2@gmail.com',1),
('Clinica Palamigo','17 calle 2-45 zona 21','23324565','8:00','17:00','palamigo@gmail.com',0);

INSERT INTO `doctor` 
(name, last_name,phone,dpi,address,blocked,age,email,password,configured,active,id_clinic,id_rol,id_avatar,id_country) 
VALUES ('Kenneth','Moriel','23324565','2315687416465','8va calle zona 10',0,35,'kenmo@gmail.com','password',1,1,1,1,1,1),
('Kevin','Ochoa','65486823','568468962354','9na calle zona 10',0,25,'kechoa@gmail.com','password',1,1,1,1,2,1),
('Jhon','Tellheimer','6578965','568468962354','9ta calle zona 10',0,40,'kechoa@gmail.com','password',1,1,1,1,3,2);

INSERT INTO `patient` (name,last_name,email,phone,address,dpi,inscription_date,age,active,id_avatar,id_country,id_clinic,id_ocupation) 
VALUES ('Olivia Marie','Whites Lex','correo@correo.com','58594212','3era avenida Lote 54 zona 6','2304193123131','2018-05-19',25,1,2,1,1,2),
('Ken','Bon','KenBon@gmail.com','56456578','address paciente','235465784545','12-01-18',16,1,2,1,1,1),
('Paciente3','Apellido','paciente3@gmail.com','56456578','address paciente','235465784545','12-01-18',37,0,2,1,1,1);

INSERT INTO `dates` (day, month, year, description, initial_hour, final_hour, send_email, active, id_doctor, id_patient) VALUES 
('01','01','2018','Inicio tratamiento','8:00','9:00',1,1,1,2),
('10','01','2018','Final tratamiento','8:00','9:00',1,1,1,2);

INSERT INTO `history_action` (date, comment, photo, active, id_doctor, id_action) VALUES 
('01/01/2018','Todo esta bien','https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png',1,1,1),
('11/11/2018','NADA esta bien','https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png',1,1,1);

INSERT INTO `patient_history` (date, active, id_patient,id_history)
VALUES ('10/11/2018',1,2,1),('10/11/2018',1,2,2);