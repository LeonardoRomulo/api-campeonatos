import pool from "../db/conexao.js";

export const retornaCampeonatos = async () => {
    const conexao = await pool.getConnection();

    const campeonatos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos');
    const campeonatos = campeonatos_tb[0];

    conexao.release();

    return campeonatos;
} 

export const retornaCampeonatosId = async (id) => {
    const conexao = await pool.getConnection();

    const campeonatos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE id=?',[id]);
    const campeonatos = campeonatos_tb[0];

    conexao.release();
    return campeonatos;
}

export const retornaCampeonatosAno = async (ano) => {
    const conexao = await pool.getConnection();

    const campeonatos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE ano=?', [ano]);
    const campeonatos = campeonatos_tb[0];

    conexao.release();

    return campeonatos;
}

export const retornaCampeonatoTime = async (time) => {
    const conexao = await pool.getConnection();

    const campeonatos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao ="'+time+'"');
    const campeonatos = campeonatos_tb[0];

    conexao.release();

    return campeonatos;
}