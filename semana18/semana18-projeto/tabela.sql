use `cruz-2114519-gabriel-silva`;

create table usuarioCokenu(
	id varchar(200) PRIMARY KEY ,
    email varchar(200) not null unique,
    nome varchar(200) not null,
    pass varchar(200) not null
);
-- cb9c9711-1001-4844-9989-344499ca35dd
insert into receitaCokenu (titulo,modo_preparo,data_criacao,usuario_id)
values(
	"OVO DE PÁSCOA COM BRIGADEIRO DE COLHER",
    "Derreta o chocolate em banho-maria ou em micro-ondas na potência média.",
    "2021-06-10",
    "cb9c9711-1001-4844-9989-344499ca35dd"
);
select * from receitaCokenu; 
create table receitaCokenu(
	id int not null PRIMARY KEY auto_increment ,
	titulo varchar(200) not null,
	modo_preparo varchar(200) not null,
	data_criacao date not null,
    usuario_id varchar(200),
    foreign key (usuario_id) references usuarioCokenu(id) 
);
select * from receitaCokenu; 
-- alter table receitaCokenu add id int not null PRIMARY KEY auto_increment;
-- alter table receitaCokenu add titulo varchar(200) not null;


create table perfil_a_seguir(
	pessoa_id varchar(200),
    foreign key (pessoa_id) references usuarioCokenu(id)
);

create table pessoa_seguida(
	pessoa_a_seguir_id varchar(200),
    foreign key (pessoa_a_seguir_id) references usuarioCokenu(id)
);
select * from perfil_a_seguir;
select * from pessoa_seguida;

insert into seguidores1 values("92ea5639-cd45-4ce1-bab1-01c75c93a537","5ac072ff-6d1f-4185-9850-f069ee45f28e");
insert into seguidores1 values("92ea5639-cd45-4ce1-bab1-01c75c93a537","be3a4652-07e4-4ba5-bf29-d15de27ffd45");
insert into seguidores1 values("92ea5639-cd45-4ce1-bab1-01c75c93a537","cb9c9711-1001-4844-9989-344499ca35dd");

create table seguidores1(
	pessoa_seguidor_id varchar(200),
    pessoa_seguidor_a_id varchar(200),
    foreign key(pessoa_seguidor_id) references usuarioCokenu(id),
    foreign key(pessoa_seguidor_a_id) references usuarioCokenu(id)
);


