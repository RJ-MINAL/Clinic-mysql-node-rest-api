use impati;

create table clinic(
id int not null auto_increment primary key,
name text not null,
address text not null,
phone text not null,
open_horary text not null,
close_horary text not null,
email text not null,
upper_clinic int,
active int not null
);

create table avatar(
id int not null auto_increment primary key,
code_image int not null,
skin_color text not null,
cloth_color text not null,
hair_color text not null,
active int not null
);

create table country(
id int not null auto_increment primary key,
name text not null,
code text not null,
active int not null
);

create table rol(
id int not null auto_increment primary key,
description text not null,
active int not null
);

create table ocupation(
id int not null auto_increment primary key,
description text not null,
active int not null
);

create table action(
id int not null auto_increment primary key,
description text not null,
active int not null
);

create table doctor(
id int not null auto_increment primary key,
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
foreign key (id_clinic) references clinic(id),
foreign key (id_rol) references rol(id),
foreign key (id_avatar) references avatar(id),
foreign key (id_country) references country(id)
);

create table patient(
id int not null auto_increment primary key,
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
foreign key (id_clinic) references clinic(id),
foreign key (id_ocupation) references ocupation(id),
foreign key (id_avatar) references avatar(id),
foreign key (id_country) references country(id)
);

create table history_action(
id int not null auto_increment primary key,
date text not null,
comment text not null,
photo text not null,
active int not null,
id_doctor int not null,
id_action int not null,
foreign key (id_doctor) references doctor(id),
foreign key (id_action) references action(id)
);

create table patient_history(
id int not null auto_increment primary key,
date text not null,
active int not null,
id_patient int not null,
id_history int not null,
foreign key (id_patient) references patient(id),
foreign key (id_history) references history_action(id)
);

create table dates(
id int not null auto_increment primary key,
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
foreign key (id_patient) references patient(id),
foreign key (id_doctor) references doctor(id)
);

