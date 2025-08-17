// Importa o pool de conexões do banco de dados
import pool from "../db/conexao.js";

// Função auxiliar para executar uma query SQL usando uma conexão
async function executaQuery(conexao, query) {
    const resultado_query = await conexao.query(query); // Executa a query
    const resposta = resultado_query[0]; // Obtém apenas os dados (sem metadados)
    return resposta; // Retorna os resultados
}

// Retorna todos os campeonatos
export const retornaCampeonatos = async () => {
    const conexao = await pool.getConnection(); // Obtém uma conexão do pool
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos'; // Query para buscar todos os campeonatos
    const campeonatos = await executaQuery(conexao, query); // Executa a query
    conexao.release(); // Libera a conexão
    return campeonatos; // Retorna os resultados
}

// Retorna campeonato por ID
export const retornaCampeonatosId = async (id) => {
    const conexao = await pool.getConnection(); // Obtém uma conexão do pool
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE id= ' + id; // Query para buscar pelo ID
    const campeonatos = await executaQuery(conexao, query); // Executa a query
    conexao.release(); // Libera a conexão
    return campeonatos; // Retorna os resultados
}

// Retorna campeonatos por ano
export const retornaCampeonatosAno = async (ano) => {
    const conexao = await pool.getConnection(); // Obtém uma conexão do pool
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE ano=' + ano; // Query para buscar pelo ano
    const campeonatos = await executaQuery(conexao, query); // Executa a query
    conexao.release(); // Libera a conexão
    return campeonatos; // Retorna os resultados
}

// Retorna campeonatos por time campeão
export const retornaCampeonatoTime = async (time) => {
    const conexao = await pool.getConnection(); // Obtém uma conexão do pool
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao ="' + time + '"'; // Query para buscar pelo time campeão
    const campeonatos = await executaQuery(conexao, query); // Executa a query
    conexao.release(); // Libera a conexão
    return campeonatos; // Retorna os resultados
}