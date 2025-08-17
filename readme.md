# API Campeonato Libertadores

Esta é uma API REST desenvolvida em Node.js para consultar dados de campeonatos da Libertadores, utilizando MySQL como banco de dados.

## Funcionalidades

- Listar todos os campeonatos
- Buscar campeonatos por ano
- Buscar campeonatos por time campeão
- Buscar campeonato por ID

## Instalação

1. Clone o repositório:

   ```
   git clone <url-do-repositorio>
   cd api campeonato
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Configure o arquivo `.env` com os dados do seu banco MySQL:

   ```
   DB_HOST=localhost
   DB_USER=usuariolibertadores
   DB_PASSWORD=senhalibertadores
   DB_NAME=libertadoresdb
   DB_PORT=3306
   ```

4. Certifique-se de que o banco de dados e a tabela `campeonatos` existem:
   ```sql
   CREATE TABLE campeonatos (
       id INT PRIMARY KEY AUTO_INCREMENT,
       campeao VARCHAR(100),
       vice VARCHAR(100),
       ano INT
   );
   ```

## Execução

Para rodar o servidor com reinício automático em caso de alterações:

```
npx nodemon app.js
```

Ou simplesmente:

```
node app.js
```

## Endpoints

- `GET /campeonatos`  
  Retorna todos os campeonatos.

- `GET /campeonatos?ano=2020`  
  Retorna campeonatos do ano informado.

- `GET /campeonatos?time=Palmeiras`  
  Retorna campeonatos em que o time informado foi campeão.

- `GET /campeonatos/:id`  
  Retorna o campeonato pelo ID.

## Exemplo de uso

Requisição para buscar campeonatos por time:

```
GET http://localhost:9000/campeonatos?time=Palmeiras
```

## Observações

- Não envie o arquivo `.env` para o GitHub.
- Configure as variáveis de ambiente no servidor de produção.
