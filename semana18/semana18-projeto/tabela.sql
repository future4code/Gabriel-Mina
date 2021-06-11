use `cruz-2114519-gabriel-silva`;

create table usuarioCokenu(
	id varchar(200) PRIMARY KEY ,
    email varchar(200) not null unique,
    nome varchar(200) not null,
    pass varchar(200) not null
);
select * from usuarioCokenu;
create table receitaCokenu(
	id int not null PRIMARY KEY auto_increment ,
	titulo varchar(200) not null,
	modo_preparo varchar(200) not null,
	data_criacao date not null,
    usuario_id varchar(200),
    foreign key (usuario_id) references usuarioCokenu(id) 
);
-- alter table receitaCokenu add id int not null PRIMARY KEY auto_increment;
-- alter table receitaCokenu add titulo varchar(200) not null;