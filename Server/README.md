<h1 align="center">Teste nodejs LuizaLabs/Magalu</h1>

<p align="center">Sistema de produtos favoritos</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e (opcional)[Yarn](https://yarnpkg.com/).
Para facilitar o uso é recomendado ter o [Docker](https://www.docker.com/), é necessário ter o [Postgres](https://www.postgresql.org/) e o 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash

# Abra o projeto no seu editor de código

# Crie um arquivo .env baseado no .envexemple

# Caso queria rodar os teses crie um .env.test baseado no .envexemple.test

# Iniciar os containers com o Postgres
$ make up

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

# Execute as migrations para criar as tabelas no banco de dados
$ yarn sequelize db:migrate

```



### Comandos do Makefile

```bash
#cria e inicia o container com os bancos de dados
$ make up
#apaga os containers
$ make down
#pausa a execução dos containers
$ make stop
#inicia os containers
$ make start
#mostra os logs
$ make logs

```
