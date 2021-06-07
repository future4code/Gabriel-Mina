
# Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
## Ids representadas por string tem mais proteção contra invasões.

# Explique o código acima com as suas palavras.
## O código insere o id , email e senha no banco de dados User

# *a. O que a linha `as string` faz? Por que precisamos usar ela ali?*
## O as string está tipando o valor do process.env para string, Pois ele pode ser string ou undefined

# O que a linha as any faz? Por que precisamos usá-la ali?
## O as any está tipando o valor do payload para any, Pois ele pode ser qualquer coisa