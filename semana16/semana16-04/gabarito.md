# Exercicio 1

## *a. Explique o que é uma chave estrangeira*
### refere ao relacionamente entre tabelas

## *b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
### INSERT INTO Rating (id, comment, rate, movie_id) VALUES ("001","Muito bom!",7,"004");

## *c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
### Cannot add or update a child row: a foreign key constraint fails. Não é possivel pois oferta um erro de foreign key , onde ele não achou o id

## *d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
### ALTER TABLE Movie DROP COLUMN rating;

## *e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
### Não é possivel , pois o ator esta relacionado na tabela e o Banco não deixar apagar tabelas relacionadas.

# Exercicio 2

## *a. Explique, com as suas palavras, essa tabela*
### Cria 2 campos de chave estrangeira , assim podendo relacionar o id do filme com o id do ator

## *b. Crie, ao menos, 6 relações nessa tabela* 
### INSERT INTO MovieCast(movie_id, actor_id) VALUES("004","001")


## *c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
###  Cannot add or update a child row: a foreign key constraint fails. Não é possivel pois oferta um erro de foreign key , onde ele não achou o id


## *d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
### Não é possivel , pois o ator esta relacionado na tabela e o Banco não deixar apagar tabelas relacionadas.

# Exercicio 3

## *a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*
### O operador on é a clausura de condição do relacionamento entre as tabelas

## *b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
### SELECT m.id as movie_id, r.rate as rating FROM Movie m INNER JOIN Rating r ON m.id = r.movie_id;

