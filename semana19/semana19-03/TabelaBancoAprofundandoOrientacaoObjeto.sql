use `cruz-2114519-gabriel-silva`;

create table accountUser(
	id varchar(200) primary key,
    cpf varchar(20) not null,
    name varchar(200) not null,
    age int not null,
    balance double not null
);

select * from accountUser;