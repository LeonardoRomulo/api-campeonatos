import mysql from 'mysql2/promise';

let pool;

pool = mysql.createPool({
    host: 'localhost',
    user: 'usuariolibertadores',
    password: 'senhalibertadores',
    database: 'libertadoresdb'
});

const conexao = await pool.getConnection();

export default pool;