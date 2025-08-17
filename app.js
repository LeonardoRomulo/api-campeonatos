// Importa o Express e as funções de serviço
import express from 'express';
import { retornaCampeonatos, retornaCampeonatosAno, retornaCampeonatosId, retornaCampeonatoTime } from './service/service.js';

const app = express(); // Cria uma instância do Express

// Rota para buscar campeonatos, podendo filtrar por ano ou time
app.get('/campeonatos', async (req, res) => {
    let campeonatos;

    // Obtém os parâmetros de consulta da URL
    const ano = req.query.ano;
    const time = req.query.time;

    // Verifica se nenhum filtro foi passado
    if (!ano  && !time ) {
        campeonatos = await retornaCampeonatos(); // Busca todos os campeonatos
    } else if (ano) {
        campeonatos = await retornaCampeonatosAno(ano); // Busca campeonatos por ano
    } else if (time) {
        campeonatos = await retornaCampeonatoTime(time); // Busca campeonatos por time
    }

    // Retorna os campeonatos encontrados ou mensagem de erro
    if (campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({ mensagem: "Nenhum campeonato encontrado" });
    }
});

// Rota para buscar campeonato por ID
app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id); // Obtém o ID da URL
    const campeonatos = await retornaCampeonatosId(id); // Busca campeonato pelo ID

    // Retorna o campeonato encontrado ou mensagem de erro
    if (campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({ mensagem: "Nenhum campeonato encontrado" })
    }
});

// Inicia o servidor na porta 9000 e exibe a data/hora de início
app.listen(9000, async () => {
    const date = new Date();
    console.log(`Servidor iniciado em: ${date}`);
});