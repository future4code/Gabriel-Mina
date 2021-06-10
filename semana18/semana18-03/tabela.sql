use `cruz-2114519-gabriel-silva`;


create table usuariosistema(
	id varchar(255) primary key,
    nome varchar(200) not null,
    nicknome varchar(200) not null,
    email varchar(255) not null unique,
    pass varchar(200) not null,
	roles VARCHAR(6) NOT NULL DEFAULT 'NORMAL',
    endereco_id int ,
    foreign key (endereco_id) references enderecosistema(id)
);
select * from usuariosistema;
create table enderecosistema(
	id int primary key auto_increment,
    cep varchar(10) not null,
	logradouro varchar(100) not null,
	complemento varchar(50) not null default "SEM COMPLEMENTO",
	bairro varchar(20) not null,
	cidade varchar(50) not null,
	estado varchar(20) not null
);
-- alter table enderecosistema drop column numero;

UPDATE usuariosistema SET email="g6e8k2i3m1o7e5d9@labenualunos.slack.com" WHERE nicknome= "Minasilva"