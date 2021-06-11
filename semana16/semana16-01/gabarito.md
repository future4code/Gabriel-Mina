
# Exercicio 1
## 1a)O comando Varchar serve para armazenas informacoes em texto, diferente do proprio char , o varchar separa um espaço de armazenamento variavel o DATE armazena a informacoes em data , sendo yyy-mm-dd

## 1b) O comando show databases informa todas as bases de dados criadas neste banco de dados , ja o show table , mostra todas as tabelas criadas.

## 1c)Descreve de forma sucinta a tabela , informando o tipo de cada atributo

# Exercicio 2

## 2a) INSERT INTO Actor(id,name,salary,birth_date,gender) VALUES("002","Glória Pires",1200000,"1963-08-23","female");

## 2b) Duplicate entry '002' for key 'PRIMARY'. Por ser chave primaria , ela não permite duplicidade

## 2c) Column count doesn't match value count at row 1. A coluna nao encontrou o valor, dizendo que esta falando atributos para definir na entrada.
## INSERT INTO Actor (id, name, salary,birth_date,gender)VALUES("003", "Fernanda Montenegro",300000,"1929-10-19", "female");

## 2d) Field 'name' doesn't have a default value. O campo nome nao tem um valor padrão. Ele não foi inserido no comando INSERT INTO Actor (id, name,salary, birth_date, gender)VALUES("004","Lima Duarte",400000,"1949-04-18", "male");

## 2e)Incorrect date value: '1950' for column 'birth_date' at row 1. O campo birth_date aceita somente string e estamo inserindo um number.
## INSERT INTO Actor (id, name, salary, birth_date, gender)VALUES("005", "Juliana Paes",719333.33,"1979-03-26", "female");

# Exercicio 3
## 3a) select * from Actor

## 3b) select salary from Actor WHERE name="Tony Ramos"
 
## 3c)select * from Actor WHERE gender="invalid". Retornou uma tabela vazia , pois não há gender= "invalid"
 
## 3d)select id, name , salary from Actor WHERE salary <=500000

## 3e)Unknown column 'nome' in 'field list'. Nao conhece a columa nome, o nome correto é NAME. SELECT id, name from Actor WHERE id = "002"

# Exercicio 4

## 4a) A query busca todas as informacoes da tabela Actor , onde no campo nome se inicia com a letra A ou a letra J e que o salario seja maior que 300000

## 4b)SELECT * FROM Actor WHERE (not name LIKE "A%") AND salary > 300000

## 4c) SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE  "%g%")

## 4d) SELECT * from Actor WHERE (name like "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR  name LIKE "%G%") AND  salary BETWEEN 350000 AND 900000

# Exercicio 5

## 5a) CREATE TABLE filmes(id VARCHAR(255) PRIMARY KEY, name VARCHAR (255) NOT NULL, sinopse TEXT NOT NULL    data_lancamento DATE NOT NULL,avaliacao int NOT NULL);

## 5b) INSERT INTO filmes(id,name,sinopse,data_lancamento,avaliacao)values("001","Se Eu Fosse Você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-06-01",7)

## 5c e d)INSERT INTO filmes(id,name,sinopse,data_lancamento,avaliacao)values("002",
## "Doce de mãe","Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
## "2012-12-27",
## 10),
## ("003",
## "Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
## "2017-11-02",
## 8);

# Exercicio 6 

## 6a) SELECT id,name,avaliacao from filmes WHERE id="002"

## 6b) SELECT * from filmes where name="Dona Flor e Seus Dois Maridos"

## 6c) SELECT id,name, sinopse from filmes WHERE avaliacao> 7;

# Exercicio 7

## 7a)SELECT * from filmes WHERE name LIKE "%vida%";

## 7b)SELECT * FROM filmes WHERE name LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";

## 7c) SELECT * FROM filmes WHERE data_lancamento < "2020-05-04";

## 7d) SELECT * FROM filmes WHERE data_lancamento < "2020-05-04" AND  (name LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%") AND avaliacao > 7;

