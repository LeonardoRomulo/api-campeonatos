import express from 'express';
import { retornaCampeonatos } from './service/service.js';
const app = express();

app.get('/campeonatos', async (req, res) => {
    const campeonatos = await retornaCampeonatos();
    res.json(campeonatos);
});

app.get('/campeonatos/:id', async (req, res) => {
    const id = req.params.id;
});

app.listen(9000, async () => {
    const date = new Date();
    console.log(`Servidor iniciado em: ${date}`);
});