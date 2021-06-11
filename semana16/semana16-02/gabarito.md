#		-- Exercicio 1 --

## -- A) deletaria a coluna salary da tabela
## -- B) Alteraria o nome da coluna de gender para sex. Funcinonaria , tendo em vista o mesmo tipo de dado
## -- C) Alteraria o nome e o tipo da coluna 
## -- D)alter table Actor change gender gender varchar(100);

#		-- Exercicio 2 --       

## -- A)
## -- update Actor set name="Fernandinha montenegroso" where id="003";
## -- update Actor set birth_date="1930-01-01" where id="003";          

## -- B)
## -- update Actor set name= upper(name) where id="005";
## -- update Actor set name = lower(name) where id ="005";

## -- C) UPDATE Actor SET 
## 		name = "teste",
## 		birth_date = "2020-02-10",
## 		salary = 600000,
## 		gender = "male"
## WHERE id = 66;*/

## -- D) Ele não atualiza pois nao encontrou o id

#		-- Exercicio 3 --

## -- delete from Actor where name = "Fernandinha montenegroso";
## -- delete from Actor where gender = "male" and salary > 1000000;

#		-- Exercicio 4 --
        
## --A) select max(salary) as maior_Salario from Actor;
## --B) select min(salary) as maior_Salario from Actor;
## --C) select count(*) as todas_Atrizes from Actor where gender="female";
## --D) select sum(salary) as Todos_os_Salario from Actor;

#		-- Exercicio 5 --

## -- B) SELECT id, name FROM Actor ORDER BY name DESC;
## -- C) SELECT * FROM Actor ORDER BY salary;
## -- D) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3
## -- E) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

#		-- Exercicio 6 --    

## -- A) ALTER TABLE Movie ADD playing_limit_date DATE;
## -- B) ALTER TABLE Movie CHANGE rating rating FLOAT;
## -- C) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001"   
## -- D) DELETE FROM Movie WHERE id = "001"

#		-- Exercicio 7 --

## -- A) SELECT COUNT(*) FROM filmes WHERE avaliacao > 7.5;
## -- B) SELECT AVG(avaliacao) FROM filmes;
## -- C) SELECT COUNT(*) FROM filmes WHERE data_lancamento > CURDATE();
## -- D) SELECT COUNT(*) FROM filmes WHERE data_nascimento > CURDATE();
## -- E) SELECT MAX(avaliacao) FROM filmes;
## -- F) SELECT MIN(avaliacao) FROM filmes;  

#	-- Exercicio 8 --      

## -- A) SELECT * FROM filmes ORDER BY name;
## -- B) SELECT * FROM filmes ORDER BY name LIMIT 5;
## -- C) SELECT * FROM filmes WHERE data_nascimento < CURDATE() ORDER BY data_nascimento DESC LIMIT 3;
## -- D) SELECT * FROM filmes ORDER BY avaliacao DESC LIMIT 3;
    
