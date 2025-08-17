// Importa o módulo mysql2 com suporte a Promises
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// Declara a variável pool para gerenciar conexões
let pool;

// Cria um pool de conexões com as configurações do banco
pool = mysql.createPool({
    host: process.env.DB_HOST, // Endereço do servidor MySQL
    user: process.env.DB_USER, // Usuário do banco
    password: process.env.DB_PASSWORD, // Senha do banco
    database: process.env.DB_NAME, // Nome do banco de dados
    port: process.env.DB_PORT,// Porta padrão do MySQL
});

// Obtém uma conexão do pool (não é obrigatório exportar, pode remover se não usar)

// Exporta o pool para ser usado em outros módulos
export default pool;