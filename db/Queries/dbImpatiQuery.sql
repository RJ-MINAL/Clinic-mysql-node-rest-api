create table clinic(
idClinic int not null auto_increment primary key,
name text not null,
address text not null,
phone text not null,
open_horary text not null,
close_horary text not null,
email text not null,
upper_idClinic int,
active int not null
);

create table avatar(
idAvatar int not null auto_increment primary key,
code_image int not null,
skin_color text not null,
cloth_color text not null,
hair_color text not null,
active int not null
);

create table country(
idCountry int not null auto_increment primary key,
name text not null,
code text not null,
active int not null
);

create table rol(
idRol int not null auto_increment primary key,
description text not null,
active int not null
);

create table ocupation(
idOcupation int not null auto_increment primary key,
description text not null,
active int not null
);

create table action(
idAction int not null auto_increment primary key,
description text not null,
active int not null
);

create table doctor(
idDoctor int not null auto_increment primary key,
name text not null,
last_name text not null,
phone text not null,
dpi text not null,
address text not null,
blocked bool not null,
age int not null,
email text not null,
password text not null,
configured bool not null,
id_clinic int not null,
id_rol int not null,
id_avatar int not null,
id_country int not null,
active int not null,
foreign key (id_clinic) references clinic(idClinic),
foreign key (id_rol) references rol(idRol),
foreign key (id_avatar) references avatar(idAvatar),
foreign key (id_country) references country(idCountry)
);

create table patient(
idPatient int not null auto_increment primary key,
name text not null,
last_name text not null,
email text not null,
phone text not null,
address text not null,
dpi text not null,
inscription_date text not null,
age int not null,
id_avatar int not null,
id_country int not null,
id_clinic int not null,
id_ocupation int not null,
active int not null,
foreign key (id_clinic) references clinic(idClinic),
foreign key (id_ocupation) references ocupation(idOcupation),
foreign key (id_avatar) references avatar(idAvatar),
foreign key (id_country) references country(idCountry)
);

create table history_action(
idHistoryAction int not null auto_increment primary key,
date text not null,
comment text not null,
photo text not null,
active int not null,
id_doctor int not null,
id_action int not null,
foreign key (id_doctor) references doctor(idDoctor),
foreign key (id_action) references action(idAction)
);

create table patient_history(
idPatientHistory int not null auto_increment primary key,
date text not null,
active int not null,
id_patient int not null,
id_history int not null,
foreign key (id_patient) references patient(idPatient),
foreign key (id_history) references history_action(idHistoryAction)
);

create table dates(
idDates int not null auto_increment primary key,
day text not null,
month text not null,
year text not null,
description text not null,
initial_hour text not null,
final_hour text not null,
send_email bool not null,
active int not null,
id_doctor int not null,
id_patient int not null,
foreign key (id_patient) references patient(idPatient),
foreign key (id_doctor) references doctor(idDoctor)
);

